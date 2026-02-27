"use client"

import { useState } from "react"
import { Upload, MapPin, Info } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const regions = ["Mysuru", "Mandya", "Channapatna", "Dharwad", "Bidar"]

export default function AddProduct() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center rounded-2xl border border-border bg-card px-6 py-16 text-center">
          <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-success/10">
            <MapPin className="size-7 text-success" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Product Submitted</h2>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Your product has been submitted for verification. Our team will validate
            the geo-location and authenticity details within 48 hours.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            className="mt-6 rounded-full"
            variant="outline"
          >
            Add Another Product
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Add New Product</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Submit a new product for authenticity verification.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
        className="flex flex-col gap-6"
      >
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-5 text-sm font-semibold text-foreground">Product Details</h3>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                Product Name
              </label>
              <Input id="name" placeholder="e.g. Mysuru Silk Saree" className="rounded-xl" required />
            </div>
            <div>
              <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-foreground">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                placeholder="Describe the heritage and craftsmanship of this product..."
                className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="price" className="mb-1.5 block text-sm font-medium text-foreground">
                  Price (INR)
                </label>
                <Input id="price" type="number" placeholder="0" className="rounded-xl" required />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Region of Origin
                </label>
                <Select required>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-5 text-sm font-semibold text-foreground">Product Image</h3>
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/50 px-6 py-12 text-center">
            <Upload className="mb-3 size-8 text-muted-foreground" />
            <p className="text-sm font-medium text-foreground">Drop image here or click to upload</p>
            <p className="mt-1 text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-medium text-foreground">Geo-Validation Notice</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Your browser location will be compared with the claimed region of origin.
                Products with matching geo-data receive higher trust scores.
              </p>
              <Badge variant="secondary" className="mt-3 rounded-full text-xs">
                <MapPin className="mr-1 size-3" />
                Location will be captured on submit
              </Badge>
            </div>
          </div>
        </div>

        <Button type="submit" size="lg" className="rounded-full">
          Submit for Verification
        </Button>
      </form>
    </div>
  )
}
