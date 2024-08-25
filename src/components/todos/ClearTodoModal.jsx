import { useEffect } from "react"

import useTodosStore from "../store/TodosStore";


export const ClearTodosModal = () => {
    const { deleteTodo, todoId, isClearTodosModalOpen, closeClearTodosModalOpen } = useTodosStore((state) => ({
        deleteTodo: state.deleteTodo,
        todoId: state.todoId,
        isClearTodosModalOpen: state.isClearTodosModalOpen,
        closeClearTodosModalOpen: state.closeClearTodosModalOpen
    }));


    useEffect(() => {
        if (isClearTodosModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isClearTodosModalOpen]);


    if (!isClearTodosModalOpen || !todoId) return null;


    const handleClickOutside = (e) => {
        if (e.target.id === 'overlay') {
            closeClearTodosModalOpen();
        }
    };


    return (
        <div
            id="overlay"
            onClick={handleClickOutside}
            className="fixed inset-0 z-30 bg-slate-800/10 backdrop-blur-lg flex items-center justify-center todo-modal duration-200 ease-linear"
        >
            <div
                className="relative max-w-[40rem] flex flex-col justify-between px-[1.2rem] py-[1.155rem] mx-8 text-slate-700 bg-slate-50/90 backdrop-blur-lg border border-slate-800/10 rounded-lg 
            todo-enter duration-200 ease-linear"
            >
                <p className="text-xl font-semibold dark:font-medium tracking-wide leading-8"
                >Are you sure want to delete this Book?</p>
                <div className="space-x-5 max-[349px]:space-x-0 max-[349px]:space-y-5">
                    <button onClick={closeClearTodosModalOpen}>
                        Cancel
                    </button>
                    <button
                        className="px-5 py-[0.825rem] bg-red-400 tracking-wide rounded-lg font-semibold dark:font-bold text-slate-100 dark:text-slate-800
                                max-[349px]:w-full"
                        onClick={() => {
                            deleteTodo(todoId);
                            closeClearTodosModalOpen();
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
