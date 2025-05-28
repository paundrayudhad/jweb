import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-10 px-4 py-10 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">JWeb</h3>
            <p className="text-sm text-muted-foreground">
              Jasa pembuatan website profesional dengan desain modern dan responsif untuk kebutuhan bisnis Anda.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#layanan" className="text-muted-foreground hover:text-foreground transition-colors">
                  Website Statis
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="text-muted-foreground hover:text-foreground transition-colors">
                  Website Dinamis
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="text-muted-foreground hover:text-foreground transition-colors">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="text-muted-foreground hover:text-foreground transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="text-muted-foreground hover:text-foreground transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="text-muted-foreground hover:text-foreground transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#beranda" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#testimonial" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testimonial
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="#kontak" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5" />
                <span className="text-muted-foreground">info@jweb.id</span>
              </li>
              <li className="text-muted-foreground">
                Jl. Teknologi No. 123, Jakarta Selatan, DKI Jakarta 12345, Indonesia
              </li>
            </ul>
            <div className="flex space-x-3">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} JWeb. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:underline underline-offset-4">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
