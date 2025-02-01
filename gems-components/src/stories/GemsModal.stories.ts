import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import GemsModal from '../components/modal/GemsModal.vue'
import GemsButton from '../components/button/GemsButton.vue'
import ToggleDarkMode from '../components/switch/ToggleDarkMode.vue'

const meta = {
  title: 'Components/GemsModal',
  component: GemsModal,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Modal title',
    },
    confirmLabel: {
      control: 'text',
      description: 'Label for confirm button',
    },
    cancelLabel: {
      control: 'text',
      description: 'Label for cancel button',
    },
  },
} satisfies Meta<typeof GemsModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { GemsModal, GemsButton },
    setup() {
      const isOpen = ref(false)
      const openModal = () => {
        isOpen.value = true
      }

      return { isOpen, openModal }
    },
    template: `
      <div>
        <GemsButton label="Open Modal" @click="openModal" />
        
        <GemsModal
          v-model="isOpen"
          title="Sample Modal"
          confirm-label="Save"
          cancel-label="Cancel"
          @confirm="() => console.log('Confirmed')"
          @cancel="() => console.log('Cancelled')"
        >
          <p class="text-gray-600 dark:text-gray-300">
            This is a sample modal content. You can put any content here.
          </p>
        </GemsModal>
      </div>
    `,
  }),
}

export const WithForm: Story = {
  render: () => ({
    components: { GemsModal, GemsButton },
    setup() {
      const isOpen = ref(false)
      const formData = ref({
        name: '',
        email: '',
      })

      return {
        isOpen,
        formData,
        openModal: () => (isOpen.value = true),
      }
    },
    template: `
      <div>
        <GemsButton label="Open Form" @click="openModal" />
        
        <GemsModal
          v-model="isOpen"
          title="User Information"
          confirm-label="Submit"
          @confirm="() => console.log('Form submitted:', formData)"
        >
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                v-model="formData.name"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                v-model="formData.email"
                type="email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
              >
            </div>
          </form>
        </GemsModal>
      </div>
    `,
  }),
}

export const WithDarkMode: Story = {
  render: () => ({
    components: { GemsModal, GemsButton, ToggleDarkMode },
    setup() {
      const isOpen = ref(false)

      return {
        isOpen,
        openModal: () => (isOpen.value = true),
      }
    },
    template: `
      <div class="space-y-4">
        <div class="flex justify-end">
          <ToggleDarkMode />
        </div>
        
        <GemsButton label="Open Dark Modal" @click="openModal" />
        
        <GemsModal
          v-model="isOpen"
          title="Dark Mode Modal"
          confirm-label="Proceed"
          cancel-label="Go Back"
        >
          <p class="text-gray-600 dark:text-gray-300">
            This modal supports dark mode and maintains consistent styling.
          </p>
        </GemsModal>
      </div>
    `,
  }),
}
