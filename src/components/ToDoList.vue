<script setup>
import { useToDoListStore } from '../stores/useToDoListStore';
import { storeToRefs } from 'pinia';

const store = useToDoListStore();

const { toDoList } = storeToRefs(store); //this helper method ensures that each of the properties we import from the store stays reactive
const { toggleCompleted, deleteToDo } = store;
</script>

<template>
	<div v-for="toDo in toDoList" :key="toDo.id">
		<div>
			<span :class="{ completed: toDo.completed }">{{ toDo.item }}</span>
			<span @click.stop="toggleCompleted(toDo.id)">&#10004;</span> //why do I use stop here and not in the following one?
			<span @click="deleteToDo(toDo.id)">&#10060</span>
		</div>
	</div>
</template>

<style scoped>
.completed {
	text-decoration: line-through;
}
</style>
