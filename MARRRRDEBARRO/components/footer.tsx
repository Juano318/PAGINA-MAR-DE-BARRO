import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Mar de Barro</h3>
            <p className="mb-4">Objetos de cerámica hechos a mano con amor y dedicación.</p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="mailto:info@mardebarro.com" className="hover:text-white">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-white">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/proceso" className="hover:text-white">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Información</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/envios" className="hover:text-white">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="hover:text-white">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/cuidados" className="hover:text-white">
                  Cuidado de Productos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <address className="not-italic">
              <p>Buenos Aires, Argentina</p>
              <p className="mt-2">info@mardebarro.com</p>
              <p className="mt-2">+54 11 1234 5678</p>
            </address>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Mar de Barro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
