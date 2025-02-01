import type { Meta, StoryObj } from '@storybook/vue3'
import VerticalNavHeader from '../components/navigation/VerticalNavHeader.vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import CogIcon from 'vue-material-design-icons/Cog.vue'
import ChartBarIcon from 'vue-material-design-icons/ChartBar.vue'
import EmailIcon from 'vue-material-design-icons/Email.vue'

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

const defaultNavItems = [
  { label: 'Home', icon: HomeIcon },
  { label: 'Profile', icon: AccountIcon },
  { label: 'Settings', icon: CogIcon },
]

const extendedNavItems = [
  { label: 'Dashboard', icon: HomeIcon },
  { label: 'Analytics', icon: ChartBarIcon },
  { label: 'Messages', icon: EmailIcon },
  { label: 'Profile', icon: AccountIcon },
  { label: 'Settings', icon: CogIcon },
]

export const Default: Story = {
  args: {
    navItems: defaultNavItems,
  },
  render: (args) => ({
    components: { VerticalNavHeader },
    setup() {
      const onNavClick = (label: string) => {
        console.log(`Navigation clicked: ${label}`)
      }

      return { args, onNavClick }
    },
    template: `
      <VerticalNavHeader 
        v-bind="args"
        @nav-click="onNavClick"
      />
    `,
  }),
}

export const ExtendedMenu: Story = {
  args: {
    navItems: extendedNavItems,
  },
  render: (args) => ({
    components: { VerticalNavHeader },
    setup() {
      const onNavClick = (label: string) => {
        console.log(`Navigation clicked: ${label}`)
      }

      return { args, onNavClick }
    },
    template: `
      <VerticalNavHeader 
        v-bind="args"
        @nav-click="onNavClick"
      />
    `,
  }),
}
