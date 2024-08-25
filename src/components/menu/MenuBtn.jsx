import { CgMenuLeft } from "react-icons/cg";


export const MenuBtn = ({ handleIsMenuOpen }) => {

    return (
        <button className="sm:hidden text-sky-700 hover:text-sky-600/[93%]" onClick={handleIsMenuOpen}>
            <CgMenuLeft className="text-[2.1rem] duration-200 ease-in" />
        </button>
    );
};
