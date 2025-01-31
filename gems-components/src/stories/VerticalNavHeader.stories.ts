import type { Meta, StoryObj } from '@storybook/vue3'
import VerticalNavHeader from '../components/navigation/VerticalNavHeader.vue'

const meta = {
  title: 'Navigation/VerticalNavHeader',
  component: VerticalNavHeader,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div class="h-screen"><story/></div>'
    })
  ]
} satisfies Meta<typeof VerticalNavHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithDarkMode: Story = {
  decorators: [
    () => ({
      template: `
        <div class="h-screen dark">
          <story/>
        </div>
      `
    })
  ]
} 