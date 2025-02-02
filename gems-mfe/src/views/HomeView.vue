<template>
  <main class="p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">{{ title }}</h1>
    </div>

    <p class="mb-6">{{ description }}</p>

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
import { useArcpay } from 'arcpay-sdk'
import type { ArcPayListing } from '@/types/listing'

export default defineComponent({
  name: 'HomeView',
  components: {
    ListingsTable,
  },
  setup() {
    const title = ref('Welcome to Gems')
    const description = ref('This is the home page of our application.')
    const listings = ref<ArcPayListing[]>([])

    onMounted(async () => {
      try {
        const arcpayClient = useArcpay('algo:testnet')
        const response = await arcpayClient.getListings()
        listings.value = (response.data as unknown as ArcPayListing[]) ?? []
      } catch (error) {
        console.error('Failed to fetch listings:', error)
      }
    })

    return {
      title,
      description,
      listings,
    }
  },
})
</script>
