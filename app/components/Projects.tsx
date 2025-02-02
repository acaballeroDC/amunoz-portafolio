'use client'

import { useState } from 'react'
import Image from 'next/image'

type ProjectType = {
  id: number
  title: string
  description: string
  type: 'image' | 'video'
  src: string
  vimeoId?: string
  width?: number
  height?: number
  thumbnailSrc?: string
}

const projects: ProjectType[] = [
  {
    id: 10,
    title: 'Errores frecuentes',
    type: 'video',
    thumbnailSrc: '/images/pro10.png',
    vimeoId: '1052837708',
    description: 'Lanzamiento de catálogo de productos de la marca Pintorini.',
    src: 'https://player.vimeo.com/video/',
    width: 1280,
    height: 720
  },
  {
    id: 1,
    title: 'Lanzamiento de catálogo',
    type: 'video',
    thumbnailSrc: '/images/pro1.png',
    vimeoId: '1044755411',
    description: 'Campaña de atracción por medio de contenido de valor',
    src: 'https://player.vimeo.com/video/',
    width: 1280,
    height: 720
  },
  {
    id: 4,
    title: 'Video Promocional',
    type: 'video',
    thumbnailSrc: '/images/pro4.png',
    vimeoId: '1044756552',
    description: 'Campaña de regalos navideños.',
    src: 'https://player.vimeo.com/video/',
  },
  {
    id: 5,
    title: 'Contenido de valor',
    type: 'video',
    thumbnailSrc: '/images/pro5.png',
    vimeoId: '1046216843',
    description: 'Contendio de valor de la marca Pintorini para redes sociales.',
    src: 'https://player.vimeo.com/video/',
  },
  {
    id: 6,
    title: 'Contenido de valor',
    type: 'video',
    thumbnailSrc: '/images/pro6.png',
    vimeoId: '1046217074',
    description: 'Contenido de valor sobre experiencia del arte.',
    src: 'https://player.vimeo.com/video/',
  },
  {
    id: 7,
    title: 'Contenido de valor',
    type: 'video',
    thumbnailSrc: '/images/pro7.png',
    vimeoId: '1046221343',
    description: 'Contenido educativo y de valor para redes sociales.',
    src: 'https://player.vimeo.com/video/',
  },
  {
    id: 3,
    title: 'Voz en off',
    type: 'video',
    thumbnailSrc: '/images/pro3.png',
    vimeoId: '489842209',
    description: 'Voz en off para video comercial de la marca Actualícese.',
    src: 'https://player.vimeo.com/video/',
  },
  {
    id: 2,
    title: 'Foto publicitaria',
    type: 'image',
    src: '/images/pro2.png',
    description: '',
    width: 1200,
    height: 800
  },
  {
    id: 8,
    title: 'Foto publicitaria',
    type: 'image',
    src: '/images/pro8.png',
    description: '',
    width: 1200,
    height: 800
  },
  {
    id: 9,
    title: 'Foto publicitaria',
    type: 'image',
    src: '/images/pro9.png',
    description: '',
    width: 1200,
    height: 800
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null)

  return (
    <section id="proyectos" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 cursor-pointer flex items-center justify-center overflow-hidden" onClick={() => setActiveProject(project)}>
                {project.type === 'image' ? (
                  <Image 
                    src={project.src} 
                    alt={project.title} 
                    width={project.width}
                    height={project.height}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.thumbnailSrc || '/images/default-video-thumbnail.jpg'}
                      alt={`${project.title} thumbnail`}
                      layout="fill"
                      objectFit="cover"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
            <div className="relative flex items-center justify-center" style={{ minHeight: '300px' }}>
              {activeProject.type === 'image' ? (
                <Image 
                  src={activeProject.src} 
                  alt={activeProject.title} 
                  width={800}
                  height={600}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain'
                  }}
                />
              ) : (
                <iframe
                  src={`${activeProject.src}${activeProject.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-2">{activeProject.title}</h3>
            <p className="text-gray-600 mb-4">{activeProject.description}</p>
            <button 
              onClick={() => setActiveProject(null)}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

