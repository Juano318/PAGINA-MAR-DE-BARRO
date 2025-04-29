import Image from "next/image"
import Link from "next/link"

export default function NosotrosPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Nosotros</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Equipo de Mar de Barro"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
            <p className="mb-4">
              Mar de Barro nació de la pasión por la cerámica y el arte en barro. Desde nuestros inicios en 2015, nos
              hemos dedicado a crear piezas únicas que combinan la tradición artesanal con diseños contemporáneos.
            </p>
            <p>
              Cada pieza que creamos cuenta una historia y lleva consigo la esencia de nuestro equipo de artesanos
              apasionados por su trabajo.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Nuestra Misión</h2>
          <p className="text-center max-w-2xl mx-auto">
            En Mar de Barro, nuestra misión es preservar y renovar el arte de la cerámica, creando piezas funcionales y
            decorativas que traigan belleza a la vida cotidiana de nuestros clientes, mientras promovemos prácticas
            sostenibles y respetuosas con el medio ambiente.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="mb-4 mx-auto">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=Miembro ${member}`}
                    alt={`Miembro del equipo ${member}`}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-medium">Nombre Apellido</h3>
                <p className="text-gray-600">Cargo / Especialidad</p>
                <p className="mt-2">Breve descripción sobre la experiencia y pasión de este miembro del equipo.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Quieres conocernos más?</h2>
          <p className="mb-6">
            Te invitamos a visitar nuestro taller o contactarnos para saber más sobre nuestro trabajo.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </main>
  )
}
