'use client'
import React from 'react';
import Image from 'next/image';
import footerimg from '../../public/assets/logo-footer.png'

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0 flex flex-col items-start">
          <Image src={footerimg} alt="S+S Arquitectos" width={400}/>

          <div className="flex space-x-4 mt-2 ml-6">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0 text-left">
            <h2 className="text-lg font-bold">Contacto</h2>
            <p>Cachafas 5418, 101. San Miguel, Buenos Aires, Argentina</p>
            <p>info@ssarqui.com.ar</p>
            <p>+5411 4587-2857</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 flex justify-between items-center border-t border-gray-700 pt-4">
        <p className="text-sm">© 2024 S+S Arquitectos. Todos los derechos reservados.</p>
        <p className="text-sm">Website create by <a href="https://francomputer.com.ar" target="_blank" rel="noopener noreferrer" className='hover:text-[#72939C]'> FranComputer.</a></p>
      </div>
    </footer>
  );
}

export default Footer;


