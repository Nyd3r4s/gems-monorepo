<template>
  <button
    type="button"
    class="inline-flex items-center rounded-lg transition-all duration-200 border-2 transform active:scale-95 active:shadow-inner hover:-translate-y-0.5 overflow-hidden"
    :class="[
      buttonClasses,
      highlight
        ? 'bg-white dark:bg-gray-900 border-transparent bg-gradient-to-r from-yellow-400 via-purple-500 to-indigo-500 bg-clip-padding hover:bg-gradient-to-r hover:from-yellow-400 hover:via-purple-500 hover:to-indigo-500 hover:text-white'
        : '',
    ]"
  >
    <div
      v-if="highlight"
      class="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-lg transition-colors group-hover:bg-transparent"
    />
    <component
      v-if="icon"
      :is="icon"
      :size="iconSizes[size]"
      :class="[iconClasses, highlight ? 'relative z-10' : '']"
    />
    <span
      v-if="label && !compact"
      class="whitespace-nowrap transition-opacity duration-200"
      :class="[labelClasses, highlight ? 'relative z-10' : '']"
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
      'group relative': props.highlight,
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
