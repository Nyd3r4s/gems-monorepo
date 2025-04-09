<template>
  <GemsButton
    label="Create a Listing"
    highlight
    size="small"
    @click="handleCreateListing"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { GemsButton } from 'gems-components'

export default defineComponent({
  name: 'CreateListingBtn',
  components: {
    GemsButton,
  },
  setup() {
    const handleCreateListing = async () => {
      if (import.meta.client) {
        try {
          // Dynamically load arcpay functions from the plugin
          const { createClient } = await import('arcpay-sdk')
          const arcpayClient = createClient('algo:testnet', {
            apiKey: 'f2844771-55de-4b9d-9b6e-d957620c474e',
          })
          const listingId: string = await arcpayClient.create()
          console.log('Created listing with ID:', listingId)
          // You might want to emit an event or use a store to notify parent components
        } catch (error) {
          console.error('Failed to create listing:', error)
          // Handle error appropriately
        }
      } else {
        console.warn('handleCreateListing can only be executed on the client side.')
      }
    }

    return {
      handleCreateListing,
    }
  },
})
</script>