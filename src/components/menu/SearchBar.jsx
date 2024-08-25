import useTodosStore from "../../store/TodosStore";

import { FiSearch } from "react-icons/fi";


export const SearchBar = () => {
    const { searchQuery, updateSearchQuery } = useTodosStore((state) => ({
        searchQuery: state.searchQuery,
        updateSearchQuery: state.updateSearchQuery
    }));
    

    return (
        <form className="max-w-full md:w-[18rem] text-slate-800 flex items-center bg-slate-50/[65%] backdrop-blur-xl rounded-[0.65rem] duration-200 ease-linear">
            <FiSearch className="text-[2.05rem] text-slate-600/90 pl-2.5 pb-[0.18rem]" />
            <input
                className="w-full px-2.5 pt-3.5 pb-[0.92rem] font-medium outline-none
                text-[0.96rem] placeholder:text-[0.9rem] placeholder:text-slate-500/90
                bg-transparent duration-200 ease-linear"
                type="text"
                id="search"
                name="search"
                placeholder="Search by a word or date"
                value={searchQuery}
                onChange={(e) => updateSearchQuery(e.target.value)}
            />

        </form>
    );
};
