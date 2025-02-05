<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <!-- Listing Card -->
    <div
      v-for="listing in listings"
      :key="listing.id"
      class="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden cursor-pointer"
      @click="handleListingClick(listing.id)"
    >
      <!-- Thumbnail -->
      <div class="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          :src="listing.asset_thumbnail || '/placeholder-image.png'"
          :alt="listing.name"
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      <!-- Content -->
      <div class="p-4">
        <!-- Title and Status -->
        <div class="flex items-start justify-between mb-2">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
            {{ listing.name }}
          </h3>
          <span
            class="ml-2 px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap"
            :class="{
              'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200':
                listing.status === 'active',
              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200':
                listing.status === 'sold',
            }"
          >
            {{ listing.status }}
          </span>
        </div>

        <!-- Price -->
        <div class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {{ formatPrice(getListingPrice(listing)) }}
        </div>

        <!-- Details -->
        <div class="space-y-1 text-sm text-gray-500 dark:text-gray-400">
          <div class="flex items-center gap-1">
            <span class="font-medium">Type:</span>
            {{ listing.type }}
          </div>
          <div class="flex items-center gap-1">
            <span class="font-medium">Chain:</span>
            {{ listing.chain }}
          </div>
          <div class="flex items-center gap-1">
            <span class="font-medium">Seller:</span>
            <span class="font-mono">{{ formatAddress(listing.seller_address) }}</span>
          </div>
          <div class="flex items-center gap-1">
            <span class="font-medium">Listed:</span>
            {{ formatDate(listing.created_at) }}
          </div>
        </div>
      </div>

      <!-- Buy Now Overlay -->
      <div
        class="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors duration-200 flex items-center justify-center"
      >
        <span
          class="px-4 py-2 bg-indigo-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-200"
        >
          Buy Now
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ArcPayListing } from '@/types/listing'
import { useArcpay } from 'arcpay-sdk'

export const LISTING_COLUMNS = [
  { key: 'created_at', label: 'Date' },
  { key: 'status', label: 'Status' },
  { key: 'name', label: 'Name' },
  { key: 'type', label: 'Type' },
  { key: 'chain', label: 'Chain' },
  { key: 'seller_address', label: 'Seller' },
  { key: 'price', label: 'Asset & Price' },
] as const

export default defineComponent({
  name: 'ListingsTable',
  props: {
    listings: {
      type: Array as PropType<ArcPayListing[]>,
      required: true,
    },
  },
  setup() {
    const getListingPrice = (listing: ArcPayListing): number => {
      if (listing.type === 'sale' && listing.sales.length > 0) {
        return listing.sales[0].price
      }
      return 0
    }

    const handleListingClick = async (listingId: string) => {
      try {
        const arcpayClient = useArcpay('algo:testnet')
        const confirmation = arcpayClient.buy(listingId)
        console.log('Purchase confirmation:', confirmation)
      } catch (error) {
        console.error('Failed to purchase listing:', error)
      }
    }

    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    }

    const formatAddress = (address: string) => {
      return `${address.slice(0, 6)}...${address.slice(-4)}`
    }

    const formatPrice = (price: number) => {
      return `${price} ALGO`
    }

    return {
      LISTING_COLUMNS,
      formatDate,
      formatAddress,
      formatPrice,
      handleListingClick,
      getListingPrice,
    }
  },
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
