import React from 'react'
import Image from 'next/image';
import aboutImg from '../../../public/assets/background-4rsp.jpg'

function Estudiohome() {
  return (
    <div className="flex flex-col bg-slate-50 lg:flex-row items-center justify-center lg:space-x-8 space-y-8 lg:space-y-0">
      {/* Parte izquierda: Imagen */}
      <div className="w-full lg:w-[900px] p-4">
        <Image src={aboutImg} alt="Descripción de la imagen" className="rounded-lg" />
      </div>
      
      {/* Parte derecha: Texto y botón */}
      <div className="w-full lg:w-1/2 p-4 text-black text-center lg:text-left">
        <h2 className="text-2xl font-bold mb-4">S+S Arquitectos</h2>
        <p className="text-lg mb-4">
          Somos un estudio especializado en diseños premium de residencias, edificios de vivienda y comerciales. Con gran experiencia en el ámbito de la construcción, lo que nos permite proyectar con una alta calidad en la resolución espacial y de cada uno de los detalles. Abordamos todas las fases de una obra de arquitectura, Proyecto – Dirección – Administración y Construcción.
        </p>
        <a href='/about' className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-block">
          Ir a About
        </a>
      </div>
    </div>
  )
}

export default Estudiohome;
