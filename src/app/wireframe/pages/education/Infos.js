import { Box, useTheme, Typography } from '@mui/material';
import TitleLined from 'app/wireframe/sharedComponents/TitleLined';

function Infos(props) {
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
				<TitleLined title="Infos" />
				<Typography
					className="mt-4 leading-relaxed"
					style={{ fontSize: '24px', color: 'rgb(186 186 186)', textShadow: '0 0 4px black' }}
				>
					⚠️ Temporary text 🛠️ - insert text here - to be provided/decided
					<br />
					This is just some random text to show how it would appear on the web page in a normal behavior
				</Typography>
			</Box>
		</>
	);
}

export default Infos;
