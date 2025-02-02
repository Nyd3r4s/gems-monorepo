<template>
  <nav
    class="fixed top-0 h-screen border-r border-grey-200 border-text-secondary transition-all duration-300 group backdrop-blur-md bg-gray-200 dark:bg-gray-950/30 flex flex-col justify-between z-50"
    :style="{ width: isExpanded ? NAV_WIDTH.EXPANDED : NAV_WIDTH.COLLAPSED }"
    @mouseenter="toggleExpand(true)"
    @mouseleave="toggleExpand(false)"
  >
    <div class="mt-4">
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
              :label="isAnimationComplete ? item.label : ''"
              :compact="!isExpanded"
              class="transition-all duration-300 pl-2"
              :style="{ width: isExpanded ? NAV_WIDTH.EXPANDED : NAV_WIDTH.COLLAPSED }"
              @click="handleNavClick(item.label)"
            />
          </li>
        </ul>
      </div>
    </div>

    <!-- Dark Mode Toggle -->
    <div
      class="mx-2 py-4 pl-2 transition-all duration-300 overflow-hidden flex items-center"
      :style="{
        width: isExpanded ? NAV_WIDTH.EXPANDED : '0',
        opacity: isExpanded ? 1 : 0,
      }"
    >
      <ToggleDarkMode />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import type { PropType } from 'vue'
import GemsButton from '../button/GemsButton.vue'
import ToggleDarkMode from '../switch/ToggleDarkMode.vue'
import { NAV_WIDTH } from '../../constants'
import type { NavItem } from '../../types'

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
    const isAnimationComplete = ref(false)

    watch(isExpanded, (newValue) => {
      if (newValue) {
        // Wait for expansion animation to complete
        setTimeout(() => {
          isAnimationComplete.value = true
        }, 150) // Half of the transition duration
      } else {
        isAnimationComplete.value = false
      }
    })

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
      isAnimationComplete,
      toggleExpand,
      toggleManual,
      handleNavClick,
      NAV_WIDTH,
    }
  },
})
</script>
