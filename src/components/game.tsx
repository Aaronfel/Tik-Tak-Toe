import { useState } from 'react';
import Circle from './svg/circle';
import XIcon from './svg/x';

interface props {
	xName: string;
	oName: string;
}

const Game = () => {
	const [isoturn, setOturn] = useState<boolean>(false);
	const [iconsArray, setIconsArray] = useState<any>([
		{ id: 1, icon: null },
		{ id: 2, icon: null },
		{ id: 3, icon: null },
		{ id: 4, icon: null },
		{ id: 5, icon: null },
		{ id: 6, icon: null },
		{ id: 7, icon: null },
		{ id: 8, icon: null },
		{ id: 9, icon: null },
	]);
	let winner = '';

	const putIcon = (id: number) => {
		const item = iconsArray.find((item: any) => item.id === id);
		// put the icon in the object
		item.icon = isoturn ? <Circle /> : <XIcon />;
		setIconsArray([...iconsArray]);
		setOturn(!isoturn);
	};

	function game_overQ() {
		return (
			winnerQ(0, 1, 2) || // check for 3-in-a-row horizontally
			winnerQ(3, 4, 5) ||
			winnerQ(6, 7, 8) ||
			winnerQ(0, 3, 6) || // check for 3-in-a-row vertically
			winnerQ(1, 4, 7) ||
			winnerQ(2, 5, 8) ||
			winnerQ(0, 4, 8) || // check for 3-in-a-row diagonally
			winnerQ(6, 4, 2) ||
			stalemateQ()
		); // check for win by 'cat'
	}

	function winnerQ(p1: number, p2: number, p3: number) {
		let hasWinner = false;
		if (
			iconsArray[p1].icon !== null &&
			iconsArray[p2].icon !== null &&
			iconsArray[p3].icon !== null
		) {
			if (
				iconsArray[p1].icon.type.name === iconsArray[p2].icon.type.name &&
				iconsArray[p1].icon.type.name === iconsArray[p3].icon.type.name
			) {
				hasWinner = true;
				winner =
					iconsArray[p1].icon.type.name === 'XIcon'
						? `the winner is X`
						: 'the winner is O';
			}
		}
		return hasWinner;
	}

	function stalemateQ() {
		for (let i = 0; i < 9; i++) {
			if (iconsArray[i].icon === null) return false;
		}
		winner = 'Empate';
		return true;
	}

	return (
		<>
			{!game_overQ() ? (
				<div className="h-screen bg-black overflow-hidden">
					<div className="flex justify-center mt-5">
						<div className="bg-blue-600 text-white p-5 lg:w-[40%] text-center lg:text-xl rounded-full">
							Tik Tak Toe
						</div>
					</div>

					<div className="flex justify-center mt-5">
						<div className="bg-red-600 rounded-lg w-full lg:w-[50%] p-[20px] lg:p-[100px] h-[400px] lg:h-[650px] flex justify-center flex-wrap">
							{iconsArray.map((item: any) => (
								<div
									key={item.id}
									className="w-[100px] h-[120px] lg:w-[150px] lg:h-[150px]  border-4 border-white"
									onClick={() => putIcon(item.id)}
								>
									{item.icon}
								</div>
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="h-screen bg-black w-screen flex flex-col space-y-4 lg:space-y-10 justify-center items-center">
					<div className="text-white text-5xl lg:text-9xl">{winner}</div>
					<button
						className="text-white bg-green-600 p-3 rounded-xl"
						onClick={() => window.location.reload()}
					>
						Play Again
					</button>
				</div>
			)}
		</>
	);
};

export default Game;
