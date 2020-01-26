import React from "react";
import Todo from "./Todo";

interface Props {
    todos: [],
    onTodoClick: (a: String | Number) => ''
}

const TodoList: React.FC<Props> = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
    </ul>
)

export default TodoList;