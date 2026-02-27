import Image from "next/image"
import { ShieldCheck, AlertTriangle, MapPin, Globe, Phone, MessageCircle, Mail, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { Product } from "@/lib/types"

interface ProductDetailProps {
  product: Product
}

function getGeoLabel(status: Product["geoValidationStatus"]) {
  switch (status) {
    case "matched":
      return { label: "Geo Matched", className: "bg-success text-success-foreground border-0" }
    case "mismatch":
      return { label: "Geo Mismatch", className: "bg-destructive text-destructive-foreground border-0" }
    default:
      return { label: "Not Provided", className: "bg-muted text-muted-foreground" }
  }
}

export function ProductDetail({ product }: ProductDetailProps) {
  const geo = getGeoLabel(product.geoValidationStatus)

  return (
    <div className="flex flex-col gap-10">
      {/* Authenticity Overview */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {product.status === "verified" ? (
                <Badge className="bg-success text-success-foreground gap-1 border-0">
                  <ShieldCheck className="size-3" />
                  Verified
                </Badge>
              ) : (
                <Badge variant="destructive" className="gap-1">
                  <AlertTriangle className="size-3" />
                  Flagged
                </Badge>
              )}
              <Badge className={geo.className}>
                <MapPin className="mr-1 size-3" />
                {geo.label}
              </Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {"₹"}{product.price.toLocaleString("en-IN")} &middot; {product.region}
            </p>
          </div>

          {/* Trust Score */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Trust Score</span>
              <span className="text-2xl font-bold text-foreground">{product.trustScore}</span>
            </div>
            <Progress value={product.trustScore} className="h-2.5" />
            <p className="mt-2 text-xs text-muted-foreground">
              Based on seller verification, geo-validation, and product history.
            </p>
          </div>

          {/* Authenticity ID */}
          <div className="rounded-xl border border-border bg-card p-5">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Authenticity ID
            </span>
            <p className="mt-1 font-mono text-sm font-semibold text-foreground">
              {product.authenticityId}
            </p>
          </div>
        </div>
      </section>

      {/* QR Section */}
      <section className="rounded-2xl border border-border bg-card p-8">
        <h2 className="mb-6 text-lg font-semibold text-foreground">Verification QR Code</h2>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <div className="flex size-48 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary p-4">
            <Image
              src={product.qrCode}
              alt={`QR code for ${product.name}`}
              width={160}
              height={160}
              className="rounded"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Scan this QR code to access the full verification trail for this product.
              The link contains seller identity, geo-validation results, and the complete
              trust score breakdown.
            </p>
            <Button asChild variant="outline" className="w-fit rounded-full">
              <a href={product.verificationUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 size-4" />
                Open Verification Link
                <ExternalLink className="ml-2 size-3" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cultural Description */}
      <section className="rounded-2xl border border-border bg-card p-8">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Cultural Heritage</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
      </section>

      {/* Artisan Contact */}
      <section className="rounded-2xl border border-border bg-card p-8">
        <h2 className="mb-6 text-lg font-semibold text-foreground">Artisan Contact</h2>
        <div className="flex flex-col gap-2">
          <p className="mb-2 text-base font-medium text-foreground">{product.seller.name}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <a href={`tel:${product.seller.phone}`}>
                <Phone className="mr-2 size-4" />
                Call
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <a href={`https://wa.me/${product.seller.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 size-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <a href={`mailto:${product.seller.email}`}>
                <Mail className="mr-2 size-4" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
