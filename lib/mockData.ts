import type { Product, SellerApplication, PlatformStats } from "./types"

export const products: Product[] = [
  {
    _id: "prod-001",
    name: "Mysuru Silk Saree",
    description:
      "Handwoven pure silk saree from the heritage looms of Mysuru. Each piece takes over two weeks to craft using traditional techniques passed down through generations. The intricate zari work and vibrant colors are hallmarks of authentic Mysuru silk, recognized by the Geographical Indication (GI) tag. This saree represents the pinnacle of Karnataka's textile heritage.",
    price: 12500,
    region: "Mysuru",
    seller: {
      name: "Lakshmi Devi Handlooms",
      phone: "+91 98765 43210",
      whatsapp: "+91 98765 43210",
      email: "lakshmi.handlooms@email.com",
    },
    authenticityId: "VA-MYS-2024-001",
    status: "verified",
    geoValidationStatus: "matched",
    trustScore: 94,
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://vishwaamara.com/verify/VA-MYS-2024-001",
    verificationUrl: "https://qr1.me-qr.com/data/image-pack/h54d9qsp",
    image: "/images/mysuru-silk.jpg",
  },
  {
    _id: "prod-002",
    name: "Mandya Organic Jaggery",
    description:
      "Pure organic jaggery produced from the sugarcane fields of Mandya district. Made using traditional methods without any chemical processing, this jaggery retains all its natural minerals and nutrients. Mandya is renowned for its rich agricultural heritage, and this product reflects the district's commitment to organic farming practices.",
    price: 350,
    region: "Mandya",
    seller: {
      name: "Mandya Organic Collective",
      phone: "+91 87654 32109",
      whatsapp: "+91 87654 32109",
      email: "mandya.organic@email.com",
    },
    authenticityId: "VA-MND-2024-002",
    status: "verified",
    geoValidationStatus: "matched",
    trustScore: 88,
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://vishwaamara.com/verify/VA-MND-2024-002",
    verificationUrl: "https://vishwaamara.com/verify/VA-MND-2024-002",
    image: "/images/mandya-jaggery.jpg",
  },
  {
    _id: "prod-003",
    name: "Channapatna Wooden Toy",
    description:
      "Hand-turned and lacquered wooden toy from the famous toy town of Channapatna. These toys are crafted using ivory wood and colored with natural vegetable dyes, a tradition dating back to the era of Tipu Sultan. Each toy is a GI-tagged product, ensuring its origin and authenticity from Channapatna's skilled artisans.",
    price: 800,
    region: "Channapatna",
    seller: {
      name: "Channapatna Artisan Guild",
      phone: "+91 76543 21098",
      whatsapp: "+91 76543 21098",
      email: "channapatna.artisan@email.com",
    },
    authenticityId: "VA-CHP-2024-003",
    status: "flagged",
    geoValidationStatus: "mismatch",
    trustScore: 62,
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://vishwaamara.com/verify/VA-CHP-2024-003",
    verificationUrl: "https://vishwaamara.com/verify/VA-CHP-2024-003",
    image: "/images/channapatna-toy.jpg",
  },
]

export const sellerApplications: SellerApplication[] = [
  {
    id: "seller-001",
    name: "Lakshmi Devi Handlooms",
    email: "lakshmi.handlooms@email.com",
    region: "Mysuru",
    status: "approved",
    appliedDate: "2024-01-15",
    productsCount: 12,
  },
  {
    id: "seller-002",
    name: "Mandya Organic Collective",
    email: "mandya.organic@email.com",
    region: "Mandya",
    status: "approved",
    appliedDate: "2024-02-20",
    productsCount: 8,
  },
  {
    id: "seller-003",
    name: "Dharwad Pedha House",
    email: "dharwad.pedha@email.com",
    region: "Dharwad",
    status: "pending",
    appliedDate: "2024-03-10",
    productsCount: 0,
  },
  {
    id: "seller-004",
    name: "Bidriware Artisans Co-op",
    email: "bidriware.coop@email.com",
    region: "Bidar",
    status: "pending",
    appliedDate: "2024-03-18",
    productsCount: 0,
  },
]

export const platformStats: PlatformStats = {
  totalProducts: 47,
  verifiedProducts: 39,
  flaggedProducts: 8,
  totalSellers: 23,
  pendingApprovals: 4,
  averageTrustScore: 82,
}
