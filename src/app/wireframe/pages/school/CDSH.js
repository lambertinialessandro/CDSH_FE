import { Box, Typography } from '@mui/material';
import { getShowsInPage } from 'app/store/app/eventStore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function CDSH(props) {
	/* const {} = props;
	const theme = useTheme(); */
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getShowsInPage());
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
							marginBottom: '20px',
							position: 'relative',
							whiteSpace: 'nowrap'
						}}
					>
						CDSH
					</Typography>
				</Box>

				<Box>
					<Typography variant="h6" color="text.primary" sx={{ fontSize: '24px' }}>
						The training program at the CDSH combines the diversity of contemporary dance with the
						individual artistic needs of the students and the demands of the international dance sector.
					</Typography>
					<Typography variant="p" color="text.primary" sx={{ fontWeight: 200, fontSize: '20px' }}>
						The Contemporary Dance School Hamburg offers contemporary dance at a high level and the
						development of your artistic personality in close dialogue with experienced mentors from all
						over the world. The daily training prepares you for your career as a professional dancer.
					</Typography>
					<Typography variant="p" color="text.primary" sx={{ fontWeight: 200, fontSize: '20px' }}>
						As an officially recognised school for contemporary dance, the CDSH offers a three-year on-hand
						dance training, gets you involved with other artists and cooperates with many relevant sectors
						in dance education. You're challenged and motivated to develop technically, artistically and
						creatively throughout the process. Choreographic project work gives you a feeling for
						professional work and you can gather stage experience with regular theatrical appearances. An
						experienced team of artists and instructors provide you with the support you need to develop
						your potential during your training.
					</Typography>
				</Box>
			</Box>
		</>
	);
}

export default CDSH;
