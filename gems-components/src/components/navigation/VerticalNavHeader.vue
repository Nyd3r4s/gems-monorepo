<template>
  <nav
    class="fixed top-0 h-screen border-r border-grey-200 border-text-secondary transition-all duration-300 group bg-gray-200 dark:bg-gray-950 flex flex-col justify-between"
    :class="[isExpanded ? 'w-32' : 'w-10']"
    @mouseenter="toggleExpand(true)"
    @mouseleave="toggleExpand(false)"
  >
    <div>
      <!-- Hamburger Button -->
      <button class="flex items-center pl-2" disabled>
        <MenuIcon :size="24" />
      </button>

      <!-- Navigation Links -->
      <div class="py-4">
        <ul class="space-y-1 transform transition-all duration-300">
          <li v-for="item in navItems" :key="item.label">
            <GemsButton
              :icon="item.icon"
              :label="item.label"
              :compact="!isExpanded"
              class="transition-all duration-300 pl-2"
              :class="[isExpanded ? 'w-32' : 'w-10']"
              @click="handleNavClick(item.label)"
            />
          </li>
        </ul>
      </div>
    </div>

    <!-- Dark Mode Toggle -->
    <div
      class="mx-2 py-4 pl-2 transition-all duration-300 overflow-hidden flex items-center"
      :class="[isExpanded ? 'opacity-100 w-32' : 'opacity-0 w-0']"
    >
      <ToggleDarkMode />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import type { Component } from 'vue'
import GemsButton from '../button/GemsButton.vue'
import ToggleDarkMode from '../switch/ToggleDarkMode.vue'

interface NavItem {
  label: string
  icon: Component
}

export default defineComponent({
  name: 'VerticalNavHeader',
  components: {
    GemsButton,
    MenuIcon,
    ToggleDarkMode,
  },
  props: {
    navItems: {
      type: Array as PropType<NavItem[]>,
      required: true,
    },
  },
  emits: ['nav-click'],
  setup(props, { emit }) {
    const isExpanded = ref(false)
    const isManuallyExpanded = ref(false)

    const toggleExpand = (expanded: boolean) => {
      if (!isManuallyExpanded.value) {
        isExpanded.value = expanded
      }
    }

    const toggleManual = () => {
      isManuallyExpanded.value = !isManuallyExpanded.value
      isExpanded.value = isManuallyExpanded.value
    }

    const handleNavClick = (label: string) => {
      emit('nav-click', label)
    }

    return {
      isExpanded,
      toggleExpand,
      toggleManual,
      handleNavClick,
    }
  },
})
</script>
