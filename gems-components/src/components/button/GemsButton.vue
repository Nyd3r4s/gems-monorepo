<template>
  <button
    type="button"
    class="inline-flex items-center justify-center px-6 py-2 rounded-2xl transition-all duration-200 focus:outline-none border-2"
  >
    <component
      v-if="icon"
      :is="icon"
      :size="18"
      class="mr-2"
    />
    <span v-if="label">{{ label }}</span>
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType, Component } from 'vue'

export default defineComponent({
  name: 'GemsButton',
  props: {
    icon: {
      type: Object as PropType<Component>,
      default: null
    },
    label: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
/* Your styles here */
</style>