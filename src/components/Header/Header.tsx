import { FC } from "react";
import DarkModeToggle from "./DarkModeButton";

const Header: FC = () => {
  // todo: replace :any type (bad practice)

  return (
    <header className="w-full fixed top-0 sm:bot-0 z-10 text-center grid grid-flow-col auto-cols-max justify-center drop-shadow-lg bg-lm-primary-cyan overflow-hidden">
      <nav className="grid grid-flow-col auto-cols-max gap-x-2 font-bold text-md">
        {[
          // href, anchorText
          ["#about", "about", "_self", ""],
          ["#projects", "projects"],
          ["#contact", "contact"],
          ["https://mirror.xyz/evebyte.eth", "blog", "_blank"],
        ].map(([href, anchorText, target, customCSS]) => (
          <a
            href={href}
            target={target}
            className={`
						hover:bg-lm-primary-green dark:hover:bg-dm-primary-blue
						text-lm-secondary-blue dark:text-dm-secondary-blue
						hover:text-lm-secondary-green dark:hover:text-orange-300 
						block p-3 hover:underline hover:decoration-wavy hover:scale-110 active:scale-90 ${customCSS}`}
            key={anchorText}
          >
            {anchorText}
          </a>
        ))}

        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;
