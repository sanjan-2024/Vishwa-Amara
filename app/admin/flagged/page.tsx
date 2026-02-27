import Link from "next/link"
import { AlertTriangle, MapPin, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { products } from "@/lib/mockData"

const flaggedProducts = products.filter((p) => p.status === "flagged")

export default function AdminFlagged() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Flagged Items</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Products that require manual review due to verification issues.
        </p>
      </div>

      {flaggedProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-16 text-center">
          <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-success/10">
            <AlertTriangle className="size-7 text-success" />
          </div>
          <p className="text-base font-medium text-foreground">All clear</p>
          <p className="mt-1 text-sm text-muted-foreground">
            No flagged items currently require attention.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {flaggedProducts.map((product) => (
            <div
              key={product._id}
              className="rounded-2xl border border-destructive/20 bg-card p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="destructive" className="gap-1 text-[10px]">
                      <AlertTriangle className="size-3" />
                      Flagged
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-destructive/10 text-destructive text-[10px]"
                    >
                      Geo Mismatch
                    </Badge>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{product.name}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3" />
                      {product.region}
                    </span>
                    <span>Seller: {product.seller.name}</span>
                    <span className="font-mono">{product.authenticityId}</span>
                  </div>

                  <div className="mt-4 max-w-md">
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Trust Score</span>
                      <span className="font-semibold text-destructive">{product.trustScore}</span>
                    </div>
                    <Progress value={product.trustScore} className="h-2" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Mark Resolved
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="rounded-full">
                    <Link href={`/products/${product._id}`}>
                      <ExternalLink className="size-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
