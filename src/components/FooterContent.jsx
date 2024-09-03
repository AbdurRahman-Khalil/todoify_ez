import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


export const FooterContent = () => {
    return (
        <div className="flex flex-col gap-2 duration-200 ease-linear">
            <p className="font-bold tracking-wide">{`Developed by Me :)`}</p>
            <div className="flex justify-center items-center gap-x-6 gap-y-2.5 flex-wrap font-medium">
                <div className="flex items-center gap-1">
                    <BiLogoGmail className="text-sky-800" />
                    <a className="max-[395px]:text-[0.9rem] max-[363px]:text-[0.882rem] hover:underline hover:decoration-solid" href="https://m.abdurrahmankhalil2@gmail.com" target="_blank">
                        m.abdurrahmankhalil2@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-1">
                    <FaGithubSquare className="rounded-full text-sky-800" />
                    <a className="max-[395px]:text-[0.9rem] max-[363px]:text-[0.882rem] hover:underline hover:decoration-solid mt-0.5" href="https://github.com/AbdurRahman-Khalil" target="_blank">
                        github.com/AbdurRahman-Khalil
                    </a>
                </div>
                <div className="flex items-center gap-1">
                    <FaLinkedin className="text-sky-800" />
                    <a className="max-[395px]:text-[0.9rem] max-[363px]:text-[0.882rem] hover:underline hover:decoration-solid mt-0.5" href="https://tinyurl.com/2unxpbnu" target="_blank">
                        https://tinyurl.com/2unxpbnu
                    </a>
                </div>
            </div>
        </div>
    );
};
