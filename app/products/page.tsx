"use client"

import { useState, useMemo } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { ProductGrid } from "@/components/product/ProductGrid"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/mockData"

const regions = ["All", "Mysuru", "Mandya", "Channapatna"]
const statuses = ["All", "verified", "flagged"]

export default function ProductsPage() {
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("All")
  const [status, setStatus] = useState("All")

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.region.toLowerCase().includes(search.toLowerCase())
      const matchesRegion = region === "All" || p.region === region
      const matchesStatus = status === "All" || p.status === status
      return matchesSearch && matchesRegion && matchesStatus
    })
  }, [search, region, status])

  const activeFilters = [region, status].filter((f) => f !== "All").length

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Authenticated Products
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Browse heritage products with verified authenticity and trust scores.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products or regions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-full pl-10"
            />
          </div>
          <div className="flex items-center gap-3">
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger className="w-[160px] rounded-full">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r === "All" ? "All Regions" : r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-[160px] rounded-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s === "All" ? "All Statuses" : s.charAt(0).toUpperCase() + s.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {activeFilters > 0 && (
              <Badge variant="secondary" className="gap-1.5 rounded-full">
                <SlidersHorizontal className="size-3" />
                {activeFilters}
              </Badge>
            )}
          </div>
        </div>

        <ProductGrid products={filtered} />
      </main>
    </div>
  )
}
