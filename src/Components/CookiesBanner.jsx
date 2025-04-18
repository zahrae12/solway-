import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // Show banner only if not accepted yet
  useEffect(() => {
    const accepted = localStorage.getItem('cookieConsent');
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-neutral-900 text-white px-4  py-3 md:px-4 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-center md:text-left xl:-ml-20 ">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
          <a href="/cookies" className="text-yellow-500 ">Learn more</a>
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecline}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-sm"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="bg-white text-black hover:bg-gray-100 px-4 py-1.5 rounded-md text-sm"
          >
            Accept
          </button>
          <button
            onClick={() => setVisible(false)}
            className="text-white hover:text-gray-300 text-xl"
          >
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
}
