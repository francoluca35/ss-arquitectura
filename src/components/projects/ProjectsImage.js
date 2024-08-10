// src/components/projects/ProjectsImage.js
'use client'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ProjectImage({ src, title, projectId }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Image src={src} alt={title} className={`transition-all duration-300 ${isHovered ? 'opacity-70' : 'opacity-100'}`} />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-bold">{title}</h2>
        </div>
      )}
    </div>
  );
}
