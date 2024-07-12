'use client'

import { useState, useEffect } from 'react';


import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/assets/nuevologo.png';

function Item({ name, path, color, onClick }) {
  return (
    <li>
      <Link href={path} legacyBehavior>
      <a onClick={onClick} className={`hover:${color}`}>{name}</a>
      </Link>
    </li>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }
  }, []);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    toggleMenu();
  };


  return (
    <nav className="bg-white p-2 fixed top-0 left-0 w-full z-20 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <Link href="/" legacyBehavior>

          <a className="flex items-center" onClick={() => setActiveLink('/')}>

      
            <Image src={Logo} alt="Logo" width={140} height={60} className='ml-10' />
          </a>
        </Link>
      </div>
      <div>
        <button
          onClick={toggleMenu}

          className="text-black focus:outline-none mr-10 hover:text-orange-500"


        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col justify-center z-10">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black focus:outline-none mr-10 mt-4 hover:text-[#72939C]"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="absolute top-4 left-4">
            <Link href="/" legacyBehavior>
              <a className="flex items-center">
                <Image src={Logo} alt="Logo" width={180} height={50} className='ml-10'/>
              </a>
            </Link>
          </div>
          <div className="flex justify-between items-start w-full px-8 mt-20">
            <ul className="space-y-6 text-left text-2xl font-bold text-black uppercase ml-5">
     
              <Item name={'Inicio'} path={'/'} color={'text-orange-500'} onClick={toggleMenu} ></Item>
              <Item name={'Sobre Nosotros'} path={'/about'} color={'text-orange-500'} onClick={toggleMenu} ></Item>
              <Item name={'Servicios'} path={'/services'} color={'text-orange-500'} onClick={toggleMenu} ></Item>
              <Item name={'Proyectos'} path={'/projects'} color={'text-orange-500'} onClick={toggleMenu} ></Item>
              <Item name={'Contactos'} path={'/contact'} color={'text-orange-500'} onClick={toggleMenu} ></Item>
            </ul>
            <div className="text-left text-lg text-black ml-10">
              <h2 className="font-bold">Contacto</h2>
              <p>Franklin D. Roosevelt 5418, 101, CABA</p>
              <p>Buenos Aires, Argentina</p>
              <p>Email: info@amasr.com.ar</p>
              <p>Tel: +5411 4587-2857</p>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
}
