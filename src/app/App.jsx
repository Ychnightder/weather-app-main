
import { Nav } from "../components/nav/nav";
function App() {


  const bgColor = 'bg-neutral-900';

  return (
		<>
			<div className={`${bgColor} h-screen w-screen `}>
				<Nav />
			</div>
		</>
	);
}

export default App
