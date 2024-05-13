<script setup>
import { useBoardStore } from '../stores/boardStore';

defineProps({
  column: {
    type: Object,
    required: true,
  },
  columnIndex: {
    type: Number,
    required: true,
  },
});

const boardStore = useBoardStore();

const editNameState = ref(false);

function deleteColumn(columnIndex) {
  boardStore.deleteColumn(columnIndex);
}
</script>

<template>
  <UContainer class="column">
    <div class="column-header mb-4">
      <div>
        <UInput v-if="editNameState" type="text" v-model="column.name">
        </UInput>
        <h2 v-else>{{ column.name }}</h2>
      </div>
      <div>
        <UButton
          class="mr-2"
          @click="editNameState = !editNameState"
          icon="i-heroicons-pencil-square"
        />
        <UButton
          icon="i-heroicons-trash"
          @click="deleteColumn(columnIndex)"
          color="red"
        />
      </div>
    </div>
    <ul>
      <li v-for="task in column.tasks" :key="task.id">
        <UCard class="mb-4">
          <strong> {{ task.name }}</strong>
          <p>{{ task.description }}</p>
        </UCard>
      </li>
    </ul>
  </UContainer>
</template>
