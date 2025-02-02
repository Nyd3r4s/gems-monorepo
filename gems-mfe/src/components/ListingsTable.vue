<template>
  <div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <!-- Header -->
      <thead class="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th
            v-for="column in LISTING_COLUMNS"
            :key="column.key"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>

      <!-- Body -->
      <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
        <tr
          v-for="listing in listings"
          :key="listing.id"
          class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
            {{ formatDate(listing.created_at) }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm">
            <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
              :class="{
                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200':
                  listing.status === 'active',
                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200':
                  listing.status === 'sold',
              }"
            >
              {{ listing.status }}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
            {{ listing.name }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
            {{ listing.type }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
            {{ listing.chain }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
            <span class="font-mono">{{ formatAddress(listing.seller_address) }}</span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
            {{ formatPrice(listing.sale_price, listing.currency_ticker) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ArcPayListing } from '@/types/listing'

export const LISTING_COLUMNS = [
  { key: 'created_at', label: 'Date' },
  { key: 'status', label: 'Status' },
  { key: 'name', label: 'Name' },
  { key: 'type', label: 'Type' },
  { key: 'chain', label: 'Chain' },
  { key: 'seller_address', label: 'Seller' },
  { key: 'sale_price', label: 'Price' },
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
    const formatDate = (dateString: string | null) => {
      if (!dateString) return '-'
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    }

    const formatAddress = (address: string | null) => {
      if (!address) return '-'
      return `${address.slice(0, 6)}...${address.slice(-4)}`
    }

    const formatPrice = (price: number | null, currency: string | null) => {
      if (!price || !currency) return '-'
      return `${price} ${currency}`
    }

    return {
      LISTING_COLUMNS,
      formatDate,
      formatAddress,
      formatPrice,
    }
  },
})
</script>

<style scoped>
.table-container {
  @apply overflow-x-auto shadow-md sm:rounded-lg;
}
</style>
