import type { Transaction } from '@/types/transaction'

interface ArcpayListing {
  // Add the actual types from arcpay-sdk
  id: string
  amount?: number
  appId: number
  chain: string
  createdAt: string
  currency?: string
  fromAddress: string
  groupId?: string
  note?: string
  type: string
}

export const convertListingToTransaction = (listing: ArcpayListing): Transaction => {
  return {
    id: listing.id,
    amount: listing.amount || null,
    app_id: listing.appId,
    chain: listing.chain,
    created_at: listing.createdAt,
    currency: listing.currency || null,
    from_address: listing.fromAddress,
    group_id: listing.groupId || null,
    note: listing.note || null,
    type: listing.type.toUpperCase(),
    listings: null,
  }
}
