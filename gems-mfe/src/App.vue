<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { VerticalNavHeader, ToggleDarkMode, GemsDropdown } from 'gems-components'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import CogIcon from 'vue-material-design-icons/Cog.vue'
import ChartBarIcon from 'vue-material-design-icons/ChartBar.vue'
import DiamondIcon from 'vue-material-design-icons/Diamond.vue'
import TransactionIcon from 'vue-material-design-icons/SwapHorizontal.vue'
import { useRouter } from 'vue-router'
import CreateListingBtn from './components/CreateListingBtn.vue'
import { createClient, useArcpay } from 'arcpay-sdk'

export default defineComponent({
  name: 'App',
  components: {
    VerticalNavHeader,
    ToggleDarkMode,
    GemsDropdown,
    DiamondIcon,
    CreateListingBtn,
  },
  setup() {
    const router = useRouter()
    const selectedCrypto = ref('')

    onMounted(() => {
      createClient('algo:testnet', {
        apiKey: 'f2844771-55de-4b9d-9b6e-d957620c474e',
      })
    })

    const cryptoOptions = [
      { label: 'Placeholder Filter (PHF)', value: 'PHF' },
      { label: 'Bitcoin (BTC)', value: 'BTC' },
      { label: 'Ethereum (ETH)', value: 'ETH' },
    ]

    const navItems = [
      { label: 'Dashboard', icon: HomeIcon },
      { label: 'Analytics', icon: ChartBarIcon },
      { label: 'Profile', icon: AccountIcon },
      { label: 'Settings', icon: CogIcon },
    ]

    const handleNavClick = (label: string) => {
      // Convert label to route path
      const path = '/' + label.toLowerCase()
      console.log(path)
      // router.push(path)
    }

    const handleCryptoCreate = (newOption: { label: string; value: string }) => {
      cryptoOptions.push(newOption)
      selectedCrypto.value = newOption.value
    }

    const handleDarkModeToggle = async (isDark: boolean) => {
      try {
        const arcpayClient = useArcpay('algo:testnet')
        arcpayClient.toggleDarkMode(isDark)
      } catch (error) {
        console.error('Failed to sync dark mode:', error)
      }
    }

    return {
      navItems,
      cryptoOptions,
      selectedCrypto,
      handleNavClick,
      handleCryptoCreate,
      handleDarkModeToggle,
    }
  },
})
</script>

<template>
  <div>
    <!-- Horizontal Header -->
    <header
      class="fixed top-0 right-0 left-0 h-14 pl-10 pr-4 flex items-center justify-between backdrop-blur-md bg-white/30 dark:bg-gray-950/30 border-b border-gray-200 dark:border-gray-800 z-40"
    >
      <div class="flex items-center pl-4">
        <h1 class="text-2xl font-semibold">Gems</h1>
      </div>

      <!-- Crypto Dropdown -->
      <div class="w-48">
        <GemsDropdown
          v-model="selectedCrypto"
          :options="cryptoOptions"
          size="small"
          placeholder="Select Crypto"
        />
      </div>
      <div class="flex items-center gap-4">
        <CreateListingBtn />
        <ToggleDarkMode @dark-mode-toggle="handleDarkModeToggle" />
      </div>
    </header>

    <!-- Navigation and Content -->
    <VerticalNavHeader :nav-items="navItems" @nav-click="handleNavClick" />
    <main class="pl-10 pt-20">
      <RouterView />
    </main>
  </div>
</template>
