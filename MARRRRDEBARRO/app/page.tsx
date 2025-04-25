import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import FeaturedProducts from "@/components/featured-products"
import Gallery from "@/components/gallery"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Cerámica artesanal Mar de Barro"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Mar de Barro</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Objetos de cerámica hechos a mano que cuentan historias y conectan con la naturaleza
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
              <Link href="/productos">Ver Productos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/nosotros">Nuestra Historia</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-stone-800">Nuestro Proceso</h2>
              <p className="text-lg text-stone-600 mb-6">
                En Mar de Barro, cada pieza es única y cuenta una historia. Nuestro proceso artesanal combina técnicas
                tradicionales con diseños contemporáneos, creando objetos que son tanto funcionales como artísticos.
              </p>
              <p className="text-lg text-stone-600 mb-8">
                Trabajamos con arcillas locales y esmaltes naturales, respetando el medio ambiente y honrando la
                tradición cerámica.
              </p>
              <Button asChild className="bg-amber-700 hover:bg-amber-800">
                <Link href="/proceso">Conoce Más</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Proceso de creación"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Gallery */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-stone-800">Nuestra Galería</h2>
          <Gallery />
          <div className="text-center mt-12">
            <Button asChild className="bg-amber-700 hover:bg-amber-800">
              <Link href="/galeria">Ver Más</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-blue-800 p-6 rounded-lg">
                <p className="italic mb-4">
                  "Las piezas de Mar de Barro son simplemente hermosas. Cada vez que uso mi taza, siento la conexión con
                  la persona que la creó."
                </p>
                <p className="font-semibold">- Cliente Feliz {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}
