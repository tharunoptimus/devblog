import sendProps from "./blogs";
import HomeHeader from "../components/homeHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
	let things = sendProps();
	return (
		<div className="container">

			<Header title={"Dev Blog"} />

			<main>
				<HomeHeader />
				{things}
				<Footer />

			</main>


			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
						Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
						Helvetica Neue, sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
}
