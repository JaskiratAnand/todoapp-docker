

export const Todos = ({ todos, onCompleteTodo }) => {

    const completeTodo = (_id) => {
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({
                id: _id,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            onCompleteTodo();
        });
    }

    const deleteTodo = (_id) => {
        fetch("http://localhost:3000/delete", {
            method: "DELETE",
            body: JSON.stringify({
                id: _id,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            onCompleteTodo();
        });
    }

    return <div>
        {todos.map((todo) => {
            return <div key={todo._id} >
                <h2>{todo.title}</h2>
                <h4>{todo.description}</h4>
                <button onClick={() => { completeTodo(todo._id) }}>
                    {todo.completed== true? "Completed": "Mark as Complete"}
                </button>
                <button onClick={() => { deleteTodo(todo._id) }}>Delete</button>
            </div>
            })
        }
    </div> 
} 