import { useEffect } from "react";

import useTodosStore from "../../store/TodosStore";


export const MenuItem = ({ tabName }) => {
    const { todos, tab, setTab, handleFilteredTodos } = useTodosStore((state) => ({
        todos: state.todos,
        tab: state.tab,
        setTab: state.setTab,
        handleFilteredTodos: state.handleFilteredTodos,
    }));

    useEffect(() => {
        handleFilteredTodos();

        console.log("calling...");
    }, [todos, tab])

    return (
        <li
            id={tabName}
            className={`relative text-[1.1rem] font-semibold tracking-wide duration-200 ease-linear before:opacity-0
                ${tab === tabName ? 
                    "text-sky-600 before:absolute before:-bottom-0.5 before:left-0 before:w-full before:h-[0.2rem] before:rounded-full before:bg-sky-600 sm:before:opacity-100 before:duration-200 before:ease-linear" : 
                    "text-sky-900"}
            `}
            role="button"
            onClick={(e) => setTab(e.target.id)}
        >
            {tabName}
        </li>
    );
};
