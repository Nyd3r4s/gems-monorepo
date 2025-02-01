import type { Meta, StoryObj } from '@storybook/vue3'
import GemsButton from '../components/button/GemsButton.vue'
import ToggleDarkMode from '../components/switch/ToggleDarkMode.vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import CogIcon from 'vue-material-design-icons/Cog.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'

// Explicitly type the component props
type GemsButtonProps = {
  label?: string
  icon?: any // Using any for now to fix the material icons type issue
  compact?: boolean
  highlight?: boolean
}

const meta = {
  title: 'Components/GemsButton',
  component: GemsButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    icon: {
      control: 'object',
      description: 'Material Design Icon component',
    },
    compact: {
      control: 'boolean',
      description: 'Compact mode for navigation',
    },
    highlight: {
      control: 'boolean',
      description: 'Highlight button with primary color',
    },
  },
} satisfies Meta<typeof GemsButton>

export default meta
type Story = StoryObj<GemsButtonProps>

export const Default: Story = {
  args: {
    label: 'Home',
    icon: HomeIcon,
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Account Settings',
    icon: AccountIcon,
  },
}

export const Highlighted: Story = {
  args: {
    label: 'Primary Action',
    icon: PlusIcon,
    highlight: true,
  },
}

export const CompactMode: Story = {
  args: {
    label: 'Navigation Item',
    icon: AccountIcon,
    compact: true,
  },
}

export const NavigationExample: Story = {
  args: {},
  render: () => ({
    components: { GemsButton },
    setup() {
      return { HomeIcon, AccountIcon, CogIcon }
    },
    template: `
      <div class="flex flex-col gap-2 w-32">
        <GemsButton :icon="HomeIcon" label="Home" compact highlight />
        <GemsButton :icon="AccountIcon" label="Profile" compact />
        <GemsButton :icon="CogIcon" label="Settings" compact />
      </div>
    `,
  }),
}

export const WithDarkMode: Story = {
  args: {},
  render: () => ({
    components: { GemsButton, ToggleDarkMode },
    setup() {
      return { AccountIcon, PlusIcon }
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex justify-end">
          <ToggleDarkMode />
        </div>
        <div class="flex gap-4">
          <GemsButton :icon="AccountIcon" label="Account" />
          <GemsButton :icon="PlusIcon" label="Add New" highlight />
          <GemsButton label="Regular Button" />
        </div>
      </div>
    `,
  }),
}
