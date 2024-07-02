
import Image from 'next/image';
import Link from 'next/link';
import Logo from "/public/assets/icono.ico";

export default function Navbar() {
  return (
    <nav className="bg-[#000000ab] p-4 fixed top-0 left-0 w-full z-10">
      <ul className="flex space-x-4 text-white justify-center">
        <li>
          <Link href="/" legacyBehavior>
            <a className=' '>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>Sobre Nosotros</a>
          </Link>
        </li>

        <li>
          <Link href="/services" legacyBehavior>
            <a>Servicios</a>
          </Link>
        </li>
        <li className="flex items-center">
          <Image src={Logo} alt="Logo" className="h-8 w-8" />
        </li>
        <li>
          <Link href="/projects" legacyBehavior>
            <a>Projectos</a>
          </Link>
        </li>
        <li>
          <Link href="/review" legacyBehavior>
            <a>Reseñas</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
