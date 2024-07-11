import React from "react";
import Carousel from "@/components/home/Carousel";
import Estudiohome from "@/components/home/Estudio-home";

import WhatsApp from "@/components/WhatsApp";
import Footer from "@/components/Footer";


function page() {
  return (
    <>
      <Carousel />
      <Estudiohome />

      <WhatsApp />
      <Footer />

    </>
  );
}

export default page;


