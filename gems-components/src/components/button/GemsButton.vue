<template>
  <button
    type="button"
    class="inline-flex items-center rounded-lg transition-all duration-200 border-2 transform active:scale-95 active:shadow-inner hover:-translate-y-0.5 overflow-hidden"
    :class="[buttonClasses, { 'gradient-border hover-gradient': highlight }]"
  >
    <component v-if="icon" :is="icon" :size="iconSizes[size]" :class="iconClasses" />
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
    size: {
      type: String as PropType<'small' | 'default' | 'large'>,
      default: 'default',
    },
  },
  setup(props) {
    const sizeClasses = {
      small: 'h-8 text-sm',
      default: 'h-10 text-base',
      large: 'h-12 text-lg',
    }

    const iconSizes = {
      small: 16,
      default: 18,
      large: 22,
    }

    const buttonClasses = computed(() => ({
      'justify-start': true,
      'p-1.5': props.compact && props.size === 'small',
      'p-2': props.compact && props.size === 'default',
      'p-3': props.compact && props.size === 'large',
      'px-4 py-1.5': !props.compact && props.size === 'small',
      'px-6 py-2': !props.compact && props.size === 'default',
      'px-8 py-3': !props.compact && props.size === 'large',
      'border-transparent bg-black rounded-3xl text-black dark:text-black': props.highlight,
      [sizeClasses[props.size]]: true,
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
      iconSizes,
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

:global(.dark) .gradient-border {
  background:
    linear-gradient(#2a2a2a, #2a2a2a) padding-box,
    linear-gradient(to right, #facc15, #a855f7, #4f46e5) border-box;
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
