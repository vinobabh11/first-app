import React from 'react'
import { TodoItem } from "./TodoItem";

export default function Todos(props) {
    const myStyle = {
        minHeight: "70vh",
        margin: "10px auto"
    }
    return (
        <div className = "container" style = {myStyle}>
            <h3 className= "my-3">List of Todos</h3>
            {props.todos.length===0? "No Todo to display" : props.todos.map((todos) => {
                return (<TodoItem todo = {todos} key={todos.sno} onDelete = {props.onDelete}/>)
            })}
        </div>
    )
}
