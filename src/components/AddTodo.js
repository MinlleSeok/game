import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/modules/todo"

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
                >
                    <input
                        ref={node => {
                            input = node
                        }}
                    />
                    <button type="submit">
                        할일 추가
                    </button>
                </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo