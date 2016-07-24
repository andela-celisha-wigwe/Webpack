import { EventEmitter } from "events";

import React from 'react';

import dispatcher from "../dispatcher";

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

	handleAction(action) {
		switch (action.type) {
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}
		}
	}
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleAction.bind(todoStore));

window.dispatcher = dispatcher;

export default todoStore;
