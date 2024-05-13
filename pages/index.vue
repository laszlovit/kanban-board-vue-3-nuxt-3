<script setup>
import { useBoardStore } from '../stores/boardStore';

const boardStore = useBoardStore();
</script>

<template>
  <main>
    <div>Build a trello clone home page</div>
    <pre>{{ boardStore.board }}</pre>
  </main>
</template>
