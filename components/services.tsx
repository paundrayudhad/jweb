import { Globe, ShoppingCart, Search, Smartphone, BarChart, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Website Statis",
      description: "Website informatif dengan tampilan profesional untuk memperkenalkan bisnis Anda kepada dunia.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Website Dinamis",
      description: "Website interaktif dengan fitur pengelolaan konten yang memudahkan Anda mengupdate informasi.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: "E-Commerce",
      description:
        "Toko online lengkap dengan sistem pembayaran dan pengelolaan produk untuk memperluas jangkauan bisnis Anda.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "SEO",
      description: "Optimasi mesin pencari untuk meningkatkan peringkat website Anda di hasil pencarian Google.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Digital Marketing",
      description: "Strategi pemasaran digital untuk meningkatkan visibilitas dan konversi website Anda.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Maintenance",
      description: "Layanan pemeliharaan website untuk memastikan performa dan keamanan website Anda tetap optimal.",
    },
  ]

  return (
    <section id="layanan" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Layanan Kami</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Kami menyediakan berbagai layanan pembuatan website untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-12">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
