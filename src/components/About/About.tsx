import { FC } from "react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faToolbox,
	faMobileScreenButton,
	faServer,
	faList,
	faDatabase,
	faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import {
	faReadme,
	faSquareJs,
	faReact,
	faHtml5,
	faCss3Alt,
	faNodeJs,
	faDocker,
	faSass,
	faMdb,
	faGoogle,
	faSquareGit,
	faEthereum,
	faChrome,
} from "@fortawesome/free-brands-svg-icons";

const About: FC = () => {
	return (
		<>
			<section
				className="h-fit md:h-[75vh] flex flex-col justify-center text-center font-bold pt-20 pb-10 bg-lm-primary-blue text-lm-primary-cyan"
				id="about"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6  content-center place-items-center p-4">
					<section>
						<h3 className="text-3xl font-black drop-shadow-lg mb-2">
							<FontAwesomeIcon icon={faReadme} /> readme
						</h3>

						<p className="font-normal drop-shadow-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
							voluptate libero ex, ullam nihil autem iusto excepturi! Quidem
							voluptates quis doloribus dolorem qui porro maxime quisquam
							soluta, beatae rem numquam?
							<br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
							accusantium eveniet dolorem est quisquam nostrum odio, possimus
							rem debitis vitae voluptas culpa doloremque, consequuntur repellat
							corrupti incidunt nam! Corporis, fugiat!
							<br />
							<br />
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
							alias fugiat enim quibusdam adipisci officia reprehenderit sint
							quod, animi laborum nemo dolor cupiditate! Dolore, atque minima!
							Est pariatur tempora nihil.
						</p>
					</section>

					<section>
						<h3 className="text-3xl font-black drop-shadow-lg mb-2">
							<FontAwesomeIcon icon={faToolbox} /> skills
						</h3>

						<h4 className="text-lg font-black drop-shadow-lg">
							<FontAwesomeIcon icon={faMobileScreenButton} /> front-end
						</h4>
						<ul className="grid grid-cols-3 gap-3 mb-3 select-none">
							{[
								[<FontAwesomeIcon icon={faSquareJs} />, "javascript"],
								[<FontAwesomeIcon icon={faSquareJs} />, "typescript"],
								[<FontAwesomeIcon icon={faReact} />, "reactJS"],
								[<FontAwesomeIcon icon={faSquareJs} />, "redux"],
								[<FontAwesomeIcon icon={faSquareJs} />, "viteJS"],
								[<FontAwesomeIcon icon={faHtml5} />, "html"],
								[<FontAwesomeIcon icon={faCss3Alt} />, "css"],
								[<FontAwesomeIcon icon={faCss3Alt} />, "tailwindcss"],
								[<FontAwesomeIcon icon={faSass} />, "sass"],
							].map(([icon, skillName]) => (
								<li
									className="bg-lm-primary-cyan text-lm-secondary-blue hover:scale-110 p-1 rounded-full drop-shadow-lg"
									key={skillName as string}
								>
									{icon} {skillName}
								</li>
							))}
						</ul>

						<h4 className="text-lg font-black drop-shadow-lg">
							<FontAwesomeIcon icon={faServer} /> back-end
						</h4>
						<ul className="grid grid-cols-3 gap-3 mb-3 select-none">
							{[
								[<FontAwesomeIcon icon={faNodeJs} />, "nodeJS"],
								[<FontAwesomeIcon icon={faSquareJs} />, "expressJS"],
								[<FontAwesomeIcon icon={faMdb} />, "mongoDB"],
								// [<FontAwesomeIcon icon={faDocker} />, "docker"],
							].map(([icon, skillName]) => (
								<li
									className="bg-lm-primary-cyan text-lm-secondary-blue hover:scale-110 p-1 rounded-full drop-shadow-lg"
									key={skillName as string}
								>
									{icon} {skillName}
								</li>
							))}
						</ul>

						<h4 className="text-lg font-black drop-shadow-lg">
							<FontAwesomeIcon icon={faList} /> other
						</h4>
						<ul className="grid grid-cols-3 gap-3  select-none">
							{[
								[<FontAwesomeIcon icon={faTerminal} />, "bash"],
								[<FontAwesomeIcon icon={faSquareGit} />, "git"],
								[<FontAwesomeIcon icon={faGoogle} />, "google"],
								// [<FontAwesomeIcon icon={faChrome} />, "extensions"],
							].map(([icon, skillName]) => (
								<li
									className="bg-lm-primary-cyan text-lm-secondary-blue hover:scale-110 p-1 rounded-full drop-shadow-lg"
									key={skillName as string}
								>
									{icon} {skillName}
								</li>
							))}
						</ul>
					</section>
				</div>
			</section>
			<div className="spacer about-wave"></div>
		</>
	);
};

export default About;
