import { FC, useEffect, useRef, useState } from "react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faBoxArchive } from "@fortawesome/free-solid-svg-icons";

const Projects: FC = () => {
	// to track the state of elements
	const [inView, setInView] = useState(false);

	const containerRef = useRef(null);

	// todo: replace :any type (bad practice)
	const callbackFunciton = (entries: any) => {
		const [entry] = entries;
		setInView(entry.isIntersecting);
	};

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1,
	};

	useEffect(() => {
		const observer = new IntersectionObserver(callbackFunciton, options);
		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		// when unmounting the component it unobserves the element
		return () => {
			if (containerRef.current) observer.unobserve(containerRef.current);
		};
	}, [containerRef, options]);

	const projects = document.querySelectorAll("a.project");

	return (
		<>
			<section
				className="h-fit flex flex-col justify-center text-center font-bold pt-20 pb-10 bg-lm-primary-blue"
				id="projects"
			>
				<h2 className="text-5xl mb-10 text-lm-primary-cyan font-black drop-shadow-lg">
					<FontAwesomeIcon icon={faFolderOpen} /> projects
				</h2>

				<div
					className="grid grid-cols-1 md:grid-cols-3 content-center place-items-center gap-6 md:gap-10 px-4 md:px-10 overflow-x-clip overflow-y-visible"
					// tells IO api that this is the element to watch
					ref={containerRef}
				>
					{[
						// todo: maybe use light/dark mode to use light/dark images
						[
							"projectTimer",
							"https://evebyte.github.io/pomodoroTimer/",
							"https://user-images.githubusercontent.com/49453037/197070745-cfdbe86e-1000-43f6-a33c-23ad89ec4581.png",
							"project image description",
							"pomodoro timer",
						],

						[
							"projectMarkdown",
							"https://evebyte.github.io/markdownPreviewer/",
							"https://user-images.githubusercontent.com/49453037/178215668-1dbfafaf-ef56-48a3-9822-ce0a3f46b9b2.png",
							"project image description",
							"markdown previewer",
						],

						[
							"projectDrumKit",
							"https://evebyte.github.io/drumKit/",
							"https://user-images.githubusercontent.com/49453037/197070223-c1b3bfa0-7907-493d-857f-138273d93e91.png",
							"project image description",
							"drum kit",
						],
					].map(([id, href, imgSrc, imgAlt, projectName]): any => (
						<a
							key={id as string}
							href={href}
							target="_blank"
							className={`project 
						bg-lm-primary-cyan dark:bg-indigo-400
						hover:bg-lm-primary-green dark:hover:bg-orange-700
						text-lm-secondary-blue dark:text-indigo-900
						hover:text-lm-secondary-green dark:hover:text-orange-300
						drop-shadow-lg rounded-lg hover:scale-110 active:scale-90 `}
						>
							<img
								src={imgSrc}
								alt={imgAlt}
								className="rounded-t-lg object-fill	"
							/>
							<p>{projectName}</p>
						</a>
					))}
				</div>

				<div className="mt-10 ">
					<a
						href="https://github.com/evebyte?tab=repositories"
						target="_blank"
						title="view more projects"
						className="bg-lm-primary-cyan hover:bg-lm-primary-green 
					text-lm-secondary-blue hover:text-lm-secondary-green 
					hover:scale-110 active:scale-90 
					p-3 rounded-full inline-block drop-shadow-lg"
					>
						<FontAwesomeIcon icon={faBoxArchive} /> view archive
					</a>
				</div>
			</section>
		</>
	);
};

export default Projects;
