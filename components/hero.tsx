import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="beranda" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Wujudkan Website Impian Anda Bersama JWeb
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Kami menyediakan jasa pembuatan website profesional dengan desain modern dan responsif untuk kebutuhan
                bisnis Anda.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#kontak">Hubungi Kami</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#layanan">Lihat Layanan</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
