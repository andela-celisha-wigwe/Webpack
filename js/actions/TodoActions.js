import dispatcher from "../dispatcher";

export function createTodo(text) {
    console.log(text);
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos() {
    dispatcher.dispatch({
        type: "FETCH_TODOS"
    })

    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS", todos: [
                {
                    id: 888888,
                    text: "Go shopping agagin",
                    complete: false
                },
                {
                    id: 987967,
                    text: "Hug your wife",
                    complete: true
                }
            ]
        });
    }, 2000)
}