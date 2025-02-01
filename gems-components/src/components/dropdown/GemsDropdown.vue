<template>
  <div class="relative inline-block w-full">
    <!-- Trigger Button -->
    <button
      type="button"
      @click="toggle"
      class="flex items-center justify-between w-full px-4 py-2 text-left border-2 rounded-lg border-grey-900 transition-all duration-200 bg-white dark:bg-gray-800 border-[var(--border-hover)]"
    >
      <span>{{ selected?.label || placeholder }}</span>
      <ChevronDownIcon
        :size="20"
        class="transition-transform duration-200"
        :class="{ 'transform rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border-2 border-[var(--border-color)] rounded-lg shadow-lg overflow-hidden"
    >
      <ul class="py-1">
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="flex items-center justify-between px-4 py-2 cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span>{{ option.label }}</span>
          <CheckIcon v-if="option.value === selected?.value" :size="20" class="text-primary-500" />
        </li>

        <!-- Create New Option -->
        <li v-if="allowCreate" class="border-t border-gray-200 dark:border-gray-700 mt-1">
          <button
            @click="onCreateNew"
            class="w-full flex items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <PlusIcon :size="20" class="mr-2" />
            <span>Create new</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
import CheckIcon from 'vue-material-design-icons/Check.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'

interface Option {
  label: string
  value: string | number
}

export default defineComponent({
  name: 'GemsDropdown',
  components: {
    ChevronDownIcon,
    CheckIcon,
    PlusIcon,
  },
  props: {
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
    allowCreate: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'create-new'],
  setup(props, { emit }) {
    const isOpen = ref(false)
    const selected = ref<Option | null>(
      props.options.find((opt) => opt.value === props.modelValue) || null,
    )

    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    const selectOption = (option: Option) => {
      selected.value = option
      emit('update:modelValue', option.value)
      isOpen.value = false
    }

    const onCreateNew = () => {
      emit('create-new')
      isOpen.value = false
    }

    return {
      isOpen,
      selected,
      toggle,
      selectOption,
      onCreateNew,
    }
  },
})
</script>
