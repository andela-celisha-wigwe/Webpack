import React from 'react';

import Todo from "../components/layout/Todo";
import TodoStore from '../stores/TodoStore';

export default class Todos extends React.Component {
    constructor() {
        super()
        const store = new TodoStore;
        this.state = {
        	todos: store.getAll(),
        };
    }
    
    render() {
    	const {todos} = this.state;

    	const TodoComponents = todos.map((todo) => {
    		return <Todo key={todo.id} {...todo} />;
    	});

        return (
	        <div>
	        	<h1>Todos</h1>	
	        	<ul>{TodoComponents}</ul>
	        </div>
        )
    }
}
