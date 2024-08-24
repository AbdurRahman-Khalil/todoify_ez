// import { useEffect } from "react";

import useTodosStore from "../../store/TodosStore";

import { MdOutlineDelete } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";



export const TodoModal = () => {
    const { todos, checkTodo, deleteTodo, todoId, isModalOpen, closeModal } = useTodosStore((state) => ({
        todos: state.todos,
        checkTodo: state.checkTodo,
        deleteTodo: state.deleteTodo,
        todoId: state.todoId,
        isModalOpen: state.isModalOpen,
        closeModal: state.closeModal,
    }));


    if (!isModalOpen || !todoId) return null;

    const handleClickOutside = (e) => {
        if (e.target.id === 'overlay') {
            closeModal();
        }
    };


    const openedTodo = todos.find((t) => t.id === todoId);


    return (
        <div
            id="overlay"
            onClick={handleClickOutside}
            className="fixed inset-0 z-30 bg-slate-800/10 backdrop-blur-lg flex items-center justify-center"
        >
            <div
                className="relative max-w-[40rem] flex flex-col justify-between px-[1.2rem] py-[1.155rem] mx-8 text-slate-700 bg-slate-50/90 backdrop-blur-lg border border-slate-800/10 rounded-lg 
                todo-enter duration-200 ease-linear"
            >
                {/* <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 mt-4 p-2 bg-blue-500 text-white rounded"
                >
                    <IoClose />
                </button> */}
                <div className="flex justify-between items-center mb-0.5">
                    <div className="flex items-center gap-1 text-slate-800">
                        <LuCalendarDays className="text-lg" />
                        <p className="text-[0.93rem] mt-0.5">{openedTodo.addedOn}</p>
                    </div>
                    <input
                        className="mb-[0.1rem]"
                        type="checkbox"
                        id={openedTodo.id}
                        checked={openedTodo.isCompleted}
                        onChange={() => checkTodo(openedTodo.id)}
                    />
                </div>
                <p className="text-[1.05rem] font-medium my-4">
                    {openedTodo.todo}
                </p>
                <div className="flex justify-between items-center mt-1.5">
                    <p
                        className={`text-[0.88rem] font-medium px-3.5 py-2.5 tracking-wider rounded-lg ${openedTodo.isCompleted ? "bg-emerald-400 text-slate-50" : "bg-slate-50/[83%] ring-1 ring-slate-800/10"} duration-200 ease-linear`}
                    >
                        {openedTodo.isCompleted ? "Completed" : "inComplete"}
                    </p>
                    <button onClick={() => {
                        deleteTodo(openedTodo.id);
                        closeModal();
                    }}>
                        <MdOutlineDelete 
                            className="text-[1.5rem] text-red-400 hover:text-red-500 hover:scale-105 duration-200 ease-linear"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};






















// useEffect(() => {
//     if (isModalOpen) {
//         document.body.classList.add("hidden");
//     } else {
//         document.body.classList.remove("hidden");
//     }

//     // Cleanup when the component is unmounted
//     return () => {
//         document.body.classList.remove("hidden");
//     };
// }, [isModalOpen]);