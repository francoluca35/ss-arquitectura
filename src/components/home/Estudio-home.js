import React from 'react'
import Image from 'next/image';
import aboutImg from '../../../public/assets/background-4rsp.jpg'
function Estudiohome() {
  return (
    <div className="flex items-center justify-center">
    {/* Parte izquierda: Imagen */}
    <div className="w-1/2 p-4">
      <Image src={aboutImg} alt="Descripción de la imagen" className="rounded-lg" />
    </div>
    
    {/* Parte derecha: Texto y botón */}
    <div className="w-1/2 p-4">
      <h2 className="text-2xl font-bold mb-4">Título del Resumen</h2>
      <p className="text-lg mb-4">
        Aquí va tu texto de resumen sobre el about. Puedes explicar brevemente de qué se trata.
      </p>
      <a href='/about' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
        Ir a About
      </a>
    </div>
  </div>
  )
}

export default Estudiohome;