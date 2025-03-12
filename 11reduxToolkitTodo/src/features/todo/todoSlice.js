import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}
function sayHello() {
    console.log("hello");

}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        sayHello: sayHello,
        addTodo: (state, action) => { //state->state value,action-> whatever passed in the func as prop
            const todo = { //todo come from prop of function and a todo object is created
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)//todo object is pushed and state is updated
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        updateTodo: (state, action) => {
            state.todos.map((todo) => (todo.id == action.payload ? action.payload : state.todos))
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer