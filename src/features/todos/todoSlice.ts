import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./types";
import { v4 as uuid } from 'uuid';

interface TodosState {
    todos: Todo[]
}

const initialState: TodosState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.todos.push({
                id: uuid(),
                text: action.payload,
                completed: false,
            })
        },
        toggleTodo(state, action: PayloadAction<string>){
            const todo = state.todos.find((t) => t.id === action.payload)
            if (todo) todo.completed = !todo.completed
        },
        deleteTodo(state, action: PayloadAction<string>){
            const updatedTodos = state.todos.filter(t => t.id !== action.payload)
            state.todos = updatedTodos
        }
    }
})

// PayloadAction - обобщенный, встроенный дженерик. для описания actions
// создается автоматически при исп-ии createSlice, 
// позволяет точно указать какой тип данных передается в payload при вызове экшенов


export const {addTodo, toggleTodo, deleteTodo} = todosSlice.actions
export default todosSlice.reducer

