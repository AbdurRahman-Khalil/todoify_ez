import useTodosStore from "../../store/TodosStore";

import { Todo } from "./Todo";
import { TodoModal } from "./TodoModal";


export const Todos = () => {
    const { filteredTodos } = useTodosStore((state) => ({
        filteredTodos: state.filteredTodos
    }));


    return (
        <>
            <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-7 duration-200 ease-linear">
                {
                    filteredTodos.map(todo => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            todo={todo.todo}
                            addedOn={todo.addedOn}
                            isCompleted={todo.isCompleted}
                        />
                    ))
                }
            </section>
            <TodoModal />
        </>
    );
};
