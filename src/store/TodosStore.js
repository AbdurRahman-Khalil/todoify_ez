import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";


const TodosStore = (set) => ({
    todo: "",
    todos: [],
    filteredTodos: [],
    tab: "All",

    searchQuery: "",

    todoId: null,
    isModalOpen: false,

    isClearTodosModalOpen: false,


    // Actions
    setTodo: (todo) => {
        set(() => (
            { todo: todo }
        ));
    },

    addTodo: (todo) => {
        set((state) => ({
            todos: [todo, ...state.todos]
        }));
    },

    deleteTodo: (todoId) => {
        set((state) => ({
            todos: state.todos.filter(t => t.id !== todoId)
        }));
    },

    checkTodo: (id) => {
        set((state) => {
            const newTodos = state.todos.map(todo =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            );
            return { todos: newTodos };
        });
    },

    deleteCompletedTodos: () => {
        set((state) => ({
            todos: state.todos.filter(t => !t.isCompleted)
        }));
    },

    handleFilteredTodos: () => {
        set((state) => {
            switch (state.tab) {
            case "All":
                return { filteredTodos: state.todos };
        
            case "Completed":
                return { filteredTodos: state.todos.filter((item) => item.isCompleted) };

            case "inComplete":
                return { filteredTodos: state.todos.filter((item) => !item.isCompleted) };

            default:
                return { filteredTodos: state.todos };
            }
        });
    },

    setTab: (tab) => {
        set(() => (
            { tab: tab }
        ));
    },

    updateSearchQuery: (searchQuery) => {
        set(() => (
            { searchQuery: searchQuery }
        ));
    },

    openModal: (id) => {
        set(() => (
            { todoId: id, isModalOpen: true }
        ));
    },

    closeModal: () => {
        set(() => (
            { todoId: null, isModalOpen: false }
        ));
    },

    openClearTodosModalOpen: () => {
        set(() => (
            { isClearTodosModalOpen: true }
        ));
    },

    closeClearTodosModalOpen: () => {
        set(() => (
            { isClearTodosModalOpen: false }
        ));
    },

});

const useTodosStore = create(
    devtools(
        persist(TodosStore, {
            name: "todos"
        })
    )
);


export default useTodosStore;


