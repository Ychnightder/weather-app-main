import { Title } from '../components/title/Title.jsx';
import { Search } from '../components/search/Search';
import { Nav } from '../components/nav/Nav.jsx';
// import { Search } from './../components/search/Search';

function App() {
	return (
		<div className="lg:px-28 lg:pt-12 md:px-20 md:pt-15 px-5 pt-10">
			<Nav />
			<Title text="How's the sky looking today?" />
			<div className="w-full flex items-center justify-center">
				<Search />
			</div>
		</div>
	);
}

export default App;
