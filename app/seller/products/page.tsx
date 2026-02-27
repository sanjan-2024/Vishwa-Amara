import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, AlertTriangle, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/mockData"

export default function SellerProducts() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">My Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            All your listed products and their verification status.
          </p>
        </div>
        <Button asChild className="rounded-full">
          <Link href="/seller/add">Add New Product</Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center"
          >
            <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-secondary">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground">{product.name}</h3>
                {product.status === "verified" ? (
                  <Badge className="bg-success text-success-foreground gap-1 border-0 text-[10px]">
                    <ShieldCheck className="size-3" />
                    Verified
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="gap-1 text-[10px]">
                    <AlertTriangle className="size-3" />
                    Flagged
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {product.region} &middot; {"₹"}{product.price.toLocaleString("en-IN")} &middot; Trust: {product.trustScore}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground">
                {product.authenticityId}
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="shrink-0 rounded-full">
              <Link href={`/products/${product._id}`}>
                <ExternalLink className="mr-2 size-3" />
                View
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
