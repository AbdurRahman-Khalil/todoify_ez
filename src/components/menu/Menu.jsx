import { useState, useRef, useEffect } from "react";

import { MenuBtn } from "./MenuBtn";
import { MenuItem } from "./MenuItem";
import { SearchBar } from "./SearchBar";



export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleIsMenuOpen = () => {
        setIsMenuOpen(isMenuOpen => !isMenuOpen);
    }

    const menuRef = useRef(null);

    // Close menu if click happens outside of the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);


    return (
        <ul className="relative flex justify-between items-center mb-6 mt-10 ml-1 list-none duration-200 ease-linear">
            <MenuBtn handleIsMenuOpen={handleIsMenuOpen} />

            <div
                id="menu"
                ref={menuRef}
                className={`sm:static sm:flex sm:items-center sm:gap-[1.65rem] sm:space-y-0 sm:border-0 sm:bg-transparent sm:backdrop-blur-0 sm:p-0
                    space-y-3 absolute top-[0.67rem] left-9 z-20 rounded-xl border-2 border-slate-50/35 bg-slate-100/[50%] backdrop-blur-xl px-[1.12rem] py-3.5
                    duration-200 ease-out transform transition-all 
                    ${isMenuOpen
                        ? "max-[639px]:opacity-100 max-[639px]:scale-100"
                        : "max-[639px]:opacity-0 max-[639px]:scale-95 max-[639px]:pointer-events-none"
                    }`}
            >
                <MenuItem tabName={"All"} />
                <MenuItem tabName={"Completed"} />
                <MenuItem tabName={"inComplete"} />
            </div>
            
            <SearchBar />
        </ul>
    );
};
