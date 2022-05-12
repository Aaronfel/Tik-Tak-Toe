import { Link } from 'react-router-dom';
import Card from './card';

const Selection = () => {
	return (
		<section className="h-screen bg-black overflow-hidden">
			<div className="flex justify-center mt-5">
				<div className="bg-white p-5 lg:w-[40%] text-center lg:text-xl rounded-full">
					Select your weapon
				</div>
			</div>
			<div className="w-full flex justify-center mt-20 space-x-10">
				<div className="p-2">
					<Card type="x" />
					<input
						type="text"
						value={'Not yet implemented'}
						className="bg-white w-full mt-2 rounded-xl text-center"
						//onChange={}
					/>
				</div>
				<div className="p-2">
					<Card type="o" />
					<input
						type="text"
						value={'Not yet implemented'}
						className="bg-white w-full mt-2 rounded-xl text-center"
						//onChange={}
					/>
				</div>
			</div>
			<div className="flex justify-center mt-10">
				<div className="p-3 w-[20%] bg-green-600 rounded-full text-center text-white lg:text-xl">
					<Link to={'/game'}>Play</Link>
				</div>
			</div>
		</section>
	);
};

export default Selection;
