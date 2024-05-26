import { Box } from '@mui/material';
import { LinearCarousel } from 'app/wireframe/sharedComponents/carouselView';
/* import { useTranslation } from 'react-i18next';
import { ns } from '../translations'; */

function PresentationCarousel() {
	const galley = [
		{
			label: '...',
			src: require('../../../../assets/img/galley/cdsh-galley-1-1.jpg')
		},
		{
			label: '...',
			src: require('../../../../assets/img/galley/cdsh-galley-2-1.jpg')
		},
		{
			label: '...',
			src: require('../../../../assets/img/galley/cdsh-galley-3-1.jpg')
		},
		{
			label: '...',
			src: require('../../../../assets/img/galley/cdsh-galley-4-1.jpg')
		},
		{
			label: '...',
			src: require('../../../../assets/img/galley/cdsh-galley-5-1.jpg')
		},
		{
			label: '...',
			src: require('../../../../assets/img/galley/cdsh-galley-6-1.jpg')
		},
		{
			label: '...',
			src: require('../../../../assets/img/galley/cdsh-galley-7-1.jpg')
		},
		{
			label: '...',
			src: require('../../../../assets/img/galley/cdsh-galley-8-1.jpg')
		},
		{
			label: '...',
			src: require('../../../../assets/img/galley/cdsh-galley-9-1.jpg')
		}
	];

	return (
		<Box
			component="section"
			className="flex flex-col items-center justify-center w-full"
			sx={{ paddingBottom: '30px' }}
		>
			<LinearCarousel
				width={450}
				height={260}
				items={galley}
				delta={2}
				loop
				Component={image => {
					const { width, height, src, label } = image;

					return (
						<Box
							component="img"
							sx={{
								width: `${width}px`,
								height: `${height}px`,
								display: 'block',
								objectFit: 'cover'
							}}
							src={src}
							alt={label}
						/>
					);
				}}
			/>
		</Box>
	);
}

export default PresentationCarousel;
