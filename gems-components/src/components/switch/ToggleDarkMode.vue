<template>
  <button
    type="button"
    @click="toggleDark()"
    class="relative inline-flex h-6 w-14 items-center rounded-full hover:transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:scale-105 hover:shadow-md"
    :class="isDark ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-200 hover:bg-gray-300'"
  >
    <WeatherNight :size="18" class="translate-x-1" />
    <WeatherSunny :size="18" class="translate-x-4" />
    <div
      class="h-5 w-5 rounded-full bg-white shadow-sm hover:shadow absolute"
      :class="{ 'translate-x-8': isDark, 'translate-x-1': !isDark }"
    ></div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import WeatherNight from 'vue-material-design-icons/WeatherNight.vue'
import WeatherSunny from 'vue-material-design-icons/WeatherSunny.vue'

export default defineComponent({
  name: 'ToggleDarkMode',
  components: {
    WeatherNight,
    WeatherSunny
  },
  setup() {
    const isDark = useDark({
      selector: 'html',
      attribute: 'class',
      valueDark: 'dark',
      valueLight: '',
      storageKey: 'theme',
    })
    const toggleDark = useToggle(isDark)

    return {
      isDark,
      toggleDark,
    }
  },
})
</script>
