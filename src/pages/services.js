import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Image from 'next/image';
import imgService from '../../public/assets/background-3NB.jpg'
const services = [
  {
    title: "Modelo con geolocalización",
    content: "Detalles sobre el modelo con geolocalización."
  },
  {
    title: "Cuantificación",
    content: "Detalles sobre la cuantificación."
  },
  {
    title: "Modelo tridimensional",
    content: "Toda la documentación será extraída de un único modelo tridimensional, evitando de esta manera, trasladar errores durante la construcción. Una vez el modelo 3D es definido durante la etapa de diseño, tendrá el objetivo de..."
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="p-8 container mx-auto mt-12 text-black">
        <h1 className="text-3xl font-bold mb-4">Servicios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">DISEÑO ARQUITECTÓNICO</h2>
            {services.map((service, index) => (
              <div key={index} className="mb-4">
                <button 
                  className="w-full text-left font-semibold text-xl flex justify-between items-center py-2" 
                  onClick={() => toggleAccordion(index)}
                >
                  {service.title}
                  <span>{activeIndex === index ? '▲' : '▼'}</span>
                </button>
                {activeIndex === index && <p className="mt-2 text-gray-700">{service.content}</p>}
              </div>
            ))}
          </div>
          <div>
      <Image src={imgService}/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
