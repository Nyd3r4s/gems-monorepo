<script setup lang="ts">
import TestDummyBtn from './components/TestDummyBtn.vue'

const handleClick = () => {
  alert('Button clicked!')
}
</script>
<template>
  <div class="p-8 space-y-4">
    <!-- Basic buttons -->
    <div class="space-x-4">
      <TestDummyBtn>Default Btn</TestDummyBtn>
      <TestDummyBtn variant="secondary">Secondary Btn</TestDummyBtn>
      <TestDummyBtn variant="danger">Danger Btn</TestDummyBtn>
    </div>

    <!-- Different sizes -->
    <div class="space-x-4">
      <TestDummyBtn size="sm">Small Btn</TestDummyBtn>
      <TestDummyBtn size="md">Medium Btn</TestDummyBtn>
      <TestDummyBtn size="lg">Large Btn</TestDummyBtn>
    </div>

    <!-- With icons -->
    <div class="space-x-4">
      <TestDummyBtn>
        <template #icon-left>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
        Btn with Left Icon
      </TestDummyBtn>

      <TestDummyBtn variant="secondary">
        Btn with Right Icon
        <template #icon-right>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
      </TestDummyBtn>
    </div>

    <!-- Disabled state -->
    <div class="space-x-4">
      <TestDummyBtn disabled>Disabled Btn</TestDummyBtn>
      <TestDummyBtn variant="secondary" disabled>Disabled Secondary</TestDummyBtn>
    </div>

    <!-- With click handler -->
    <div class="space-x-4">
      <TestDummyBtn @click="handleClick">Click Me!</TestDummyBtn>
    </div>
  </div>
</template>
