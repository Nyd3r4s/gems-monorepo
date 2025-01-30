<script setup lang="ts">
import { TestDummyBtn } from '@gems-components/src'

const handleClick = () => {
  alert('Button clicked from MFE!')
}
</script>

<template>
  <div class="p-8">
    <RouterView />

    <!-- Testing TestDummyBtn from gems-components -->
    <div class="mt-4 space-y-4">
      <TestDummyBtn @click="handleClick">Click me from MFE!</TestDummyBtn>

      <TestDummyBtn variant="secondary"> Secondary Button </TestDummyBtn>

      <TestDummyBtn variant="danger" size="lg"> Danger Large Button </TestDummyBtn>
    </div>
  </div>
</template>
