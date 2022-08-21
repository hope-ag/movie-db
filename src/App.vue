<script setup lang="ts">
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue'
const route = useRoute()
</script>

<template>
  <NavBar />
  <router-view v-slot="{ Component }" :key="route.path">
    <suspense>
      <template #default>
        <component :is="Component" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>
  </router-view>
</template>
