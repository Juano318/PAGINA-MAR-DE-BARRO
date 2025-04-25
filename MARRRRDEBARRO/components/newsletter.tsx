"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para suscribir al usuario
    toast({
      title: "¡Gracias por suscribirte!",
      description: "Pronto recibirás nuestras novedades.",
    })
    setEmail("")
  }

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-stone-800">Mantente Conectado</h2>
        <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
          Suscríbete a nuestro boletín para recibir novedades sobre nuevos productos, eventos y ofertas especiales.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
            Suscribirse
          </Button>
        </form>
      </div>
    </section>
  )
}
