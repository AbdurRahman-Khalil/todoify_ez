import { Logo } from "./components/Logo";
import { Menu } from "./components/menu/Menu";
import { TodoForm } from "./components/todos/TodoForm";
import { Todos } from "./components/todos/Todos";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


export const App = () => {
  return (
    <div id="app" className="min-h-dvh font-montserrat">
      <div className="container mx-auto px-6 pb-5 duration-200 ease-linear">

        <header>
          <Logo />
          <TodoForm />
        </header>

        <main>
          <Menu />
          <Todos />
        </main>

        <footer className="text-sky-950 pt-5 flex justify-center text-center">
          <div className="flex flex-col gap-1.5">
            <p className="font-bold tracking-wide">{`Developed by Me :)`}</p>
            <div className="flex items-center gap-6 font-medium">
              <div className="flex items-center gap-1">
                <BiLogoGmail className="text-sky-800" />
                <a href="https://m.abdurrahmankhalil2@gmail.com" target="_blank">m.abdurrahmankhalil2@gmail.com</a>
              </div>
              <div className="flex items-center gap-1">
                <FaGithubSquare className="rounded-full text-sky-800" />
                <a className="mt-0.5" href="https://github.com/AbdurRahman-Khalil" target="_blank">https://github.com/AbdurRahman-Khalil</a>
              </div>
              <div className="flex items-center gap-1 ">
                <FaLinkedin className="text-sky-800" />
                <a className="mt-0.5" href="https://tinyurl.com/2unxpbnu" target="_blank">https://tinyurl.com/2unxpbnu</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};




// The stunning third book in the sexy, action-packed Crescent City series, following the global bestsellers House of Earth and Blood and House of Sky and Breath.
// Bryce Quinlan never expected to see a world other than Midgard, but now that she has, all she wants is to get back. Everything she loves is in Midgard: her family, her friends, her mate. Stranded in a strange new world, she's going to need all her wits about her to get home again. And that's no easy feat when she has no idea who to trust.
// Hunt Athalar has found himself in some deep holes in his life, but this one might be the deepest of all. After a few brief months with everything he ever wanted, he's in the Asteri's dungeons again, stripped of his freedom and without a clue as to Bryce's fate. He's desperate to help her, but until he can escape the Asteri's leash, his hands are quite literally tied.
