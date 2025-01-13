import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Alejandra Muñoz
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="#proyectos" className="hover:text-gray-300">Proyectos</Link></li>
          <li><Link href="#servicios" className="hover:text-gray-300">Servicios</Link></li>
          <li><Link href="#contacto" className="hover:text-gray-300">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

