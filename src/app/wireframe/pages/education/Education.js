import { Box, useTheme } from '@mui/material';
import TitleLined from 'app/wireframe/sharedComponents/TitleLined';

function Education(props) {
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
				<TitleLined title="Education" />
			</Box>
		</>
	);
}

export default Education;
