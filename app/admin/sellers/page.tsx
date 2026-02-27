"use client"

import { useState } from "react"
import { Check, X, Clock, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { sellerApplications as initialSellers } from "@/lib/mockData"
import type { SellerApplication } from "@/lib/types"

function getStatusBadge(status: SellerApplication["status"]) {
  switch (status) {
    case "approved":
      return (
        <Badge className="bg-success text-success-foreground gap-1 border-0 text-[10px]">
          <Check className="size-3" />
          Approved
        </Badge>
      )
    case "rejected":
      return (
        <Badge variant="destructive" className="gap-1 text-[10px]">
          <X className="size-3" />
          Rejected
        </Badge>
      )
    default:
      return (
        <Badge variant="secondary" className="gap-1 text-[10px]">
          <Clock className="size-3" />
          Pending
        </Badge>
      )
  }
}

export default function AdminSellers() {
  const [sellers, setSellers] = useState(initialSellers)

  const handleAction = (id: string, action: "approved" | "rejected") => {
    setSellers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: action } : s))
    )
  }

  const pending = sellers.filter((s) => s.status === "pending")
  const others = sellers.filter((s) => s.status !== "pending")

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Seller Management</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Review and manage seller applications and accounts.
        </p>
      </div>

      {/* Pending Applications */}
      {pending.length > 0 && (
        <div className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Pending Applications ({pending.length})
          </h2>
          <div className="flex flex-col gap-4">
            {pending.map((seller) => (
              <div
                key={seller.id}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{seller.name}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Mail className="size-3" />
                      {seller.email}
                    </span>
                    <span>Region: {seller.region}</span>
                    <span>Applied: {seller.appliedDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    className="rounded-full bg-success text-success-foreground hover:bg-success/90"
                    onClick={() => handleAction(seller.id, "approved")}
                  >
                    <Check className="mr-1.5 size-3" />
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => handleAction(seller.id, "rejected")}
                  >
                    <X className="mr-1.5 size-3" />
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Sellers Table */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">All Sellers</h2>
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Seller
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Region
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Status
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Products
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Applied
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sellers.map((seller) => (
                <tr key={seller.id} className="transition-colors hover:bg-secondary/30">
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-foreground">{seller.name}</p>
                    <p className="text-xs text-muted-foreground">{seller.email}</p>
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{seller.region}</td>
                  <td className="px-5 py-4">{getStatusBadge(seller.status)}</td>
                  <td className="px-5 py-4 text-right text-sm text-foreground">
                    {seller.productsCount}
                  </td>
                  <td className="px-5 py-4 text-right text-sm text-muted-foreground">
                    {seller.appliedDate}
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
