import useTodosStore from "../../store/TodosStore";

// import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdOutlineDelete } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";



export const Todo = ({ id, todo, addedOn, isCompleted }) => {
    const { deleteTodo, checkTodo, openModal } = useTodosStore((state) => ({
        deleteTodo: state.deleteTodo,
        checkTodo: state.checkTodo,
        openModal: state.openModal,
    }));

    const handleClick = () => openModal(id);


    return (
        <div
            className="todo flex flex-col justify-between text-slate-800 px-4 py-3.5 bg-slate-50/40 backdrop-blur-lg border-2 border-slate-100/40 rounded-lg
            todo-enter duration-200 ease-linear"
        >
            <div className="flex justify-between items-center mb-0.5">
                <div className="flex items-center gap-1">
                    <LuCalendarDays className="text-lg" />
                    <p className="text-[0.93rem] mt-0.5">{addedOn}</p>
                </div>
                <input
                    className="mb-[0.1rem]"
                    type="checkbox"
                    id={id}
                    checked={isCompleted}
                    onChange={(e) => checkTodo(e.target.id)}
                />
            </div>
            <p
                onClick={handleClick}
                className="text-[1.05rem] font-medium my-4 line-clamp-4 cursor-pointer"
            >
                {todo}
            </p>
            <div className="flex justify-between items-center mt-1.5">
                <p
                    className={`text-[0.88rem] font-medium px-3.5 py-2.5 tracking-wider rounded-lg  ${isCompleted ? "bg-emerald-400 text-slate-50" : "bg-slate-50/[52.5%] ring-1 ring-slate-800/[7%]"} duration-200 ease-linear`}
                >
                    {isCompleted ? "Completed" : "inComplete"}
                </p>
                <button onClick={() => {
                    deleteTodo(id);
                    // document.querySelector(".todo").classList.add("todo-exit")
                }}>
                    <MdOutlineDelete
                        className="text-[1.5rem] text-red-400 hover:text-red-500 hover:scale-105 duration-200 ease-linear"
                    />
                </button>
            </div>
        </div>
    );
};




