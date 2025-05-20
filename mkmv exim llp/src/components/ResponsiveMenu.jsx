// components/ResponsiveMenu.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const ResponsiveMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden bg-[#adb599] px-4 py-2">
      <button onClick={() => setOpen(!open)} className="text-white">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <div className="flex flex-col gap-2 mt-2 text-white text-sm">
          <span>HOME</span>
          <span>ABOUT US</span>
          <span>OUR PRODUCTS</span>
          <span>GALLERY</span>
          <span>QUALITY</span>
          <span>CONTACT US</span>
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
