import React from 'react';
import { Link } from 'react-router-dom';

const Title = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-[50%] lg:w-[30%] mt-3 bg-blue-500 text-center rounded-full">
				<div className="p-5 text-white lg:text-xl">
					<Link to={'/start'}>TIK-TAK-TOE</Link>
				</div>
			</div>
		</div>
	);
};

export default Title;
