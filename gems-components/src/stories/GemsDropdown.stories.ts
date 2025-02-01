import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import GemsDropdown from '../components/dropdown/GemsDropdown.vue'
import ToggleDarkMode from '../components/switch/ToggleDarkMode.vue'

const meta = {
  title: 'Components/GemsDropdown',
  component: GemsDropdown,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Selected value (v-model)',
    },
    options: {
      control: 'object',
      description: 'Array of options with label and value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    allowCreate: {
      control: 'boolean',
      description: 'Allow creating new options',
    },
  },
} satisfies Meta<typeof GemsDropdown>

export default meta
type Story = StoryObj<typeof meta>

const sampleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select an option',
  },
}

export const WithSelection: Story = {
  args: {
    options: sampleOptions,
    modelValue: '2',
  },
}

export const WithCreateOption: Story = {
  render: () => ({
    components: { GemsDropdown },
    setup() {
      const options = ref([...sampleOptions])
      const selectedValue = ref('')

      const handleCreate = (newOption: { label: string; value: string }) => {
        options.value.push(newOption)
        console.log('Created new option:', newOption)
      }

      return {
        options,
        selectedValue,
        handleCreate,
      }
    },
    template: `
      <div class="w-64">
        <GemsDropdown
          v-model="selectedValue"
          :options="options"
          :allow-create="true"
          placeholder="Select or create new"
          @create-new="handleCreate"
        />
        <div class="mt-4 text-sm text-gray-500">
          Selected: {{ selectedValue }}
        </div>
      </div>
    `,
  }),
}

export const WithDarkMode: Story = {
  render: () => ({
    components: { GemsDropdown, ToggleDarkMode },
    setup() {
      return { sampleOptions }
    },
    template: `
      <div class="p-4 space-y-4">
        <div class="flex justify-end">
          <ToggleDarkMode />
        </div>
        <div class="w-64">
          <GemsDropdown
            :options="sampleOptions"
            placeholder="Select an option"
          />
        </div>
      </div>
    `,
  }),
}

export const WithDarkModeAndCreate: Story = {
  render: () => ({
    components: { GemsDropdown, ToggleDarkMode },
    setup() {
      const options = ref([...sampleOptions])
      const selectedValue = ref('')

      const handleCreate = () => {
        const newValue = `${options.value.length + 1}`
        options.value.push({
          label: `Option ${newValue}`,
          value: newValue,
        })
      }

      return {
        options,
        selectedValue,
        handleCreate,
      }
    },
    template: `
      <div class="p-4 space-y-4">
        <div class="flex justify-end">
          <ToggleDarkMode />
        </div>
        <div class="w-64">
          <GemsDropdown
            v-model="selectedValue"
            :options="options"
            placeholder="Select or create new"
            :allow-create="true"
            @create-new="handleCreate"
          />
          <div class="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Selected: {{ selectedValue }}
          </div>
        </div>
      </div>
    `,
  }),
}
