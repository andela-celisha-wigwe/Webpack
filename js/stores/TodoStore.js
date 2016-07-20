import { EventEmitter } from "events";

import React from 'react';

export default class TodoStore extends EventEmitter {
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
    			text: "Go ways",
    			complete: false
    		}
    	];
	}

	getAll() {
		return this.todos;
	}
}
