<template>
  <GemsButton
    label="Create a Listing"
    :icon="TransactionIcon"
    highlight
    size="small"
    @click="handleCreateListing"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { GemsButton } from 'gems-components'
import TransactionIcon from 'vue-material-design-icons/SwapHorizontal.vue'
import { useArcpay } from 'arcpay-sdk'

export default defineComponent({
  name: 'CreateListingBtn',
  components: {
    GemsButton,
  },
  setup() {
    const handleCreateListing = async () => {
      try {
        const arcpayClient = useArcpay('algo:testnet')
        const listingId: string = await arcpayClient.create()
        console.log('Created listing with ID:', listingId)
        // You might want to emit an event or use a store to notify parent components
      } catch (error) {
        console.error('Failed to create listing:', error)
        // Handle error appropriately
      }
    }

    return {
      TransactionIcon,
      handleCreateListing,
    }
  },
})
</script>
