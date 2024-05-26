import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';

/**
 * @param {number} width:
 * @param {number} height:
 * @param {list} items:
 * @param {function} Component:
 * @param {number} sigma = 2:
 */
function PerpetualRoundCarousel(props) {
	const { width, height, initPos = 0, items, Component, onChange } = props;
	const { sigma = 2 } = props;

	/* const theme = useTheme(); */
	const carouselItems = items.length;
	const distance = Math.floor(carouselItems / 2);
	const isEven = carouselItems % 2 === 0;

	const [currItem, setCurrItem] = useState(initPos);

	const handleBack = () => {
		setCurrItem(prev => (prev - 1 < 0 ? carouselItems - 1 : prev - 1));
	};
	const handleNext = () => {
		setCurrItem(prev => (prev + 1 > carouselItems - 1 ? 0 : prev + 1));
	};
	useEffect(() => {
		onChange?.(currItem);
	}, [currItem]);

	useEffect(() => {
		setCurrItem(0);
		onChange?.(0);
	}, [items]);

	useEffect(() => {
		setCurrItem(initPos);
		onChange?.(initPos);
	}, [initPos]);

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
					background: 'transparent'
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
					const x = currItem - idx + distance;
					const sign = x < 0 ? -1 : +1;

					const r = (-x % carouselItems) + sign * distance - (sign < 0 && !isEven);
					const abs = Math.abs(r);

					/* if (idx === 2) {
						console.log('\n', item.name);
						console.log('', item.title);
						console.log('x', x);
						console.log('r', r);
						console.log('abs', abs);
					} */

					return (
						<Box
							key={idx}
							sx={{
								opacity: abs > sigma ? '0' : '1',
								scale: abs === 0 ? '1.3' : '1',
								position: 'absolute',
								width: '350px',
								height: '200px',
								transition: 'all 0.25s linear',
								transform: `rotateY(calc(10deg * ${r})) translateX(calc(300px * ${r}))`,
								backdropFilter: 'blur( 5px )',
								zIndex: (currItem % carouselItems) - abs
							}}
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
					background: 'transparent'
				}}
			>
				<KeyboardArrowRight sx={{ fontSize: '75px' }} />
			</Button>
		</Box>
	);
}

export default PerpetualRoundCarousel;
