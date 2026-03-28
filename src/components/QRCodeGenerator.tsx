import { useEffect, useRef, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { Download } from 'lucide-react';

interface QRCodeGeneratorProps {
  data: string;
  color: string;
  logo?: string | null;
}

export default function QRCodeGenerator({ data, color, logo }: QRCodeGeneratorProps) {
  const qrRef = useRef<HTMLDivElement>(null);
  
  const [qrCode] = useState<QRCodeStyling>(
    new QRCodeStyling({
      width: 300,
      height: 300,
      type: 'canvas', // FIX 1: Changed from 'svg' to 'canvas' to properly render local images
      data: data || 'https://quickqr.com',
      image: logo || '',
      margin: 10,
      qrOptions: { 
        typeNumber: 0, 
        mode: 'Byte', 
        errorCorrectionLevel: 'H' 
      },
      imageOptions: { 
        hideBackgroundDots: true, 
        imageSize: 0.3, 
        margin: 8 
        // FIX 2: Removed crossOrigin rule so it accepts your local file
      },
      backgroundOptions: { color: '#ffffff' },
      dotsOptions: { color: color, type: 'rounded' },
      cornersSquareOptions: { color: color, type: 'extra-rounded' },
      cornersDotOptions: { color: color, type: 'dot' }
    })
  );

  // Append canvas on mount
  useEffect(() => {
    if (qrRef.current) {
      // Clear anything inside the ref first to prevent duplicates
      qrRef.current.innerHTML = '';
      qrCode.append(qrRef.current);
    }
  }, [qrCode, qrRef]);

  // Update when properties change
  useEffect(() => {
    if (!data) return;
    qrCode.update({
      data: data,
      image: logo || '', // FIX 3: Use empty string instead of undefined to clear image
      dotsOptions: { color: color },
      cornersSquareOptions: { color: color },
      cornersDotOptions: { color: color }
    });
  }, [data, color, logo, qrCode]);

  const handleDownload = () => {
    qrCode.download({ name: 'QuickQR', extension: 'png' });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div 
        ref={qrRef} 
        className="p-4 bg-white rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-transform hover:scale-105 duration-300"
      />

      <button 
        onClick={handleDownload}
        style={{ backgroundColor: color }}
        className="flex items-center justify-center gap-2 w-full max-w-xs text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl hover:opacity-90 hover:-translate-y-1"
      >
        <Download size={20} />
        Download High-Res PNG
      </button>
    </div>
  );
}