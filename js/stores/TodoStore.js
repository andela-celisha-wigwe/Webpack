import { EventEmitter } from "events";

import React from 'react';

class TodoStore extends EventEmitter {
	constructor() {
		super()
		this.todos = [
    		{
    			id: 876876,
    			text: "Go shopping",
    			complete: false
    		},
    		{
    			id: 988765,
    			text: "Pay water bil",
    			complete: false
    		}
    	];
	}

	createTodo(text) {
		const id = Date.now();
		this.todos.push({
			id,
			text,
			complete: false,
		});
		this.emit("change");
	}

	getAll() {
		return this.todos;
	}
}

const todoStore = new TodoStore;

window.todoStore = todoStore;

export default todoStore;
