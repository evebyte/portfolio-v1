import { FC } from "react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

// modules
import { TypeAnimation } from "react-type-animation";

const Hero: FC = () => {
	return (
		<>
			<section
				className="h-screen flex flex-col justify-center text-center font-bold bg-lm-primary-blue text-lm-primary-green wave-bg-frame hero-bg "
				id="home"
			>
				<div className="flex flex-row justify-center mb-5">
					<img
						src="./src/assets/pfp.jpg"
						className="rounded-full border-8 border-lm-primary-green dark:border-indigo-400 h-[150px] w-[150px] drop-shadow-lg"
					/>
				</div>

				{/* <h1 className="text-5xl md:text-7xl mb-2 font-black	">hi, i am eve</h1> */}

				{/* <p className="text-xl">i build software</p> */}

				<TypeAnimation
					// Same String at the start will only be typed once, initially
					sequence={["hi, i'm eve", 1000]}
					speed={40} // Custom Speed from 1-99 - Default Speed: 40
					wrapper="h1" // Animation will be rendered as a <h1>
					repeat={0} // Repeat this Animation Sequence infinitely
					className="text-5xl md:text-7xl mb-2 font-black	"
				/>

				<TypeAnimation
					// Same String at the start will only be typed once, initially
					sequence={[
						"i build things with code",
						1000,
						"i'm a full-stack web engineer",
						1000,
					]}
					speed={40} // Custom Speed from 1-99 - Default Speed: 40
					wrapper="p" // Animation will be rendered as a <p>
					repeat={0} // Repeat this Animation Sequence infinitely
					className="text-xl mb-2 font-black	"
				/>
			</section>

			<div className="w-full text-center absolute bottom-0 text-lm-primary-green">
				<button className="text-2xl animate-bounce p-2" title="Scroll Down">
					<a href="#about">
						<FontAwesomeIcon icon={faCircleArrowDown} />
					</a>
				</button>
			</div>
		</>
	);
};

export default Hero;
