"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Sidebar } from "@/components/layout/Sidebar"
import { LayoutDashboard, Package, PlusCircle, BarChart3 } from "lucide-react"

const sellerLinks = [
  { href: "/seller", label: "Overview", icon: LayoutDashboard },
  { href: "/seller/products", label: "My Products", icon: Package },
  { href: "/seller/add", label: "Add Product", icon: PlusCircle },
  { href: "/seller/analytics", label: "Analytics", icon: BarChart3 },
]

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar links={sellerLinks} title="Seller Portal" />
        <main className="flex-1 px-6 py-8 lg:px-10">{children}</main>
      </div>
    </div>
  )
}
