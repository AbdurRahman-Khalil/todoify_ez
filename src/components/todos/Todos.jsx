import useTodosStore from "../../store/TodosStore";

import { Todo } from "./Todo";
import { TodoModal } from "./TodoModal";
import { ClearTodosModal } from "./ClearTodosModal";

import { BsFiles } from "react-icons/bs";


export const Todos = () => {
    const { filteredTodos, searchQuery } = useTodosStore((state) => ({
        filteredTodos: state.filteredTodos,
        searchQuery: state.searchQuery,
    }));


    return (
        <>
            <ul className={`mb-8 duration-200 ease-linear list-none ${filteredTodos.length === 0 ?
                "flex justify-center items-center" :
                "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"}
            `}>
                {filteredTodos.length === 0 ? (
                    <div
                        className="min-h-48 flex flex-col justify-center items-center gap-5 text-slate-50/60">
                        <BsFiles className="text-[2.5rem]" />
                        <p className="text-xl font-medium tracking-wide">No Todos to Display</p>
                    </div>
                ) : (
                    filteredTodos.filter(todo => {
                        const lowercasedQuery = searchQuery.trim().toLowerCase();

                        return lowercasedQuery === ""
                            ?
                            todo
                            :
                            todo.todo.toLowerCase().includes(lowercasedQuery) ||
                            todo.addedOn.toLowerCase().includes(lowercasedQuery)
                    }).map((todo, ind) => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            index={ind}
                            todo={todo.todo}
                            addedOn={todo.addedOn}
                            isCompleted={todo.isCompleted}
                        />
                    )))
                }
            </ul>
            <TodoModal />
            <ClearTodosModal />
        </>
    );
};
