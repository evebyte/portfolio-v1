// css
import "./App.css";

// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	// todo: consider adding three.js 3d animation
	// todo: crop pfp to remove watermark

	// todo: animate project tiles as they come into view using the Intersection Observer API

	// todo: change color theme

	// todo: add responsive scaling tailwind classes for larger screens like md:, lg:, etc.

	return (
		<div className="App">
			<Header />

			<Hero />

			<About />

			<Projects />

			<Contact />

			<Footer />
		</div>
	);
}

export default App;
