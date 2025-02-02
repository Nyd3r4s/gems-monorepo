<script setup lang="ts">
import { ref } from 'vue'
import CreateListingBtn from '@/components/CreateListingBtn.vue'

const title = ref('Welcome to Gems')
const description = ref('This is the home page of our application.')
</script>

<template>
  <main class="p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">{{ title }}</h1>
    </div>

    <p class="mb-6">{{ description }}</p>

    <CreateListingBtn class="mt-8" />
  </main>
</template>
