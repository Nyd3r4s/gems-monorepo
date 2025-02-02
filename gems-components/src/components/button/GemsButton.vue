<template>
  <button
    type="button"
    class="inline-flex items-center h-10 rounded-lg transition-all duration-200 border-2 transform active:scale-95 active:shadow-inner hover:-translate-y-0.5 overflow-hidden"
    :class="[buttonClasses, { 'gradient-border hover-gradient': highlight }]"
  >
    <component v-if="icon" :is="icon" :size="18" :class="iconClasses" />
    <span
      v-if="label && !compact"
      class="whitespace-nowrap transition-opacity duration-200"
      :class="labelClasses"
    >
      {{ label }}
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType, Component } from 'vue'

export default defineComponent({
  name: 'GemsButton',
  props: {
    icon: {
      type: Object as PropType<Component>,
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
    compact: {
      type: Boolean,
      default: false,
    },
    highlight: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const buttonClasses = computed(() => ({
      'justify-start': true,
      'p-2': props.compact,
      'px-6 py-2': !props.compact,
      'border-transparent bg-black rounded-3xl text-black dark:text-black': props.highlight,
    }))

    const iconClasses = computed(() => ({
      'mr-2': !props.compact,
    }))

    const labelClasses = computed(() => ({
      'opacity-0 group-hover:opacity-100': props.compact,
    }))

    return {
      buttonClasses,
      iconClasses,
      labelClasses,
    }
  },
})
</script>

<style scoped>
.gradient-border {
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(to right, #facc15, #a855f7, #4f46e5) border-box;
  border: 2px solid transparent;
}

.hover-gradient:hover {
  background:
    linear-gradient(to right, #facc15, #a855f7, #4f46e5) padding-box,
    linear-gradient(to right, #facc15, #a855f7, #4f46e5) border-box;
  color: white;
  transition:
    background 0.3s ease,
    color 0.3s ease;
}
</style>
