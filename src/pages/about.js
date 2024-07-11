import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import aboutimg from '../../public/assets/background-6.jpg'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-12 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">S + S</h1>
            <p className="mb-4">
              Somos un estudio especializado en diseños premium de residencias, edificios de vivienda y comerciales. 
              Con gran experiencia en el ámbito de la construcción, lo que nos permite proyectar con una alta calidad en 
              la resolución espacial y de cada uno de los detalles. Abordamos todas las fases de una obra de arquitectura, 
              Proyecto – Dirección – Administración y Construcción.
            </p>
            <p className="mb-4">
              En un mundo en donde los sueños parecen irrealizables, en la mejor expresión de la arquitectura es posible 
              convertirlos en una realidad concreta, genuina y real. Creemos en la arquitectura como arte y ciencia para 
              crear un marco a nuestra vida. El crecimiento de la firma A+R coincidió con nuestra visión de preservar la 
              vanguardia y respetar el carácter funcional, sin perder de vista los deseos de los usuarios. El objetivo 
              proyectual siempre buscó resolver cada problema de un modo simple, creativo y de gran impacto.
            </p>
          </div>
          <div>
            <Image 
              src={aboutimg}
              alt="Descriptive text about the image" 
              width={800} 
              height={400} 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">.....</h2>
          
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
            <button className="bg-black text-white p-2 px-4 font-semibold">DESCARGAR</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
