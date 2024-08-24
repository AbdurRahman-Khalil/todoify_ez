import useTodosStore from "../../store/TodosStore";

import { Todo } from "./Todo";
import { TodoModal } from "./TodoModal";

import { BsFiles } from "react-icons/bs";



export const Todos = () => {
    const { filteredTodos } = useTodosStore((state) => ({
        filteredTodos: state.filteredTodos
    }));


    return (
        <>
            <section className={`mb-7 duration-200 ease-linear ${filteredTodos.length === 0 ? 
                "flex justify-center items-center" : 
                "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"}
            `}>
                {filteredTodos.length === 0 ? (
                    <div
                        className="min-h-48 flex flex-col justify-center items-center gap-5 text-slate-50/60">
                        <BsFiles className="text-[2.5rem]" />
                        <p className="text-xl font-medium tracking-wide">No Todos to Display</p>
                    </div>
                ) : (filteredTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        todo={todo.todo}
                        addedOn={todo.addedOn}
                        isCompleted={todo.isCompleted}
                    />
                )))
                }
            </section>
            <TodoModal />
        </>
    );
};
