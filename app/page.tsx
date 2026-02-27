import Link from "next/link"
import Image from "next/image"
import { Shield, MapPin, BarChart3, QrCode, ArrowRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: Shield,
    title: "Seller Verification",
    description: "Every artisan is verified through a multi-step identity and location validation process.",
  },
  {
    icon: MapPin,
    title: "Geo Validation",
    description: "Products are matched against their claimed region of origin using geographic data.",
  },
  {
    icon: BarChart3,
    title: "Trust Score",
    description: "A transparent trust score is generated based on verification, seller history, and geo-match.",
  },
  {
    icon: QrCode,
    title: "QR Transparency",
    description: "Each product gets a unique QR code linking to its full verification trail.",
  },
]

const highlights = [
  "GI-tagged heritage products",
  "Direct artisan connections",
  "Transparent verification trail",
  "Region-of-origin validation",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Shield className="size-3.5 text-accent" />
              Authenticity-First Platform
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl md:leading-tight">
              Experience Authentic Heritage of Karnataka
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Discover verified artisanal products rooted in centuries of tradition.
              Every product is geo-authenticated and transparency-guaranteed.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/products">
                  Explore Authentic Products
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="/nearby">
                  Find Nearby
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3 px-6 py-5">
              <CheckCircle2 className="size-4 shrink-0 text-accent" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How Authenticity Works */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            How Authenticity Works
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Our four-step verification process ensures every product on the platform
            is genuine, traceable, and rooted in its heritage.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                  <step.icon className="size-5 text-accent" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Ready to explore Karnataka&apos;s heritage?
            </h2>
            <p className="mt-4 text-pretty text-base text-muted-foreground">
              Browse verified artisanal products and connect directly with the artisans behind them.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full px-8">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Shield className="size-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Vishwa Amara</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Preserving heritage through technology and transparency.
          </p>
        </div>
      </footer>
    </div>
  )
}
