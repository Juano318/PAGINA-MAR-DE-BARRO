import ProductCard from "@/components/product-card"
import ProductFilter from "@/components/product-filter"

// Datos de ejemplo para productos
const products = [
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
  {
    id: 4,
    name: "Maceta Rústica",
    description: "Maceta de cerámica con textura natural",
    price: 35,
    image: "/placeholder.svg?height=500&width=500",
    category: "jardín",
  },
  {
    id: 5,
    name: "Bowl Mediterráneo",
    description: "Bowl grande con esmalte azul mediterráneo",
    price: 40,
    image: "/placeholder.svg?height=500&width=500",
    category: "vajilla",
  },
  {
    id: 6,
    name: "Porta Velas Arena",
    description: "Porta velas con textura arenosa y tono natural",
    price: 22,
    image: "/placeholder.svg?height=500&width=500",
    category: "decoración",
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-stone-800">Nuestros Productos</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <ProductFilter />
        </aside>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
