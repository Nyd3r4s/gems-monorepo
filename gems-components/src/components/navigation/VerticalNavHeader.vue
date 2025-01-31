<template>
  <nav 
    class="fixed top-0 h-screen bg-white dark:bg-gray-800 border border-grey-200 border-text-secondary transition-all duration-300 group"
    :class="[isExpanded ? 'w-32' : 'w-10']"
    @mouseenter="toggleExpand(true)"
    @mouseleave="toggleExpand(false)"
  >
    <!-- Hamburger Button -->
    <div class="flex items-center pl-2">
      <MenuIcon :size="24" />
    </div>

    <!-- Navigation Links -->
    <div class="py-4">
      <ul class="space-y-1">
        <li v-for="(item, index) in navItems" :key="index">
          <GemsButton
            :icon="item.icon"
            :label="item.label"
            compact
            class="transition-all duration-300 pl-2"
            :class="[isExpanded ? 'w-32' : 'w-10']"
            :showLabel="isExpanded"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import CogIcon from 'vue-material-design-icons/Cog.vue'
import GemsButton from '../button/GemsButton.vue'

export default defineComponent({
  name: 'VerticalNavHeader',
  components: {
    GemsButton,
    MenuIcon,
    HomeIcon,
    AccountIcon,
    CogIcon
  },
  setup() {
    const isExpanded = ref(false)
    const isManuallyExpanded = ref(false)
    
    const navItems = [
      { label: 'Home', icon: HomeIcon },
      { label: 'Profile', icon: AccountIcon },
      { label: 'Settings', icon: CogIcon }
    ]

    const toggleExpand = (expanded: boolean) => {
      if (!isManuallyExpanded.value) {
        isExpanded.value = expanded
      }
    }

    const toggleManual = () => {
      isManuallyExpanded.value = !isManuallyExpanded.value
      isExpanded.value = isManuallyExpanded.value
    }

    return {
      isExpanded,
      navItems,
      toggleExpand,
      toggleManual
    }
  }
})
</script> 