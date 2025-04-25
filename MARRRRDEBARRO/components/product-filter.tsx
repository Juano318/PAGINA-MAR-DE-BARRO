"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 100])

  const categories = [
    { id: "vajilla", label: "Vajilla" },
    { id: "decoracion", label: "Decoración" },
    { id: "jardin", label: "Jardín" },
    { id: "accesorios", label: "Accesorios" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-lg mb-4">Categorías</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={category.id} />
              <Label htmlFor={category.id}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Precio</h3>
        <Slider
          defaultValue={[0, 100]}
          max={100}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-6"
        />
        <div className="flex justify-between text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Color</h3>
        <div className="flex flex-wrap gap-2">
          {["bg-blue-500", "bg-amber-700", "bg-stone-600", "bg-white border border-stone-300", "bg-stone-900"].map(
            (color, index) => (
              <button key={index} className={`w-8 h-8 rounded-full ${color}`} aria-label={`Color ${index + 1}`} />
            ),
          )}
        </div>
      </div>

      <Button className="w-full">Aplicar Filtros</Button>
    </div>
  )
}
