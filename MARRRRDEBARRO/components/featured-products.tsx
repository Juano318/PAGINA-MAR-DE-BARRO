import ProductCard from "@/components/product-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Datos de ejemplo para productos destacados
const featuredProducts = [
  {
    id: 1,
    name: "Taza Oceánica",
    description: "Taza de cerámica con tonos azules inspirada en el mar",
    price: 25,
    image: "/placeholder.svg?height=500&width=500",
    category: "vajilla",
  },
  {
    id: 2,
    name: "Plato Tierra",
    description: "Plato artesanal con acabados en tonos terrosos",
    price: 30,
    image: "/placeholder.svg?height=500&width=500",
    category: "vajilla",
  },
  {
    id: 3,
    name: "Jarrón Ondas",
    description: "Jarrón decorativo con patrón de ondas marinas",
    price: 45,
    image: "/placeholder.svg?height=500&width=500",
    category: "decoración",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-stone-800">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild className="bg-amber-700 hover:bg-amber-800">
            <Link href="/productos">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
