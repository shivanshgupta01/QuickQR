import { useState, useEffect, useRef } from 'react';
import { QrCode, Link, Type, User, Palette, Moon, Sun, ImagePlus, Trash2 } from 'lucide-react';
import QRCodeGenerator from './components/QRCodeGenerator';

const PRESET_COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#8B5CF6', '#000000'];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // --- State ---
  const [qrType, setQrType] = useState<'url' | 'text' | 'contact'>('url');
  const [urlData, setUrlData] = useState('https://quickqr.com');
  const [textData, setTextData] = useState('Hello from QuickQR! 👋');
  const [contactData, setContactData] = useState({ name: '', phone: '', email: '' });
  const [qrColor, setQrColor] = useState('#6366F1');
  const [qrLogo, setQrLogo] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle image upload and convert to local URL
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setQrLogo(imageUrl);
    }
  };

  const removeLogo = () => {
    setQrLogo(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const generateVCard = () => `BEGIN:VCARD\nVERSION:3.0\nN:${contactData.name}\nTEL:${contactData.phone}\nEMAIL:${contactData.email}\nEND:VCARD`;
  const currentQRData = qrType === 'url' ? urlData : qrType === 'text' ? textData : generateVCard();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 sticky top-0 z-10 shadow-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 text-primary">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
              <QrCode size={24} className="text-primary dark:text-indigo-400" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">QuickQR</h1>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-8 mt-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT PANEL */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            
            {/* 1. Data Type */}
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">1</span>
              Select Data Type
            </h2>
            <div className="flex bg-gray-100 dark:bg-gray-900 p-1.5 rounded-2xl mb-10 shadow-inner">
              {(['url', 'text', 'contact'] as const).map((type) => (
                <button 
                  key={type} onClick={() => setQrType(type)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all capitalize ${qrType === type ? 'bg-white dark:bg-gray-800 text-primary shadow-md scale-100' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 scale-95 hover:scale-100'}`}
                >
                  {type === 'url' && <Link size={18} />}
                  {type === 'text' && <Type size={18} />}
                  {type === 'contact' && <User size={18} />}
                  {type}
                </button>
              ))}
            </div>

            {/* 2. Enter Content */}
            <div className="mb-10">
              <h2 className="text-sm uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">2</span>
                Enter Content
              </h2>
              {qrType === 'url' && (
                <input type="url" placeholder="https://example.com" className="w-full p-4 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium" value={urlData} onChange={(e) => setUrlData(e.target.value)} />
              )}
              {qrType === 'text' && (
                <textarea rows={4} placeholder="Type anything here..." className="w-full p-4 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none font-medium" value={textData} onChange={(e) => setTextData(e.target.value)} />
              )}
              {qrType === 'contact' && (
                <div className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full p-3 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-primary transition-all" value={contactData.name} onChange={(e) => setContactData({...contactData, name: e.target.value})} />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone" className="w-full p-3 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-primary transition-all" value={contactData.phone} onChange={(e) => setContactData({...contactData, phone: e.target.value})} />
                    <input type="email" placeholder="Email" className="w-full p-3 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-primary transition-all" value={contactData.email} onChange={(e) => setContactData({...contactData, email: e.target.value})} />
                  </div>
                </div>
              )}
            </div>

            {/* 3. Customize Colors */}
            <div className="mb-10">
              <h2 className="text-sm uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">3</span>
                Customize Color
              </h2>
              <div className="flex items-center gap-3 flex-wrap">
                {PRESET_COLORS.map(color => (
                  <button
                    key={color} onClick={() => setQrColor(color)} style={{ backgroundColor: color }}
                    className={`w-10 h-10 rounded-full transition-all duration-200 border-2 ${qrColor === color ? 'border-gray-900 dark:border-white scale-110 shadow-lg' : 'border-transparent hover:scale-110'}`}
                  />
                ))}
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary transition-colors overflow-hidden">
                  <Palette size={18} className="text-gray-500 pointer-events-none z-10 absolute" />
                  <input type="color" value={qrColor} onChange={(e) => setQrColor(e.target.value)} className="w-16 h-16 opacity-0 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>

            {/* 4. Add Logo */}
            <div>
              <h2 className="text-sm uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">4</span>
                Add Logo (Optional)
              </h2>
              
              <div className="flex items-center gap-4">
                <input 
                  type="file" 
                  accept="image/png, image/jpeg, image/svg+xml"
                  onChange={handleLogoUpload}
                  ref={fileInputRef}
                  className="hidden"
                  id="logo-upload"
                />
                
                <label 
                  htmlFor="logo-upload"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-xl cursor-pointer font-semibold transition-colors border border-gray-200 dark:border-gray-600"
                >
                  <ImagePlus size={18} />
                  Upload Image
                </label>

                {qrLogo && (
                  <button 
                    onClick={removeLogo}
                    className="flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl font-semibold transition-colors"
                  >
                    <Trash2 size={18} />
                    Clear
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">Recommended: Square PNG or SVG with transparent background.</p>
            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="w-full lg:w-1/2 flex flex-col items-center sticky top-24">
            <div className="w-full bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center transition-colors duration-300">
              <div className="mb-10 text-center">
                <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Live Preview</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Scan this code with your phone camera</p>
              </div>

              {/* Render with Logo! */}
              <QRCodeGenerator data={currentQRData} color={qrColor} logo={qrLogo} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;