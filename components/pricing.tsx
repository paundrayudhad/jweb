import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Paket Basic",
      price: "Rp 2.500.000",
      description: "Cocok untuk bisnis kecil atau personal",
      features: [
        "Website 5 halaman",
        "Desain responsif",
        "Domain .com (1 tahun)",
        "Hosting (1 tahun)",
        "Email bisnis (1 akun)",
        "Revisi 2x",
        "Garansi 3 bulan",
      ],
    },
    {
      name: "Paket Professional",
      price: "Rp 5.000.000",
      description: "Cocok untuk bisnis menengah",
      features: [
        "Website 10 halaman",
        "Desain responsif premium",
        "Domain .com (1 tahun)",
        "Hosting (1 tahun)",
        "Email bisnis (5 akun)",
        "CMS (Content Management System)",
        "Optimasi SEO dasar",
        "Integrasi media sosial",
        "Revisi 5x",
        "Garansi 6 bulan",
      ],
      popular: true,
    },
    {
      name: "Paket Enterprise",
      price: "Rp 10.000.000+",
      description: "Cocok untuk bisnis besar atau e-commerce",
      features: [
        "Website unlimited halaman",
        "Desain custom premium",
        "Domain .com (1 tahun)",
        "Hosting premium (1 tahun)",
        "Email bisnis (10 akun)",
        "CMS (Content Management System)",
        "Optimasi SEO lengkap",
        "Integrasi media sosial",
        "Sistem e-commerce lengkap",
        "Integrasi payment gateway",
        "Revisi unlimited (30 hari)",
        "Garansi 1 tahun",
        "Pelatihan admin website",
      ],
    },
  ]

  return (
    <section id="harga" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Harga Layanan</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col transition-all ${plan.popular ? "border-primary shadow-lg" : ""}`}
            >
              <CardHeader>
                {plan.popular && (
                  <div className="py-1 px-3 text-xs bg-primary text-primary-foreground rounded-full w-fit mb-2">
                    Paling Populer
                  </div>
                )}
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                  <Link href="#kontak">Pilih Paket</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Butuh paket khusus?{" "}
            <Link href="#kontak" className="text-primary font-medium hover:underline">
              Hubungi kami
            </Link>{" "}
            untuk konsultasi gratis.
          </p>
        </div>
      </div>
    </section>
  )
}
