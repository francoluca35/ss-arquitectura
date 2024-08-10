import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

function Casa2() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    "ruta/a/imagen1.jpg",
    "ruta/a/imagen2.jpg",
    "ruta/a/imagen3.jpg",
    "ruta/a/imagen4.jpg",
    "ruta/a/imagen5.jpg",
    "ruta/a/imagen6.jpg",
    "ruta/a/imagen7.jpg",
    "ruta/a/imagen8.jpg",
    "ruta/a/imagen9.jpg",
    "ruta/a/imagen10.jpg"
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
  };

  return (
    <>
      <Navbar />
      <div className="main mt-12 mb-20 mx-4 lg:mx-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mt-20">Tampa</h1> 
        </div>
        <div className="lg:flex lg:space-x-8 mb-12">
          <div className="lg:w-1/2">
            <p className="text-lg text-black mb-8">
              El foco del proyecto está puesto en la identidad de cada elemento constitutivo de la vivienda...
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.slice(0, 4).map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Proyecto ${index + 1}`} 
                className="w-full h-auto object-cover cursor-pointer" 
                onClick={() => openModal(image)}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.slice(4).map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Proyecto ${index + 5}`} 
              className="w-full h-auto object-cover cursor-pointer" 
              onClick={() => openModal(image)}
            />
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Imagen ampliada" className="max-w-full max-h-screen object-cover" />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Casa2;
