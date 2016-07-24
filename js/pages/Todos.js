import React from 'react';

import Todo from "../components/layout/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from '../stores/TodoStore';

export default class Todos extends React.Component {
    constructor() {
        super(); 
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll(),
            todo: "",
        };
    }

    componentWillMount() {
        TodoStore.on("change", this.getTodos);
    }

    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos);
    }

    getTodos() {
        this.setState({
            todos: TodoStore.getAll(),
        });
    }

	reloadTodos() {
        TodoActions.reloadTodos(); 
	}

    handleChange(e) {
        this.setState({
            todo: e.target.value
        })
    }
    
    render() {
    	const {todos} = this.state;

    	const TodoComponents = todos.map((todo) => {
    		return <Todo key={todo.id} {...todo} />;
    	});

        return (
	        <div>
                <form>
                    <button onClick={this.reloadTodos.bind(this)}>Reload</button>
                    <input type="text" value="" onBlur={this.handleChange.bind(this)} />
                </form>
	        	<h1>Todos</h1>	
	        	<ul>{TodoComponents}</ul>
	        </div>
        )
    }
}