import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

function Students(props) {
	const {} = props;
	const theme = useTheme();
	const history = useHistory();

	const currentStudents = [
		{
			name: 'Ho’omau',
			startYear: 2022,
			endYear: 2025,
			src: require('../../../assets/img/students/Hoomau-IMG_1781-360x360.jpg')
		},
		{
			name: 'Unalome',
			startYear: 2021,
			endYear: 2024,
			src: require('../../../assets/img/students/Unalome_web-360x360.jpg')
		},
		{
			name: 'Zarathustra',
			startYear: 2020,
			endYear: 2023,
			src: require('../../../assets/img/students/cdsh-web-360x360.jpg')
		}
	];

	const formerStudents = [
		{
			name: 'Nakama',
			startYear: 2019,
			endYear: 2022,
			src: require('../../../assets/img/students/nakama-800x800-edited-360x360.jpg')
		},
		{
			name: 'Cromìas',
			startYear: 2018,
			endYear: 2021,
			src: require('../../../assets/img/students/Cromias2019-20-1166246-360x360.jpg')
		},
		{
			name: 'PantaRei/Meraki',
			startYear: 2017,
			endYear: 2020,
			src: require('../../../assets/img/students/PantaReiMeraki2019-20-1166240-360x360.jpg')
		},

		{
			name: 'Gøglers',
			startYear: 2016,
			endYear: 2019,
			src: require('../../../assets/img/students/Gøglers2-1033427-360x360.jpg')
		},
		{
			name: 'Corroboree',
			startYear: 2015,
			endYear: 2018,
			src: require('../../../assets/img/students/Corroboree-17-18-1126_1200-360x360.jpg')
		},
		{
			name: 'Corroboree',
			startYear: 2014,
			endYear: 2017,
			src: require('../../../assets/img/students/cdsh-jhg2017-teaser-360x360.jpg')
		},

		{
			name: '',
			startYear: 20213,
			endYear: 2016,
			src: ''
		},
		{
			name: '',
			startYear: 2012,
			endYear: 2015,
			src: ''
		},
		{
			name: '',
			startYear: 2011,
			endYear: 2014,
			src: ''
		},

		{
			name: '',
			startYear: 2010,
			endYear: 20213,
			src: ''
		},
		{
			name: '',
			startYear: 2009,
			endYear: 2012,
			src: ''
		},
		{
			name: '',
			startYear: 2008,
			endYear: 2011,
			src: ''
		},

		{
			name: '',
			startYear: 2007,
			endYear: 2010,
			src: ''
		},
		{
			name: '',
			startYear: 2006,
			endYear: 2009,
			src: ''
		}
	];

	const onBuildStudents = useCallback((item, idx) => {
		const { name, startYear, endYear, src } = item;

		const onClick = () => {
			history.push(`/school/students/${name}`);
			window.scrollTo(0, 0);
		};

		return (
			<Grid
				item
				xs={4}
				key={idx}
				className="w-full flex flex-col items-center relative"
				sx={{ ':hover #classLink': { opacity: 0.75 } }}
			>
				<Box className="relative">
					<Box component="img" src={src} alt={name} sx={{ width: '360px', height: '360px' }} />
					<Box
						id="classLink"
						className="absolute top-0 w-full h-full flex justify-center items-center"
						sx={{
							zIndex: 3,
							cursor: 'pointer',
							padding: '8px 16px',
							background: theme.palette.background.light_1,
							opacity: 0
						}}
						onClick={onClick}
					>
						<Typography color="text.primary" sx={{ fontSize: '24px' }}>
							Class info
						</Typography>
					</Box>
					<Box
						className="absolute bottom-0 w-full flex flex-col items-center"
						sx={{
							zIndex: 2,
							paddingTop: '100px',
							paddingBottom: '8px',
							background: 'linear-gradient(0deg, #000000 0%, #ffffff00 75%)'
						}}
					>
						<Typography
							variant="h1"
							color="text.primary"
							className="font-semibold"
							sx={{
								color: 'rgb(186 186 186)',
								fontSize: '45px',
								backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 60%)`,
								backgroundSize: '100%',
								backgroundRepeat: 'repeat',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent'
							}}
						>
							{name}
						</Typography>
						<Typography
							variant="h1"
							color="text.primary"
							className="font-semibold"
							sx={{
								color: 'rgb(186 186 186)',
								fontSize: '16px',
								textShadow: 'black 0px 0px 10px'
							}}
						>
							{idx + 1}° Year
						</Typography>
						<Typography
							variant="h1"
							color="text.primary"
							className="font-semibold"
							sx={{
								color: 'rgb(186 186 186)',
								fontSize: '16px',
								textShadow: 'black 0px 0px 10px'
							}}
						>
							{startYear} - {endYear}
						</Typography>
					</Box>
				</Box>
			</Grid>
		);
	}, []);

	const onBuildFormerStudents = useCallback((item, idx) => {
		const { name, startYear, endYear, src } = item;

		const onClick = () => {
			history.push(`/school/students/${name}`);
			window.scrollTo(0, 0);
		};

		return (
			<Grid
				item
				xs={4}
				key={idx}
				className="w-full flex flex-col items-center"
				sx={{ ':hover #classLink': { opacity: 0.75 } }}
			>
				<Box className="relative">
					<Box component="img" src={src} alt={name} sx={{ width: '360px', height: '360px' }} />
					<Box
						id="classLink"
						className="absolute top-0 w-full h-full flex justify-center items-center"
						sx={{
							zIndex: 3,
							cursor: 'pointer',
							padding: '8px 16px',
							background: theme.palette.background.light_1,
							opacity: 0
						}}
						onClick={onClick}
					>
						<Typography color="text.primary" sx={{ fontSize: '24px' }}>
							Class info
						</Typography>
					</Box>
					<Box
						className="absolute bottom-0 w-full flex flex-col items-center"
						sx={{
							zIndex: 2,
							paddingTop: '100px',
							paddingBottom: '8px',
							background: 'linear-gradient(0deg, #000000 0%, #ffffff00 75%)'
						}}
					>
						<Typography
							variant="h1"
							color="text.primary"
							className="font-semibold"
							sx={{
								color: 'rgb(186 186 186)',
								fontSize: '45px',
								backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 60%)`,
								backgroundSize: '100%',
								backgroundRepeat: 'repeat',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent'
							}}
						>
							{name}
						</Typography>
						<Typography
							variant="h1"
							color="text.primary"
							className="font-semibold"
							sx={{
								color: 'rgb(186 186 186)',
								fontSize: '16px',
								textShadow: 'black 0px 0px 10px'
							}}
						>
							Year {startYear} - {endYear}
						</Typography>
					</Box>
				</Box>
			</Grid>
		);
	}, []);

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-end',
					justifyContent: 'start',
					margin: 'auto'
				}}
				className="max-w-1200"
			>
				<Box
					component="section"
					className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
					style={{ paddingBottom: '30px', gap: '32px' }}
				>
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
						<Typography
							variant="h1"
							color="text.primary"
							className="leading-relaxed font-semibold flex items-center z-2"
							style={{
								color: 'rgb(255, 255, 255)',
								textShadow: '0 0 10px black',
								position: 'relative',
								whiteSpace: 'nowrap'
							}}
						>
							Students
						</Typography>
					</Box>

					<Box>
						<Typography variant="p" color="text.primary" sx={{ fontWeight: 200, fontSize: '20px' }}>
							Vocational dance training at the CDSH is more than just learning – it also means making
							friends and meeting like-minded people. You spend your day working closely together with
							people who share the same passion. This promotes a diversified exchange of ideas and the
							stimulation of personal development among dancers, choreographers and performers.
						</Typography>
					</Box>

					<Grid container spacing={2}>
						{currentStudents.map(onBuildStudents)}
					</Grid>
				</Box>

				<Box
					component="section"
					className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
					style={{ paddingBottom: '30px' }}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							paddingX: '25px',
							maxWidth: '1300px'
						}}
						className="w-full"
					>
						<Typography
							variant="h1"
							color="text.primary"
							className="leading-relaxed font-semibold flex items-center z-2"
							sx={{
								color: 'rgb(255, 255, 255)',
								textShadow: '0 0 10px black',
								marginBottom: '20px',
								position: 'relative',
								whiteSpace: 'nowrap'
							}}
						>
							Former students
						</Typography>
					</Box>
					<Grid container spacing={2}>
						{formerStudents.map(onBuildFormerStudents)}
					</Grid>
				</Box>
			</Box>
		</>
	);
}

export default Students;
