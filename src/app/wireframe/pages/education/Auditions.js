import { Box, useTheme } from '@mui/material';
import TitleLined from 'app/wireframe/sharedComponents/TitleLined';

function Auditions(props) {
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
				<TitleLined title="Auditions" />
			</Box>
		</>
	);
}

export default Auditions;
