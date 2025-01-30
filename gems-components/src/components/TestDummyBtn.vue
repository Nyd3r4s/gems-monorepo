<template>
  <button
    :class="[
      'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      variant === 'primary'
        ? ['bg-blue-600 text-white hover:bg-blue-700', 'focus:ring-blue-500']
        : variant === 'secondary'
          ? ['bg-gray-200 text-gray-700 hover:bg-gray-300', 'focus:ring-gray-500']
          : variant === 'danger'
            ? ['bg-red-600 text-white hover:bg-red-700', 'focus:ring-red-500']
            : [],
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg px-6 py-3' : 'text-base',
      className,
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot name="icon-left">
      <!-- Icon slot -->
    </slot>
    <slot>
      <!-- Default slot for button text -->
    </slot>
    <slot name="icon-right">
      <!-- Icon slot -->
    </slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestDummyBtn',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary', 'danger'].includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
})
</script>
