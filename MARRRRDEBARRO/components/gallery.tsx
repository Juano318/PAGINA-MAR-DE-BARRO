import Image from "next/image"

// Datos de ejemplo para la galería
const galleryImages = [
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
]

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryImages.map((image, index) => (
        <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={`Galería Mar de Barro ${index + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}
