import useTodosStore from "../../store/TodosStore";


export const ClearBtn = () => {
    const { openClearTodosModalOpen } = useTodosStore((state) => ({
        openClearTodosModalOpen: state.openClearTodosModalOpen,
    }));


    return (
        <button
            onClick={() => openClearTodosModalOpen()}
            className="text-[0.9rem] text-red-700/80 font-semibold tracking-wide bg-red-200/80 hover:bg-red-300/80 px-3.5 py-3 rounded-lg duration-200 ease-linear">
            Clear Completed
        </button>
    );
};
