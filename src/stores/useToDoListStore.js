import { defineStore } from 'pinia';

export const useToDoListStore = defineStore('toDoList', {
	state: () => ({
		toDoList: [],
		id: 0
	}),
	actions: {
		addToDo(item) {
			this.toDoList.push({ item, id: this.id++, completed: false });
		},
		deleteToDo(itemId) {
			this.toDoList = this.toDoList.filter((object) => {
				return object.id !== itemId;
			});
		},
		toggleCompleted(idToFind) {
			console.log('i am inside store toggle completed');
			const toDo = this.toDoList.find((obj) => obj.id === idToFind); //returns one specific object in the whole array of todos
			if (toDo) {
				toDo.completed = !toDo.completed;
			}
		}
	}
});
