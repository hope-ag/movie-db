<script
  setup
  lang="ts">
import { searchMovies } from '~/services/http-service'

const { isFetching } = await searchMovies('batman', 'movie', {});
</script>

<template>
  <div>Home</div>
  <suspense>
    <p>Loading: {{ isFetching }}</p>
  </suspense>
</template>
