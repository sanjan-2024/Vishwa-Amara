import { BarChart3, Eye, ShieldCheck, TrendingUp } from "lucide-react"

const metrics = [
  { label: "Total Views", value: "1,247", change: "+12%", icon: Eye },
  { label: "Verification Rate", value: "83%", change: "+5%", icon: ShieldCheck },
  { label: "Avg. Trust Score", value: "91", change: "+2", icon: TrendingUp },
  { label: "QR Scans", value: "342", change: "+28%", icon: BarChart3 },
]

const monthlyData = [
  { month: "Jan", views: 120, scans: 34 },
  { month: "Feb", views: 186, scans: 52 },
  { month: "Mar", views: 215, scans: 68 },
  { month: "Apr", views: 298, scans: 87 },
  { month: "May", views: 356, scans: 95 },
  { month: "Jun", views: 412, scans: 106 },
]

export default function SellerAnalytics() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Track engagement and trust metrics for your products.
        </p>
      </div>

      {/* Metrics */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <m.icon className="size-4 text-muted-foreground" />
              <span className="text-xs font-medium text-success">{m.change}</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{m.value}</p>
            <p className="text-xs text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Chart representation */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-6 text-sm font-semibold text-foreground">Monthly Performance</h3>
        <div className="flex flex-col gap-3">
          {monthlyData.map((d) => (
            <div key={d.month} className="flex items-center gap-4">
              <span className="w-10 text-xs font-medium text-muted-foreground">{d.month}</span>
              <div className="flex flex-1 gap-2">
                <div
                  className="h-6 rounded-lg bg-accent/20"
                  style={{ width: `${(d.views / 412) * 100}%` }}
                >
                  <div className="flex h-full items-center px-2 text-[10px] font-medium text-accent">
                    {d.views > 150 ? `${d.views} views` : ""}
                  </div>
                </div>
                <div
                  className="h-6 rounded-lg bg-primary/15"
                  style={{ width: `${(d.scans / 106) * 60}%` }}
                >
                  <div className="flex h-full items-center px-2 text-[10px] font-medium text-primary">
                    {d.scans > 60 ? `${d.scans} scans` : ""}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-6 border-t border-border pt-4">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded bg-accent/20" />
            <span className="text-xs text-muted-foreground">Product Views</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded bg-primary/15" />
            <span className="text-xs text-muted-foreground">QR Scans</span>
          </div>
        </div>
      </div>
    </div>
  )
}
