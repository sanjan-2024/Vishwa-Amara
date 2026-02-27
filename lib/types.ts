export interface Seller {
  name: string
  phone: string
  whatsapp: string
  email: string
}

export interface Product {
  _id: string
  name: string
  description: string
  price: number
  region: string
  seller: Seller
  authenticityId: string
  status: "verified" | "flagged"
  geoValidationStatus: "matched" | "mismatch" | "not_provided"
  trustScore: number
  qrCode: string
  verificationUrl: string
  image: string
}

export interface SellerApplication {
  id: string
  name: string
  email: string
  region: string
  status: "pending" | "approved" | "rejected"
  appliedDate: string
  productsCount: number
}

export interface PlatformStats {
  totalProducts: number
  verifiedProducts: number
  flaggedProducts: number
  totalSellers: number
  pendingApprovals: number
  averageTrustScore: number
}
