<template>
  <button
    type="button"
    class="inline-flex items-center h-10 rounded-lg transition-all duration-200 border-2 transform active:scale-95"
    :class="[
      compact ? 'p-2' : 'px-6 py-2',
      compact ? 'justify-start' : 'justify-center',
      compact && !showLabel ? 'w-10' : '',
    ]"
  >
    <component
      v-if="icon"
      :is="icon"
      :size="18"
      :class="{ 'mr-2': !compact || (compact && showLabel) }"
    />
    <span
      v-if="label && (!compact || showLabel)"
      class="whitespace-nowrap transition-opacity duration-200"
      :class="{ 'opacity-0 group-hover:opacity-100': compact }"
    >
      {{ label }}
    </span>
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
    showLabel: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
