export interface ArcPayListing {
  id: string | null
  created_at: string | null
  updated_at: string | null
  status: string | null // 'active' | 'sold' | 'cancelled' | etc.
  chain: string | null // 'algo' | 'eth' | etc.
  seller_address: string | null
  name: string | null
  type: string | null // 'fixed' | 'auction' | 'dutch' | etc.
  app_id: number | null
  currency: string | null
  currency_name: string | null
  currency_ticker: string | null
  currency_icon: string | null
  currency_type: string | null // 'native' | 'token' | etc.
  currency_decimals: number | null
  asset_id: string | null
  asset_thumbnail: string | null
  asset_type: string | null // 'nft' | 'token' | etc.
  asset_qty: number | null
  asset_creator: string | null
  tags: string | null
  sale_price: number | null
  auction_start_price: number | null
  auction_increment: number | null
  auction_duration: number | null
  dutch_min_price: number | null
  dutch_max_price: number | null
  dutch_duration: number | null
}
