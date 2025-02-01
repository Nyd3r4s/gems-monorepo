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
