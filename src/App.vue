<script setup lang="ts">
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue'

import { useCoreStore } from '~/stores/core'

const { getAppConfig, config } = useCoreStore();

onMounted(async() => {
  if (!Object.keys(config).length)
    await getAppConfig()
})

</script>

<template>
  <NavBar />
  <router-view v-slot="{ Component, route }">
    <suspense>
      <template #default>
        <component :is="Component" :key="route.fullPath" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>
  </router-view>
</template>
