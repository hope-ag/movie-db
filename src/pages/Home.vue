<script
  setup
  lang="ts">
import { searchMovies } from '~/services/httpService';

const { isLoading } = await searchMovies('batman', 'movie', {});
</script>

<template>
  <div>Home</div>
  <suspense>
    <p>Loading: {{ isLoading }}</p>
  </suspense>
</template>
