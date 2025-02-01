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
    },
    compact: {
      control: 'boolean',
      description: 'Compact mode for navigation'
    },
    showLabel: {
      control: 'boolean',
      description: 'Show label in compact mode'
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

export const CompactMode: Story = {
  args: {
    label: 'Navigation Item',
    icon: AccountIcon,
    compact: true
  }
}

export const CompactWithLabel: Story = {
  args: {
    label: 'Navigation Item',
    icon: AccountIcon,
    compact: true,
    showLabel: true
  }
}

export const NavigationExample: Story = {
  render: () => ({
    components: { GemsButton },
    setup() {
      return { AccountIcon, CogIcon, PlusIcon }
    },
    template: `
      <div class="flex flex-col gap-2 w-32">
        <GemsButton :icon="HomeIcon" label="Home" compact />
        <GemsButton :icon="AccountIcon" label="Profile" compact showLabel />
        <GemsButton :icon="CogIcon" label="Settings" compact />
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
          <GemsButton :icon="AccountIcon" label="Account" />
          <GemsButton label="Regular Button" />
          <GemsButton :icon="AccountIcon" label="Compact" compact showLabel />
        </div>
      </div>
    `
  })
} 