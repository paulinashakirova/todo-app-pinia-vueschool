<script setup>
import { ref } from 'vue';
import { useToDoListStore } from '../stores/useToDoListStore';

const toDo = ref('');

const store = useToDoListStore();

function addItemAndClear(item) {
	if (item.length === 0) return;
	store.addToDo(item);
	toDo.value = '';
}
</script>

<template>
	<div>
		<form @submit.prevent="addItemAndClear(toDo)">
			<input v-model="toDo" type="text" /><button>Add</button>
		</form>
	</div>
</template>

<style scoped></style>
