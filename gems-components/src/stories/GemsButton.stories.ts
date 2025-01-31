import type { Meta, StoryObj } from '@storybook/vue3'
import GemsButton from '../components/button/GemsButton.vue'
import ToggleDarkMode from '../components/switch/ToggleDarkMode.vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import CogIcon from 'vue-material-design-icons/Cog.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'

const meta = {
  title: 'Components/GemsButton',
  component: GemsButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text'
    },
    icon: {
      control: 'object',
      description: 'Material Design Icon component'
    }
  }
} satisfies Meta<typeof GemsButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Click me'
  }
}

export const WithIcon: Story = {
  args: {
    label: 'Account Settings',
    icon: AccountIcon
  }
}

export const WithSlot: Story = {
  args: {
    icon: PlusIcon
  },
  render: (args) => ({
    components: { GemsButton },
    setup() {
      return { args }
    },
    template: `
      <GemsButton v-bind="args">
        Add New Item
      </GemsButton>
    `
  })
}

export const ButtonGroup: Story = {
  render: () => ({
    components: { GemsButton },
    setup() {
      return { AccountIcon, CogIcon, PlusIcon }
    },
    template: `
      <div class="flex gap-4">
        <GemsButton :icon="PlusIcon">Add</GemsButton>
        <GemsButton :icon="AccountIcon">Account</GemsButton>
        <GemsButton :icon="CogIcon">Settings</GemsButton>
      </div>
    `
  })
}

export const WithDarkMode: Story = {
  render: () => ({
    components: { GemsButton, ToggleDarkMode },
    setup() {
      return { AccountIcon }
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex justify-end">
          <ToggleDarkMode />
        </div>
        <div class="flex gap-4">
          <GemsButton :icon="AccountIcon">Account</GemsButton>
          <GemsButton>Regular Button</GemsButton>
        </div>
      </div>
    `
  })
} 