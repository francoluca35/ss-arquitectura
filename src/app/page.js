import React from "react";
import Image from "next/image";
import Logo from "/public/assets/logo-1.png";
function page() {
  return (
    <>

      <div className="relative h-screen w-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          src="/videos/home.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
           <div className="relative flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-center text-white">
          <Image src={Logo} alt="Logo" className="w-[400px] h-30 mb-2" /> 
          <p className="text-xl max-w-xl">
            donde la creatividad y la innovación se fusionan para dar forma a
            entornos inspiradores. Somos un equipo apasionado de arquitectos
            comprometidos con la excelencia en el diseño y la construcción.
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
