import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={`/productos/${product.id}`}>
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/productos/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-amber-700 transition-colors">{product.name}</h3>
        </Link>
        <p className="text-stone-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <p className="font-semibold text-amber-700">${product.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-amber-700 hover:bg-amber-800">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Añadir al Carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
