import { useDarkMode } from "../../hooks/useDarkMode.js";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkMode = () => {
	return (
		<>
			<DarkModeToggle />
		</>
	);
};

const DarkModeToggle = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);

	return (
		<button
			title="Toggle Light/Dark Mode"
			className="
			hover:bg-lm-primary-green dark:hover:bg-orange-700
			text-lm-secondary-blue dark:text-indigo-900
			hover:text-lm-secondary-green dark:hover:text-orange-300 
			block p-3 hover:underline hover:decoration-wavy hover:scale-110 active:scale-90"
			onClick={handleMode}
		>
			{darkTheme ? (
				<span>
					<FontAwesomeIcon icon={faSun} />
				</span>
			) : (
				<span>
					<FontAwesomeIcon icon={faMoon} />
				</span>
			)}
		</button>
	);
};

export default DarkModeToggle;
