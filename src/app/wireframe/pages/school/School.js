import { Box, Typography, useTheme } from '@mui/material';
import TitleLined from 'app/wireframe/sharedComponents/TitleLined';

function School(props) {
	const {} = props;
	const theme = useTheme();

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
						The School
					</Typography>
				</Box>
			</Box>
		</>
	);
}

export default School;
