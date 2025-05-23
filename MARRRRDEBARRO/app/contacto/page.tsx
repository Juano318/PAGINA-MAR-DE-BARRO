"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("¡Gracias por tu mensaje! Te contactaremos pronto.")
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      })
    }, 1500)

    // Aquí puedes implementar la lógica real para enviar el formulario
    // usando fetch o una librería como axios
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contacto</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Dirección</h3>
                  <p>Calle Principal 123, Colonia Centro</p>
                  <p>Ciudad, CP 12345</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p>+52 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>info@mardebarro.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Horario de Atención</h3>
                  <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábados: 10:00 AM - 2:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>

            {submitMessage ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {submitMessage}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block mb-1 font-medium">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block mb-1 font-medium">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block mb-1 font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Encuéntranos</h2>
          <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              Aquí puedes integrar un mapa de Google Maps o cualquier otro servicio de mapas
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
