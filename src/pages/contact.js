import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="p-8 mt-14 text-black">
        <h1 className="text-3xl font-bold mb-8 text-black">Contacto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Buenos Aires</h2>
            <p>Franklin D. Roosevelt 5418, 101. CABA, Buenos Aires, Argentina</p>
            <p>Email: <a href="mailto:info@amasr.com.ar" className="text-blue-500">info@amasr.com.ar</a></p>
            <p>Tel: <a href="tel:+541145872857" className="text-blue-500">+54 11 4587-2857</a></p>
            <div className="mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13130.731328005376!2d-58.4785166!3d-34.5735095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb65fe0672093%3A0xd13f5a5e15b39493!2sFranklin%20D.%20Roosevelt%205418%2C%20C1431ABG%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1673904377692!5m2!1sen!2sus"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Enviar un mensaje</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium text-gray-700">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border border-gray-300 p-2 rounded-md text-sm" 
                  style={{ height: '40px' }} 
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-700">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full border border-gray-300 p-2 rounded-md text-sm" 
                  style={{ height: '40px' }} 
                />
              </div>
              <div>
                <label htmlFor="country" className="block font-medium text-gray-700">País</label>
                <input 
                  type="text" 
                  id="country" 
                  className="w-full border border-gray-300 p-2 rounded-md text-sm" 
                  style={{ height: '40px' }} 
                />
              </div>
              <div>
                <label htmlFor="how-did-you-find-us" className="block font-medium text-gray-700">
                  ¿De dónde nos conociste? (Opcional)
                </label>
                <select 
                  id="how-did-you-find-us" 
                  className="w-full border border-gray-300 p-2 rounded-md text-sm" 
                  style={{ height: '40px' }} 
                >
                  <option>Selecciona una opción</option>
                  <option>Internet</option>
                  <option>Recomendación</option>
                  <option>Otros</option>
                </select>
              </div>
              <div>
                <label htmlFor="subject" className="block font-medium text-gray-700">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full border border-gray-300 p-2 rounded-md text-sm" 
                  style={{ height: '40px' }} 
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium text-gray-700">Mensaje</label>
                <textarea 
                  id="message" 
                  className="w-full border border-gray-300 p-2 rounded-md text-sm" 
                  rows="4"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="bg-[#72939C] text-white px-4 py-2 rounded-md text-sm" 
                  style={{ height: '40px' }}
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    
    </>
  );
}
