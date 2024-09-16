import { Logo } from "./components/Logo";
import { TodoForm } from "./components/todos/TodoForm";
import { Menu } from "./components/menu/Menu";
import { Todos } from "./components/todos/Todos";
import { Count } from "./components/Count";
import { ClearBtn } from "./components/ClearBtn";
import { FooterContent } from "./components/FooterContent";
import { ScrollTop } from "./components/ScrollTop";


export const App = () => {
  return (
    <div id="app" className="min-h-dvh font-montserrat">
      <div className="container mx-auto px-6 pb-6 duration-200 ease-linear">

        <header>
          <Logo />
          <TodoForm />
        </header>

        <main>
          <Menu />
          <Todos />
          <div className="flex justify-between items-center max-[579px]:flex-col max-[579px]:gap-5">
            <Count />
            <ClearBtn />
          </div>
        </main>

        <footer className="text-sky-950 mt-[2.9rem] flex justify-center text-center duration-200 ease-linear">
          <FooterContent />
        </footer>

        <ScrollTop />

      </div>
    </div>
  );
};




// The stunning third book in the sexy, action-packed Crescent City series, following the global bestsellers House of Earth and Blood and House of Sky and Breath.
// Bryce Quinlan never expected to see a world other than Midgard, but now that she has, all she wants is to get back. Everything she loves is in Midgard: her family, her friends, her mate. Stranded in a strange new world, she's going to need all her wits about her to get home again. And that's no easy feat when she has no idea who to trust.
// Hunt Athalar has found himself in some deep holes in his life, but this one might be the deepest of all. After a few brief months with everything he ever wanted, he's in the Asteri's dungeons again, stripped of his freedom and without a clue as to Bryce's fate. He's desperate to help her, but until he can escape the Asteri's leash, his hands are quite literally tied.
