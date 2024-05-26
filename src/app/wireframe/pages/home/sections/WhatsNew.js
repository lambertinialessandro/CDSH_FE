import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import TitleLined from 'app/wireframe/sharedComponents/TitleLined';
import { PerpetualRoundCarousel } from 'app/wireframe/sharedComponents/carouselView';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ns } from '../translations';

function WhatsNew(props) {
	const { t } = useTranslation(ns);
	const { message, title, temp } = t(ns);
	const theme = useTheme();

	const projects = [
		{
			src: require('../../../../assets/img/projects/JOY.jpg'),
			title: 'JOY',
			subTitle: `${message.workInProgress} 2024`
		},
		{
			src: require('../../../../assets/img/projects/KONTINUUM.jpg'),
			title: 'KONTINUUM',
			subTitle: `${message.workInProgress} 2023`
		},
		{
			src: require('../../../../assets/img/projects/UNDER UTOPIA.jpg'),
			title: 'UNDER UTOPIA',
			subTitle: `${message.schoolYear2} 2023`
		},
		{
			src: require('../../../../assets/img/projects/QUANTUM REALITIES.jpg'),
			title: 'QUANTUM REALITIES',
			subTitle: `${message.schoolYear2} 2022`
		},
		{
			src: require('../../../../assets/img/projects/SOMEWHERE IN BETWEEN.jpg'),
			title: 'SOMEWHERE IN BETWEEN',
			subTitle: `${message.schoolYear2} 2021`
		},
		{
			src: require('../../../../assets/img/projects/OH, HEY.jpg'),
			title: 'OH, HEY!',
			subTitle: `${message.schoolYear2} 2020`
		},
		{
			src: require('../../../../assets/img/projects/MASS.jpg'),
			title: 'MASS',
			subTitle: `${message.schoolYear2} 2019`
		},
		{
			src: require('../../../../assets/img/projects/DESIRE.jpg'),
			title: 'DESIRE',
			subTitle: `${message.schoolYear2} 2018`
		}
	];

	const onBuildProject = useCallback(
		project => {
			const { width, height, src, title, subTitle } = project;

			return (
				<Box
					className="relative flex flex-col justify-center items-center text-center"
					sx={{
						padding: '16px',
						width: `${width}px`,
						height: `${height}px`,

						background: 'rgba( 64, 64, 64, 0.4 )',
						boxShadow: '0 8px 32px 0 rgba( 0, 0, 0, 0.4 )',
						borderRadius: '10px',
						border: '1px solid rgba( 119, 119, 119, 0.20 )'
					}}
				>
					<img alt={title} src={src} style={{ width: '100px', height: '100px' }} />
					<Typography
						variant="h1"
						color="text.primary"
						className="font-semibold"
						style={{
							color: 'rgb(186 186 186)',
							fontSize: '26px',
							width: '300px',
							backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 60%)`,
							backgroundSize: '100%',
							backgroundRepeat: 'repeat',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent'
						}}
					>
						{title}
					</Typography>
					<Typography
						variant="h1"
						color="text.primary"
						className="font-semibold"
						sx={{
							color: 'rgb(186 186 186)',
							fontSize: '16px',
							width: '300px'
						}}
					>
						{subTitle}
					</Typography>
				</Box>
			);
		},
		[theme]
	);

	return (
		<Box
			component="section"
			className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
			sx={{ paddingBottom: '30px' }}
		>
			<Box className="flex flex-col items-center justify-center w-full" sx={{ marginBottom: '40px' }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-end',
						paddingX: '25px',
						maxWidth: '1300px'
					}}
					className="w-full"
				>
					<TitleLined title={title.whatNew} />
				</Box>
				<Typography
					className="mt-4 leading-relaxed"
					style={{ fontSize: '24px', color: 'rgb(186 186 186)', textShadow: '0 0 4px black' }}
				>
					{temp.line1Temp}
					<br />
					{temp.line2Temp}
				</Typography>
			</Box>
			<Box className="z-2 flex flex-col items-center max-w-1200 w-full">
				<PerpetualRoundCarousel width={350} height={200} items={projects} Component={onBuildProject} />
			</Box>
		</Box>
	);
}

export default WhatsNew;
