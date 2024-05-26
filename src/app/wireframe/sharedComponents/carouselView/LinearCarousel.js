import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';

function LinearCarousel(props) {
	const { width, height, items, Component, delta = 1, loop = false } = props;

	const numItems = items.length;
	const [currItem, setCurrItem] = useState(0);

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
		<Box className="w-full h-fit overflow-hidden flex flex-row justify-center items-center" sx={{ gap: '16px' }}>
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
				className="h-full overflow-hidden"
				sx={{
					width: '70%'
				}}
			>
				<Box
					className="flex"
					sx={{
						gap: '16px',
						transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
						transform: `translate(-${currItem * (width + 16)}px, 0)`
					}}
				>
					{items.map((item, idx) => (
						<Component key={idx} width={width} height={height} {...item} />
					))}
				</Box>
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

LinearCarousel.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	items: PropTypes.array.isRequired,
	Component: PropTypes.func.isRequired,
	delta: PropTypes.number,
	loop: PropTypes.bool
};

export default LinearCarousel;
