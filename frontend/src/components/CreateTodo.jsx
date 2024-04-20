import { useState } from "react"

export const CreateTodo = ({ onAddTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddingTodo = () => {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            onAddTodo();
        });
    };

    return <div>
        <input type="text" placeholder="title" onChange={(e) => {
            setTitle(e.target.value);
        }} /> <br />

        <input type="text" placeholder="description" onChange={(e) => {
            setDescription(e.target.value);
        }} /> <br />

        <button onClick={ handleAddingTodo }> Add todo </button>
    </div>
}
