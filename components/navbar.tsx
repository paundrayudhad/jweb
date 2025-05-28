"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">JWeb</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#beranda" className="text-sm font-medium hover:text-primary transition-colors">
            Beranda
          </Link>
          <Link href="#layanan" className="text-sm font-medium hover:text-primary transition-colors">
            Layanan
          </Link>
          <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="#harga" className="text-sm font-medium hover:text-primary transition-colors">
            Harga
          </Link>
          <Link href="#testimonial" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonial
          </Link>
          <Link href="#kontak" className="text-sm font-medium hover:text-primary transition-colors">
            Kontak
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Button>Hubungi Kami</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="#beranda"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Beranda
            </Link>
            <Link
              href="#layanan"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Layanan
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="#harga"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Harga
            </Link>
            <Link
              href="#testimonial"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Testimonial
            </Link>
            <Link
              href="#kontak"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Kontak
            </Link>
            <Button className="w-full">Hubungi Kami</Button>
          </div>
        </div>
      )}
    </header>
  )
}
