<script lang="ts">
import { defineComponent } from 'vue'
import { VerticalNavHeader } from 'gems-components'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import CogIcon from 'vue-material-design-icons/Cog.vue'
import ChartBarIcon from 'vue-material-design-icons/ChartBar.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    VerticalNavHeader,
  },
  setup() {
    const router = useRouter()

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

    return {
      navItems,
      handleNavClick,
    }
  },
})
</script>

<template>
  <div>
    <VerticalNavHeader :nav-items="navItems" @nav-click="handleNavClick" />
    <main class="pl-10 pt-4">
      <RouterView />
    </main>
  </div>
</template>
