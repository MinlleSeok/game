import React from "react";
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
// import VisibleTodoList from "./VisibleTodoList"
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from "../store/modules/todo";
import { connect } from "react-redux";

const TApp = ({ dispatch, visibleTodos, visibilityFilter }) => (
    <div>
        <AddTodo
            onAddClick={text => dispatch(addTodo(text))} />
        <TodoList
            todos={visibleTodos}
            onTodoClick={index => dispatch(completeTodo(index))} />
        <Footer
            filter={visibilityFilter}
            onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))} />
    </div>
)

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return;
    }
}


function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}
export default connect(select)(TApp)