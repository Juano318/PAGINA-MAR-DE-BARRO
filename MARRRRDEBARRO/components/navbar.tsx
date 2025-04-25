"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Proceso", href: "/proceso" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl text-amber-800">
            Mar de Barro
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                  pathname === link.href ? "text-amber-700" : "text-stone-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart Button */}
          <div className="hidden md:flex">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 text-[10px] font-bold rounded-full bg-amber-700 text-white flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-stone-600" /> : <Menu className="h-6 w-6 text-stone-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium py-2 transition-colors hover:text-amber-700 ${
                  pathname === link.href ? "text-amber-700" : "text-stone-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-stone-200 mt-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Carrito (0)
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
