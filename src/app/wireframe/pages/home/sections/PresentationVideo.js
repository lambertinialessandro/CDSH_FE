import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ns } from '../translations';

function PresentationVideo() {
	const { t } = useTranslation(ns);
	const { message, title } = t(ns);

	return (
		<Box
			component="section"
			className="header relative flex items-center justify-center h-screen max-h-860-px overflow-hidden"
			style={{ marginBottom: '16px' }}
		>
			<video
				autoPlay
				loop
				muted
				className="w-full h-full aspect-video object-cover absolute"
				style={{ filter: 'brightness(0.5) blur(5px)', objectFit: 'cover' }}
				src={require('../../../../assets/img/CDSH - Trailer Final Performance cutted.mp4')}
			/>
			<Box className="z-2 items-center flex w-2/4">
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-end'
					}}
					className="max-w-1200"
				>
					<Typography
						variant="h1"
						color="text.primary"
						className="font-semibold"
						style={{
							color: 'rgb(186 186 186)',
							textShadow: '0 0 4px black',
							marginBottom: '10px'
						}}
					>
						CDSH
					</Typography>
					<Box>
						<Typography
							variant="h6"
							color="text.primary"
							className="mt-4 leading-relaxed"
							style={{ fontSize: '24px', color: 'rgb(186 186 186)', textShadow: '0 0 4px black' }}
						>
							{message.welcomeDescription}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default PresentationVideo;
