import { Package, ShieldCheck, AlertTriangle, TrendingUp } from "lucide-react"
import { products } from "@/lib/mockData"

const sellerProducts = products.filter(
  (p) => p.seller.name === "Lakshmi Devi Handlooms"
)

const stats = [
  {
    label: "My Products",
    value: "12",
    icon: Package,
    description: "Total listed",
  },
  {
    label: "Verified",
    value: "10",
    icon: ShieldCheck,
    description: "Authenticity confirmed",
  },
  {
    label: "Flagged",
    value: "2",
    icon: AlertTriangle,
    description: "Needs attention",
  },
  {
    label: "Avg. Trust",
    value: "91",
    icon: TrendingUp,
    description: "Trust score",
  },
]

export default function SellerOverview() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Welcome back, Lakshmi Devi Handlooms
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your product listings and track verification status.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
              <stat.icon className="size-5 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-foreground">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Products */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Recent Products</h2>
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
                  Status
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Trust Score
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sellerProducts.map((product) => (
                <tr key={product._id} className="transition-colors hover:bg-secondary/30">
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-foreground">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.authenticityId}</p>
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{product.region}</td>
                  <td className="px-5 py-4">
                    {product.status === "verified" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">
                        <ShieldCheck className="size-3" />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-2.5 py-0.5 text-xs font-medium text-destructive">
                        <AlertTriangle className="size-3" />
                        Flagged
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-right text-sm font-semibold text-foreground">
                    {product.trustScore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
