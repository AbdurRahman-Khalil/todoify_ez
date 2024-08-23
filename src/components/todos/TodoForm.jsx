import { v4 as uuidv4 } from 'uuid';

import useTodosStore from "../../store/TodosStore";

// import { IoIosAdd } from "react-icons/io";
import { HiPlus } from "react-icons/hi";



export const TodoForm = () => {
    const { todo, setTodo, addTodo } = useTodosStore((state) => ({
        todo: state.todo,
        setTodo: state.setTodo,
        addTodo: state.addTodo,
    }));


    const handleAdd = (e) => {
        e.preventDefault();

        let months = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ];

        const currentDate = new Date(Date.now());
        const date = currentDate.getDate();
        const month = months[currentDate.getMonth()];
        const year = currentDate.getFullYear();


        const newTodo = {
            id: uuidv4(),
            todo: todo.trim(),
            addedOn: `${month} ${date}, ${year}`,
            isCompleted: false,
        }

        if (todo.trim() === "") {
            return alert("Please write something...");
        }

        addTodo(newTodo)
        
        setTodo("");
    }


    return (
        <form onSubmit={handleAdd} className="max-w-full md:max-w-[36rem] text-slate-800 flex items-center gap-3 duration-200 ease-linear">
            <input
                className="w-full px-3.5 py-4 rounded-xl font-medium outline-none
                placeholder:text-[0.96rem] placeholder:text-slate-500/90
                bg-slate-50/[58%] backdrop-blur-xl shadow focus:bg-slate-50/[78%] duration-200 ease-linear"
                type="text"
                id="todo"
                name="todo"
                placeholder="Type a Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button 
                type="submit"
                className="flex items-center font-medium tracking-wide text-[1.05rem] text-slate-50
                p-[0.75rem] pb-[0.7rem] rounded-xl
                bg-gradient-to-r from-cyan-400 to-sky-500
                hover:bg-gradient-to-r hover:from-cyan-500/75 hover:to-sky-600/75
                duration-200 ease-linear"
            >
                <HiPlus className="text-[1.7rem] mb-0.5" />
            </button>
        </form>
    );
};
