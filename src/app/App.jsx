import { Nav } from '../components/nav/nav';
import { Title } from '../components/Title/Title';
import { ButtonPrimary } from '../components/button/buttonPrimary';
function App() {
	return (
		<div className="lg:px-28 lg:pt-12 md:px-20 md:pt-15 px-5 pt-10">
			<Nav />;
			<Title text="how's the sky looking today?" />
			<ButtonPrimary />
		</div>
	);
}

export default App;
