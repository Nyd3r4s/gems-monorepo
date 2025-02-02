<template>
  <div class="relative inline-block w-full">
    <!-- Trigger Button -->
    <button
      type="button"
      @click="toggle"
      class="flex items-center justify-between w-full border-2 rounded-lg border-grey-900 transition-all duration-200 bg-white dark:bg-gray-800 border-[var(--border-hover)]"
      :class="[size === 'small' ? 'px-2 py-1 text-sm' : 'px-4 py-2']"
    >
      <span>{{ selected?.label || placeholder }}</span>
      <ChevronDownIcon
        :size="size === 'small' ? 16 : 20"
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
            @click="showCreateModal = true"
            class="w-full flex items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <PlusIcon :size="20" class="mr-2" />
            <span>Create new</span>
          </button>
        </li>
      </ul>
    </div>

    <!-- Create New Modal -->
    <GemsModal
      v-model="showCreateModal"
      title="Create New Option"
      confirm-label="Create"
      @confirm="handleCreateConfirm"
    >
      <div class="space-y-4">
        <div>
          <input
            v-model="newOptionValue"
            type="text"
            class="w-full px-3 py-2 border dark:text-white border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter new option"
          />
        </div>
      </div>
    </GemsModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
import CheckIcon from 'vue-material-design-icons/Check.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import GemsModal from '../modal/GemsModal.vue'

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
    GemsModal,
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
    size: {
      type: String as PropType<'default' | 'small'>,
      default: 'default',
    },
  },
  emits: ['update:modelValue', 'create-new'],
  setup(props, { emit }) {
    const isOpen = ref(false)
    const showCreateModal = ref(false)
    const newOptionValue = ref('')
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

    const handleCreateConfirm = () => {
      if (newOptionValue.value.trim()) {
        const newOption = {
          label: newOptionValue.value.trim(),
          value: newOptionValue.value.trim(),
        }
        emit('create-new', newOption)
        selectOption(newOption)
        newOptionValue.value = ''
        showCreateModal.value = false
      }
    }

    return {
      isOpen,
      selected,
      showCreateModal,
      newOptionValue,
      toggle,
      selectOption,
      handleCreateConfirm,
    }
  },
})
</script>
