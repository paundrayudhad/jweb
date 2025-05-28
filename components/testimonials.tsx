import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "JWeb membantu bisnis restoran saya memiliki website profesional yang memudahkan pelanggan memesan makanan secara online. Hasilnya sangat memuaskan dan trafik pengunjung meningkat signifikan!",
      author: "Budi Santoso",
      role: "Pemilik Restoran Nusantara",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Saya sangat puas dengan layanan JWeb. Mereka tidak hanya membuat website yang menarik, tetapi juga membantu kami dalam strategi digital marketing. Sangat profesional dan responsif!",
      author: "Siti Rahma",
      role: "CEO Fashion Brand",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Website yang dibuat oleh JWeb sangat membantu bisnis konsultasi keuangan saya. Desainnya profesional dan sistem booking konsultasi bekerja dengan sempurna. Terima kasih JWeb!",
      author: "Ahmad Hidayat",
      role: "Konsultan Keuangan",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "JWeb adalah partner terbaik dalam mengembangkan platform marketplace kami. Mereka memahami kebutuhan bisnis dan memberikan solusi teknologi yang tepat. Sangat direkomendasikan!",
      author: "Dewi Lestari",
      role: "Founder Marketplace Lokal",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonial" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonial Klien</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">Apa kata klien kami tentang layanan JWeb</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 pt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{testimonial.author}</h3>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="h-6 w-6 text-muted-foreground/30 absolute -left-2 -top-2" />
                  <p className="pl-4 italic text-muted-foreground">{testimonial.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
