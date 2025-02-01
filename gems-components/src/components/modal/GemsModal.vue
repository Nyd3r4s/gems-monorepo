<template>
  <Teleport to="body">
    <!-- Backdrop with blur -->
    <div
      v-if="modelValue"
      class="fixed inset-0 backdrop-blur-sm bg-black/30 transition-all duration-200"
      @click="$emit('update:modelValue', false)"
    />

    <!-- Modal -->
    <div v-if="modelValue" class="fixed inset-0 flex items-center justify-center p-4 z-50">
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md transform transition-all"
        @click.stop
      >
        <!-- Header -->
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
            {{ title }}
          </h3>
        </div>

        <!-- Content -->
        <div class="px-6 py-4">
          <slot />
        </div>

        <!-- Actions -->
        <div
          class="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3"
        >
          <GemsButton
            :label="cancelLabel"
            @click="handleCancel"
            class="border-gray-200 dark:border-gray-700"
          />
          <GemsButton
            :label="confirmLabel"
            @click="handleConfirm"
            class="border-gray-400 dark:border-gray-500"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GemsButton from '../button/GemsButton.vue'

export default defineComponent({
  name: 'GemsModal',
  components: {
    GemsButton,
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    confirmLabel: {
      type: String,
      default: 'Confirm',
    },
    cancelLabel: {
      type: String,
      default: 'Cancel',
    },
  },
  emits: ['update:modelValue', 'confirm', 'cancel'],
  setup(props, { emit }) {
    const handleConfirm = () => {
      emit('confirm')
      emit('update:modelValue', false)
    }

    const handleCancel = () => {
      emit('cancel')
      emit('update:modelValue', false)
    }

    return {
      handleConfirm,
      handleCancel,
    }
  },
})
</script>
