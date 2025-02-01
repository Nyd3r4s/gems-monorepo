import type { Meta, StoryObj } from '@storybook/vue3'
import VerticalNavHeader from '../components/navigation/VerticalNavHeader.vue'
import ToggleDarkMode from '../components/switch/ToggleDarkMode.vue'

const meta = {
  title: 'Navigation/VerticalNavHeader',
  component: VerticalNavHeader,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div class="h-screen"><story/></div>',
    }),
  ],
} satisfies Meta<typeof VerticalNavHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithDarkMode: Story = {
  render: () => ({
    components: { VerticalNavHeader, ToggleDarkMode },
    template: `
      <div class="h-screen relative">
        <div class="absolute top-4 right-4">
          <ToggleDarkMode />
        </div>
        <VerticalNavHeader />
      </div>
    `,
  }),
}
