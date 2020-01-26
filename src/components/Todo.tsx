import React from "react";
interface Props {
    onClick: () => '',
    completed: boolean,
    text: String
}
const Todo: React.FC<Props> = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={ {
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

export default Todo;