import { Nav } from '../components/nav/Nav';
import { Title } from '../components/title/Title';
 
 // import { DropdownUnits } from './../components/dropdown/DropdownUnits';
 import { DropdownSearch } from '../components/dropdown/DropdownSearch';
 //  import { DropdownDays } from '../components/dropdown/DropdownDays';
 import { Search } from '../components/search/Search';
 function App() {
		return (
			<div className="lg:px-28 lg:pt-12 md:px-20 md:pt-15 px-5 pt-10">
				<Nav />
				<Title text="How's the sky looking today?" />
				{/* <ButtonPrimary /> */}
				{/* <DropdownUnits /> */}
				{/* <DropdownSearch cities={null} /> */}
				{/* <DropdownSearch cities={['paris' , 'london', 'new york', 'tokyo', 'sydney']} /> */}
				{/* <DropdownDays /> */}
				<div className="w-full flex items-center justify-center">
					<Search />
				</div>
			</div>
		);
 }

export default App;
