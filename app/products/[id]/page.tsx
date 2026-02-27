import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { ProductDetail } from "@/components/product/ProductDetail"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/mockData"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p._id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <Button asChild variant="ghost" className="mb-6 -ml-2 rounded-full text-muted-foreground">
          <Link href="/products">
            <ArrowLeft className="mr-2 size-4" />
            Back to Products
          </Link>
        </Button>

        <ProductDetail product={product} />
      </main>
    </div>
  )
}
