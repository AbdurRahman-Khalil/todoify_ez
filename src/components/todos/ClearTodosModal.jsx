import { useEffect } from "react"

import useTodosStore from "../../store/TodosStore";


export const ClearTodosModal = () => {
    const { deleteCompletedTodos, isClearTodosModalOpen, closeClearTodosModalOpen } = useTodosStore((state) => ({
        deleteCompletedTodos: state.deleteCompletedTodos,
        isClearTodosModalOpen: state.isClearTodosModalOpen,
        closeClearTodosModalOpen: state.closeClearTodosModalOpen,
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


    if (!isClearTodosModalOpen) return null;

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
                className="relative mx-8 p-[1.85rem] max-w-[28rem] space-y-7 text-slate-700 bg-slate-50/85 backdrop-blur-lg border border-slate-800/20 rounded-xl
                todo-enter duration-200 ease-linear"
            >
                <p className="text-xl text-center font-semibold tracking-wide leading-8"
                >Are you sure want to delete Completed Todos?</p>
                <div className="flex gap-4 justify-center">
                    <button
                        className="text-slate-50 hover:text-slate-700 font-medium hover:font-semibold tracking-wider flex-1 px-5 py-3 bg-slate-700 hover:bg-transparent border-2 border-slate-700 rounded-xl duration-200 ease-linear"
                        onClick={() => closeClearTodosModalOpen()}
                    >
                        Cancel
                    </button>
                    <button
                        className="text-slate-50 font-medium tracking-wider flex-1 px-5 py-[0.9rem] bg-red-500/90 hover:bg-red-400 rounded-xl duration-200 ease-linear"
                        onClick={() => {
                            deleteCompletedTodos();
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
