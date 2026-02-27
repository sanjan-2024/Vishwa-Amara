import { Package, ShieldCheck, AlertTriangle, Users, Clock, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { platformStats } from "@/lib/mockData"

const stats = [
  {
    label: "Total Products",
    value: platformStats.totalProducts,
    icon: Package,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    label: "Verified",
    value: platformStats.verifiedProducts,
    icon: ShieldCheck,
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    label: "Flagged",
    value: platformStats.flaggedProducts,
    icon: AlertTriangle,
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    label: "Total Sellers",
    value: platformStats.totalSellers,
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    label: "Pending Approvals",
    value: platformStats.pendingApprovals,
    icon: Clock,
    color: "text-warning-foreground",
    bg: "bg-warning/10",
  },
  {
    label: "Avg. Trust Score",
    value: platformStats.averageTrustScore,
    icon: TrendingUp,
    color: "text-accent",
    bg: "bg-accent/10",
  },
]

export default function AdminOverview() {
  const verificationRate = Math.round(
    (platformStats.verifiedProducts / platformStats.totalProducts) * 100
  )

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Platform Overview
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Monitor verification metrics and platform health.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${stat.bg}`}>
              <stat.icon className={`size-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Verification Progress */}
      <div className="mb-10 rounded-2xl border border-border bg-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Platform Verification Rate</h3>
          <span className="text-2xl font-bold text-foreground">{verificationRate}%</span>
        </div>
        <Progress value={verificationRate} className="h-3" />
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>{platformStats.verifiedProducts} verified out of {platformStats.totalProducts}</span>
          <span>{platformStats.flaggedProducts} flagged for review</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-3">
        <a
          href="/admin/flagged"
          className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
        >
          <AlertTriangle className="size-5 text-destructive" />
          <p className="text-sm font-semibold text-foreground">Review Flagged Items</p>
          <p className="text-xs text-muted-foreground">
            {platformStats.flaggedProducts} items need attention
          </p>
        </a>
        <a
          href="/admin/sellers"
          className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
        >
          <Users className="size-5 text-primary" />
          <p className="text-sm font-semibold text-foreground">Seller Applications</p>
          <p className="text-xs text-muted-foreground">
            {platformStats.pendingApprovals} pending approvals
          </p>
        </a>
        <a
          href="/admin/products"
          className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
        >
          <Package className="size-5 text-accent" />
          <p className="text-sm font-semibold text-foreground">Manage Products</p>
          <p className="text-xs text-muted-foreground">
            {platformStats.totalProducts} total products
          </p>
        </a>
      </div>
    </div>
  )
}
