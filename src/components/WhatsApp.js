import React from 'react';

import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import wspImg from '../../public/assets/wsp.png'
import '../app/globals.css'

function WhatsApp() {
  return (
    <a
      href="https://wa.me/yourphonenumber"
       className="fixed bottom-4 right-4  shadow-lg transition-all flex items-center justify-center bounce"
      target="_blank"
      rel="noopener noreferrer"
    >
       <Image className='w-10' src={wspImg}/>
    </a>
   
  );
}

export default WhatsApp;
