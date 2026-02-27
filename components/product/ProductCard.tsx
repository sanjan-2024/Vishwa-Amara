import Image from "next/image"
import Link from "next/link"
import { MapPin, ShieldCheck, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

function getTrustColor(score: number) {
  if (score >= 80) return "text-success"
  if (score >= 60) return "text-warning-foreground"
  return "text-destructive"
}

function getTrustBg(score: number) {
  if (score >= 80) return "bg-success/10"
  if (score >= 60) return "bg-warning/10"
  return "bg-destructive/10"
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 flex flex-col gap-2">
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
        </div>
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold text-foreground">{product.name}</h3>
            <span className={`inline-flex items-center rounded-lg px-2 py-0.5 text-xs font-semibold ${getTrustBg(product.trustScore)} ${getTrustColor(product.trustScore)}`}>
              {product.trustScore}
            </span>
          </div>
          <div className="mt-1.5 flex items-center gap-1.5">
            <MapPin className="size-3.5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{product.region}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {"₹"}{product.price.toLocaleString("en-IN")}
          </span>
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link href={`/products/${product._id}`}>
              View Authenticity
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
