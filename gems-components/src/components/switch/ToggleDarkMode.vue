<template>
  <button
    type="button"
    class="relative inline-flex h-6 w-14 items-center rounded-full hover:transition-all duration-200 ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:scale-105 hover:shadow-md"
    :class="isDark ? 'bg-indigo-700 hover:bg-primary-700' : 'bg-gray-200 hover:bg-gray-300'"
    @click="toggle"
  >
    <WeatherNight :size="18" class="text-gray-300 hover:text-white translate-x-1" />
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
    WeatherSunny,
  },
  emits: ['dark-mode-toggle'],
  setup(_, { emit }) {
    const isDark = useDark({
      selector: 'html',
      attribute: 'class',
      valueDark: 'dark',
      valueLight: '',
      storageKey: 'theme',
    })
    const toggleDark = useToggle(isDark)

    const toggle = () => {
      toggleDark()
      emit('dark-mode-toggle', isDark.value)
    }

    return {
      isDark,
      toggle,
    }
  },
})
</script>
