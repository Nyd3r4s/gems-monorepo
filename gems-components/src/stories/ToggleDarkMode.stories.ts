import type { Meta, StoryObj } from '@storybook/vue3'
import ToggleDarkMode from '../components/switch/ToggleDarkMode.vue'

const meta = {
  title: 'Components/ToggleDarkMode',
  component: ToggleDarkMode,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div class="p-4"><story/></div>',
    }),
  ],
} satisfies Meta<typeof ToggleDarkMode>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InDarkContainer: Story = {
  decorators: [
    () => ({
      template: '<div class="p-4 dark:bg-gray-800 rounded-lg"><story/></div>',
    }),
  ],
}

export const WithLabel: Story = {
  decorators: [
    () => ({
      template: `
        <div class="flex items-center gap-2 p-4">
          <span class="text-sm font-medium">Toggle theme</span>
          <story/>
        </div>
      `,
    }),
  ],
}
