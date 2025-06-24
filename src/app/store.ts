import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todoSlice";
import { Todo } from "../features/todos/types";

const isClient = typeof window !== "undefined"; // проверка, что код выполняется в браузере, а не на сервере vercel

const savedTodoList: Todo[] = isClient
  ? JSON.parse(localStorage.getItem("todoList") || "[]")
  : [];

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: {
    todos: {
      todos: savedTodoList,
    },
  },
});

if (isClient) {
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("todoList", JSON.stringify(state.todos.todos));
  });
}

// returntype - встроенный дженерик (тип тайпскрипта),
// получает тип возвращаемого значения функции

// typeof store.getState - тип фун-ии getState(возвращает все состояние приложения)

export type RootState = ReturnType<typeof store.getState>; // тип всего хранилища redux
export type AppDispatch = typeof store.dispatch;
