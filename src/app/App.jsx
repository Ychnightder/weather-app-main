import { Nav } from '../components/nav/nav';
import { Title } from '../components/title/Title';
import { ButtonPrimary } from '../components/button/buttonPrimary';
import { DropdownUnits } from './../components/dropdown/DropdownUnits';
import { DropdownSearch } from '../components/dropdown/DropdownSearch';
import { DropdownDays } from '../components/dropdown/DropdownDays';
function App() {
	return (
		<div className="lg:px-28 lg:pt-12 md:px-20 md:pt-15 px-5 pt-10">
			<Nav />
			<Title text="how's the sky looking today?" />
			{/* <ButtonPrimary /> */}
			{/* <DropdownUnits /> */}
			{/* <DropdownSearch cities={['Paris', 'Berlin', 'Paris', 'Berlin']} /> */}
			{/* <DropdownDays /> */}
		</div>
	);
}
 
export default App;
