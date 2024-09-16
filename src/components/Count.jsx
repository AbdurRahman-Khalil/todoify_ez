import useTodosStore from "../store/TodosStore";


export const Count = () => {
    const { todos} = useTodosStore((state) => ({
        todos: state.todos,
    }));


    const all = todos.length;
    const completed = todos.filter((item) => item.isCompleted).length;
    const inCompleted = todos.filter((item) => !item.isCompleted).length;


    return (
        <div className="flex items-center gap-4 font-medium text-[0.95rem] duration-300 ease-in-out">
            <p>All: <span className="font-semibold duration-300 ease-in-out">{all}</span></p>
            <p>Completed: <span className="font-semibold duration-300 ease-in-out">{completed}</span></p>
            <p>inCompleted: <span className="font-semibold duration-300 ease-in-out">{inCompleted}</span></p>
        </div>
    );
};