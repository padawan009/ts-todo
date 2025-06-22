import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todoSlice"

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
})


// returntype - встроенный дженерик (тип тайпскрипта), 
// получает тип возвращаемого значения функции

// typeof store.getState - тип фун-ии getState(возвращает все состояние приложения)

export type RootState = ReturnType<typeof store.getState> // тип всего хранилища redux
export type AppDispatch = typeof store.dispatch  