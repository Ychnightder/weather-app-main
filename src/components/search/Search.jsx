import { useEffect, useState } from 'react';
import { ButtonPrimary } from '../button/buttonPrimary';
import search from "/images/icon-search.svg"

export function Search() {
    
	const [placeholder, setPlaceholder] = useState(typeof window !== 'undefined' && window.innerWidth < 1024 ? 'Search for a place...' : '');

    useEffect(() => {
		const handleResize = () => {
			setPlaceholder(typeof window !== 'undefined' && window.innerWidth < 1024 ? 'Search for a place...' : '');
		};

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
			<>
            {/* 343px 720px 656px*/}
				<div className="flex flex-col justify-center w-85.75  gap-4 md:w-180 md:flex-row lg:w-164 lg:flex-row ">
					<div className="relative lg:w-3/4 md:w-3/4 w-full">
						<img src={search} alt="Search" className="absolute bottom-4 left-4 w-5 " />
						<label htmlFor="search" className="text-gray-200 preset-7 absolute bottom-4 left-15 ">
							{placeholder.toString()}
						</label>
						<input
							type="text"
							id="search"
							aria-label={placeholder.toString()}
							className="w-full h-14 radius-12 px-11 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-neutral-200 transition duration-200 "
						/>
					</div>
					<ButtonPrimary label="Search" onClick={() => alert('Search clicked!')} />
				</div>
			</>
		);
}
