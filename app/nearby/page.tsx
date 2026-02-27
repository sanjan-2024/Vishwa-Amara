"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  ShieldCheck,
  AlertTriangle,
  Navigation,
  Locate,
} from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { products } from "@/lib/mockData"
import type { Product } from "@/lib/types"

interface NearbyProduct extends Product {
  distance: number
  lat: number
  lng: number
}

const nearbyProducts: NearbyProduct[] = [
  { ...products[0], distance: 2.3, lat: 12.3051, lng: 76.6551 },
  { ...products[1], distance: 8.7, lat: 12.5218, lng: 76.8951 },
  { ...products[2], distance: 14.2, lat: 12.6498, lng: 77.2066 },
]

const regionCoords: Record<string, { lat: number; lng: number; label: string }> = {
  mysuru: { lat: 12.2958, lng: 76.6394, label: "Mysuru" },
  mandya: { lat: 12.5218, lng: 76.8951, label: "Mandya" },
  channapatna: { lat: 12.6498, lng: 77.2066, label: "Channapatna" },
}

export default function NearbyPage() {
  const [radius, setRadius] = useState([25])
  const [userLocation, setUserLocation] = useState<string | null>(null)
  const [locating, setLocating] = useState(false)

  const filteredProducts = useMemo(() => {
    return nearbyProducts.filter((p) => p.distance <= radius[0])
  }, [radius])

  const handleLocate = () => {
    setLocating(true)
    setTimeout(() => {
      setUserLocation("Mysuru, Karnataka")
      setLocating(false)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Nearby Verified Products
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Discover geo-authenticated heritage products close to your location.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Controls Panel */}
          <div className="flex flex-col gap-6">
            {/* Location Card */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Your Location</h3>
              {userLocation ? (
                <div className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3">
                  <MapPin className="size-4 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">{userLocation}</span>
                </div>
              ) : (
                <Button
                  onClick={handleLocate}
                  disabled={locating}
                  className="w-full rounded-full"
                  variant="outline"
                >
                  <Locate className="mr-2 size-4" />
                  {locating ? "Detecting location..." : "Detect My Location"}
                </Button>
              )}
            </div>

            {/* Radius Slider */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">Search Radius</h3>
                <span className="text-sm font-medium text-accent">{radius[0]} km</span>
              </div>
              <Slider
                value={radius}
                onValueChange={setRadius}
                min={1}
                max={50}
                step={1}
              />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>1 km</span>
                <span>50 km</span>
              </div>
            </div>

            {/* Region Quick Links */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Heritage Regions</h3>
              <div className="flex flex-col gap-2">
                {Object.values(regionCoords).map((r) => (
                  <button
                    key={r.label}
                    onClick={() => setUserLocation(`${r.label}, Karnataka`)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <Navigation className="size-3.5" />
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Products in range</span>
                <span className="text-lg font-bold text-foreground">{filteredProducts.length}</span>
              </div>
            </div>
          </div>

          {/* Map + Product List */}
          <div className="flex flex-col gap-6">
            {/* Map Placeholder */}
            <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-border bg-secondary">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-card">
                  <MapPin className="size-7 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">Interactive Map View</p>
                <p className="max-w-xs text-xs text-muted-foreground">
                  {userLocation
                    ? `Showing products within ${radius[0]}km of ${userLocation}`
                    : "Set your location to see verified products on the map"}
                </p>
              </div>

              {/* Location pins overlay */}
              {userLocation && (
                <div className="absolute inset-0 pointer-events-none">
                  {filteredProducts.map((p, i) => (
                    <div
                      key={p._id}
                      className="absolute flex flex-col items-center"
                      style={{
                        left: `${30 + i * 25}%`,
                        top: `${35 + (i % 2 === 0 ? 0 : 15)}%`,
                      }}
                    >
                      <div className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md">
                        <MapPin className="size-4" />
                      </div>
                      <span className="mt-1 rounded-md bg-card px-2 py-0.5 text-[10px] font-medium text-foreground shadow-sm">
                        {p.region}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Results */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-foreground">
                {filteredProducts.length} products within {radius[0]} km
              </h3>

              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-16 text-center">
                  <p className="text-base font-medium text-foreground">No products in range</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Try increasing your search radius.
                  </p>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <Link
                    key={product._id}
                    href={`/products/${product._id}`}
                    className="group flex gap-4 rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
                  >
                    <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-secondary">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                            {product.name}
                          </h4>
                          <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="size-3" />
                              {product.region}
                            </span>
                            <span className="flex items-center gap-1">
                              <Navigation className="size-3" />
                              {product.distance} km away
                            </span>
                          </div>
                        </div>
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
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Trust Score: {product.trustScore}
                        </span>
                        <span className="text-xs font-medium text-foreground">
                          {"₹"}{product.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
