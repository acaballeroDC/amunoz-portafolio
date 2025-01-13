import { Camera, Video, Instagram } from 'lucide-react'

const services = [
  { id: 1, title: 'Fotografía', icon: Camera, description: 'Capturamos la esencia de tu marca con fotografías de alta calidad.' },
  { id: 2, title: 'Producción de Video', icon: Video, description: 'Creamos videos atractivos que cuentan tu historia de manera impactante.' },
  { id: 3, title: 'Contenido para Redes Sociales', icon: Instagram, description: 'Desarrollamos estrategias de contenido que aumentan tu presencia en redes sociales.' }
]

export default function Services() {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="text-center">
              <service.icon className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

