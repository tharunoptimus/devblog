import blogsGrid from "./blogs";
import HomeHeader from "../components/homeHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {

	let things = blogsGrid();
	
	return (
		<div className="container">

			<Header title={"Dev Blog"} />

			<main>
				<HomeHeader />
				{things}
				<Footer />

			</main>
		</div>
	);
}
