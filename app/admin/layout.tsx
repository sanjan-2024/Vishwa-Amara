"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Sidebar } from "@/components/layout/Sidebar"
import { LayoutDashboard, Package, Users, ShieldAlert, Settings } from "lucide-react"

const adminLinks = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/products", label: "All Products", icon: Package },
  { href: "/admin/sellers", label: "Sellers", icon: Users },
  { href: "/admin/flagged", label: "Flagged Items", icon: ShieldAlert },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar links={adminLinks} title="Admin Panel" />
        <main className="flex-1 px-6 py-8 lg:px-10">{children}</main>
      </div>
    </div>
  )
}
