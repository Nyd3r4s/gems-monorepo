interface Sale {
  id: number
  price: number
  created_at: string
  listing_id: string
  updated_at: string | null
}

interface Auction {
  // Add auction properties if needed
}

interface DutchAuction {
  // Add dutch auction properties if needed
}

export interface ArcPayListing {
  id: string
  created_at: string
  updated_at: string | null
  account_id: number
  status: 'active' | 'sold' | 'cancelled'
  chain: string
  seller_address: string
  name: string
  currency: string
  type: 'sale' | 'auction' | 'dutch'
  app_id: number
  asset_id: string
  asset_thumbnail: string | null
  asset_type: 'asa' | 'nft'
  asset_qty: number
  asset_creator: string | null
  tags: string | null
  auctions: Auction[]
  sales: Sale[]
  dutch_auctions: DutchAuction[]
}
