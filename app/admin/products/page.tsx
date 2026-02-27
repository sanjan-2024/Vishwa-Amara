import Link from "next/link"
import { ShieldCheck, AlertTriangle, MapPin, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/mockData"

export default function AdminProducts() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">All Products</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Complete overview of all products on the platform.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Product
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Region
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Seller
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Status
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Geo
              </th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Trust
              </th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.map((product) => (
              <tr key={product._id} className="transition-colors hover:bg-secondary/30">
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-foreground">{product.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{product.authenticityId}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-3" />
                    {product.region}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-muted-foreground">
                  {product.seller.name}
                </td>
                <td className="px-5 py-4">
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
                </td>
                <td className="px-5 py-4">
                  <Badge
                    variant="secondary"
                    className={`text-[10px] ${
                      product.geoValidationStatus === "matched"
                        ? "bg-success/10 text-success"
                        : product.geoValidationStatus === "mismatch"
                          ? "bg-destructive/10 text-destructive"
                          : ""
                    }`}
                  >
                    {product.geoValidationStatus === "matched"
                      ? "Matched"
                      : product.geoValidationStatus === "mismatch"
                        ? "Mismatch"
                        : "N/A"}
                  </Badge>
                </td>
                <td className="px-5 py-4 text-right text-sm font-semibold text-foreground">
                  {product.trustScore}
                </td>
                <td className="px-5 py-4 text-right">
                  <Button asChild variant="ghost" size="sm" className="rounded-full">
                    <Link href={`/products/${product._id}`}>
                      <ExternalLink className="size-3.5" />
                    </Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
