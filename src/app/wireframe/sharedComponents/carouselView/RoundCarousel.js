import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useState } from 'react';

function RoundCarousel(props) {
	const { width, height, items, Component, delta = 1, loop = false } = props;

	/* const theme = useTheme(); */
	const numItems = items.length; // --items
	// --middle
	const [currItem, setCurrItem] = useState(0); // --position

	const handleBack = () => {
		if (currItem > 0) {
			setCurrItem(prev => prev - 1);
		} else if (loop) {
			setCurrItem(numItems - delta);
		}
	};
	const handleNext = () => {
		if (currItem < numItems - delta) {
			setCurrItem(prev => prev + 1);
		} else if (loop) {
			setCurrItem(0);
		}
	};

	return (
		<Box
			className="w-full flex justify-center items-center"
			sx={{ paddingX: '10px', height: `calc(${height}px * 1.3)` }}
		>
			<Button
				size="small"
				onClick={handleBack}
				variant="contained"
				sx={{
					zIndex: 1,
					borderRadius: '50%',
					/* background: 'radial-gradient(#5594db, #5594db 45%, transparent 100%)', */
					aspectRatio: 1,
					background: 'transparent',
					'&:focus': {
						outline: 'none'
					}
				}}
			>
				<KeyboardArrowLeft sx={{ fontSize: '75px' }} />
			</Button>

			<Box
				className="w-full h-full flex justify-center items-center"
				sx={{
					transformStyle: 'flat',
					perspective: '600px'
				}}
			>
				{items.map((item, idx) => {
					const r = idx - currItem; /* + Math.min(currItem, 1) - 1 */
					const abs = Math.abs(r);

					/* const handleMouseEnter = e => {
						console.log('onMouseEnter', e.clientX, e.clientY);
					};
					const handleMouseMove = e => {
						console.log('onMouseMove', e.nativeEvent.clientX, e.nativeEvent.clientY);
					};
					const handleMouseLeave = e => {
						console.log('onMouseLeave', e.clientX, e.clientY);
					}; */

					return (
						<Box
							key={idx}
							sx={{
								opacity: abs > 2 ? '0' : '1',
								scale: currItem === idx ? '1.3' : '1',
								position: 'absolute',
								width: '350px',
								height: '200px',
								transition: 'all 0.25s linear',
								transform: `rotateY(calc(10deg * ${r})) translateX(calc(300px * ${r}))`,
								backdropFilter: 'blur( 5px )',
								zIndex: currItem - abs
							}}
							/* onMouseEnter={r === 0 ? handleMouseEnter : undefined}
							onMouseMove={r === 0 ? handleMouseMove : undefined}
							onMouseLeave={r === 0 ? handleMouseLeave : undefined} */
						>
							<Component width={width} height={height} {...item} />
						</Box>
					);
				})}
			</Box>

			<Button
				size="small"
				onClick={handleNext}
				variant="contained"
				sx={{
					zIndex: 1,
					borderRadius: '50%',
					/* background: 'radial-gradient(#5594db, #5594db 45%, transparent 100%)', */
					aspectRatio: 1,
					background: 'transparent',
					'&:focus': {
						outline: 'none'
					}
				}}
			>
				<KeyboardArrowRight sx={{ fontSize: '75px' }} />
			</Button>
		</Box>
	);
}

export default RoundCarousel;
