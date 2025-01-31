<script setup lang="ts">
import { TestDummyBtn, ToggleDarkMode } from '@gems-components/src'

const handleClick = () => {
  alert('Button clicked from MFE!')
}
</script>

<template>
  <div class="p-8">
    <ToggleDarkMode />
    <RouterView />

    <!-- Testing TestDummyBtn from gems-components -->
    <div class="mt-4 space-y-4">
      <TestDummyBtn @click="handleClick">Click me from MFE!</TestDummyBtn>
    </div>
  </div>
</template>
