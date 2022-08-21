<script setup lang="ts">
import { useRouter } from 'vue-router'
import { isDark, toggleDark } from '~/composables'
const router = useRouter()
const goHome = () => router.push('/')
</script>

<template>
  <nav class="bg-white dark:bg-slate-600/60 py-2">
    <div class="container flex justify-between mx-auto">
      <h5
        class="text-indigo-600 dark:text-indigo-400 fw-bold flex items-center gap-1 select-none cursor-pointer text-lg"
        @click="goHome"
      >
        <i i-ion-cog /> CFG
      </h5>
      <ul class="flex items-center gap-2 sm:gap-3 md:gap-4 font-[300]">
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/welcome">
            welcome
          </router-link>
        </li>
      </ul>
      <button
        class="h-8 w-8 bg-gray-500/20 rounded-full flex items-center justify-center"
        @click="toggleDark()"
      >
        <i v-if="isDark" i-carbon-sun />
        <i v-else i-carbon-moon />
      </button>
    </div>
  </nav>
</template>
