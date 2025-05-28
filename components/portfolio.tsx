import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Restoran Nusantara",
      description: "Website untuk restoran dengan fitur pemesanan online dan menu digital.",
      image: "/placeholder.svg?height=300&width=600",
      link: "#",
      category: "Website Dinamis",
    },
    {
      title: "Toko Fashion Online",
      description: "Platform e-commerce untuk brand fashion lokal dengan sistem pembayaran terintegrasi.",
      image: "/placeholder.svg?height=300&width=600",
      link: "#",
      category: "E-Commerce",
    },
    {
      title: "Konsultan Keuangan",
      description: "Website profesional untuk jasa konsultan keuangan dengan sistem booking konsultasi.",
      image: "/placeholder.svg?height=300&width=600",
      link: "#",
      category: "Website Statis",
    },
    {
      title: "Travel Agency",
      description: "Website pemesanan paket wisata dengan sistem pembayaran dan manajemen reservasi.",
      image: "/placeholder.svg?height=300&width=600",
      link: "#",
      category: "Website Dinamis",
    },
    {
      title: "Marketplace Produk Lokal",
      description: "Platform marketplace untuk produk UMKM lokal dengan fitur multi-vendor.",
      image: "/placeholder.svg?height=300&width=600",
      link: "#",
      category: "E-Commerce",
    },
    {
      title: "Studio Fotografi",
      description: "Website portofolio untuk studio fotografi dengan galeri interaktif.",
      image: "/placeholder.svg?height=300&width=600",
      link: "#",
      category: "Website Statis",
    },
  ]

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Portfolio Kami</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Beberapa contoh website yang telah kami kembangkan untuk klien kami
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={300}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-primary font-medium">{item.category}</div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href={item.link} className="flex items-center gap-1">
                    Lihat Website <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
