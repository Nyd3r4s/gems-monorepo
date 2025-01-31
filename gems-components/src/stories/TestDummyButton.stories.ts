import type { Meta, StoryObj } from '@storybook/vue3'
import TestDummyBtn from '../components/TestDummyBtn.vue'

// Meta information for the component
const meta = {
    title: 'Components/TestDummyButton',
    component: TestDummyBtn,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger'],
            description: 'The style variant of the button'
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'The size of the button'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled'
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply'
        },
        onClick: {
            action: 'clicked',
            description: 'Click event handler'
        }
    }
} satisfies Meta<typeof TestDummyBtn>

export default meta
type Story = StoryObj<typeof meta>

// Base story
export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        disabled: false,
        default: 'Primary Button'
    }
}

// Variant stories
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        default: 'Secondary Button'
    }
}

export const Danger: Story = {
    args: {
        variant: 'danger',
        default: 'Danger Button'
    }
}

// Size stories
export const Small: Story = {
    args: {
        size: 'sm',
        default: 'Small Button'
    }
}

export const Large: Story = {
    args: {
        size: 'lg',
        default: 'Large Button'
    }
}

// State stories
export const Disabled: Story = {
    args: {
        disabled: true,
        default: 'Disabled Button'
    }
}

// Icon stories
export const WithLeftIcon: Story = {
    args: {
        default: 'Button with Left Icon'
    },
    render: (args) => ({
        components: { TestDummyBtn },
        setup() {
            return { args }
        },
        template: `
      <TestDummyBtn v-bind="args">
        <template #icon-left>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
          </svg>
        </template>
        {{ args.default }}
      </TestDummyBtn>
    `
    })
}

export const WithRightIcon: Story = {
    args: {
        variant: 'secondary',
        default: 'Button with Right Icon'
    },
    render: (args) => ({
        components: { TestDummyBtn },
        setup() {
            return { args }
        },
        template: `
      <TestDummyBtn v-bind="args">
        {{ args.default }}
        <template #icon-right>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </template>
      </TestDummyBtn>
    `
    })
}

// Interactive story with click handler
export const Clickable: Story = {
    args: {
        default: 'Click Me!'
    },
    render: (args) => ({
        components: { TestDummyBtn },
        setup() {
            return { args }
        },
        template: `
      <TestDummyBtn v-bind="args" @click="onClick">
        {{ args.default }}
      </TestDummyBtn>
    `,
        methods: {
            onClick() {
                console.log('Button clicked!')
            }
        }
    })
} 