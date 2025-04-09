<template>
  <main class="p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Welcome to Gems</h1>
    </div>

    <p class="mb-6">This is the home page of our application.</p>
    <p class="mb-6">Nav panel is WIP and not functional.</p>
    <p class="mb-6">Hover and click on a row to purchase a listing.</p>
    <p class="mb-6">Click on the "Create Listing" button to create a new listing.</p>

    <div class="p-4">
      <div class="mb-6">
        <h1 class="text-2xl font-bold">Listings</h1>
      </div>

      <ListingsTable :listings="listings" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import ListingsTable from '@/components/ListingsTable.vue'
// import { useArcpay } from 'arcpay-sdk'
import type { ArcPayListing } from '@/types/listing'

export default defineComponent({
  name: 'HomeView',
  components: {
    ListingsTable,
  },
  setup() {
    const listings = ref<ArcPayListing[]>([])

    onMounted(async () => {
      if (import.meta.client) {
        try {
          const { useArcpay } = await import('arcpay-sdk')
          const arcpayClient = useArcpay('algo:testnet')
          const response = await arcpayClient.getListings()
          listings.value = (response.data as unknown as ArcPayListing[]) ?? []
          console.log(response)
        } catch (error) {
          console.error('Failed to fetch listings:', error)
        }
      }
    })

    return {
      listings,
    }
  },
})
</script>
