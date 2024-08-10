import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectImage from "@/components/projects/ProjectsImage";
import imgService from '../../public/assets/background-3NB.jpg';
import { useState } from "react";

const projects = [
  {
    id: 'casa1',
    title: 'Proyecto 1',
    category: 'Casa',
    imageSrc: imgService,
  },
  {
    id: 'casa2',
    title: 'Proyecto 2',
    category: 'Hoteles',
    imageSrc: imgService,
  },
  {
    id: 'page3',
    title: 'Proyecto 3',
    category: 'DPTOS',
    imageSrc: imgService,
  },
  {
    id: 'page4',
    title: 'Proyecto 4',
    category: 'Casa',
    imageSrc: imgService,
  },
  {
    id: 'page5',
    title: 'Proyecto 5',
    category: 'Hoteles',
    imageSrc: imgService,
  },
];

const categories = ['TODO', 'Casa', 'Hoteles', 'DPTOS'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('TODO');

  const filteredProjects = selectedCategory === 'TODO'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-14 mt-14 text-black">Projectos</h1>
        <div className="flex space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 border ${selectedCategory === category ? 'bg-black text-white' : 'bg-white text-black'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProjects.map(project => (
            <ProjectImage
              key={project.id}
              src={project.imageSrc}
              title={project.title}
              projectId={project.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
