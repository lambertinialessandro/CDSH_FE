import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ns } from '../translations';

function AuditionBanner(props) {
	const { date } = props;
	const theme = useTheme();
	const { t } = useTranslation(ns);
	const { title } = t(ns);

	return (
		<Box
			component="section"
			className="flex justify-center"
			style={{
				background: theme.palette.primary.main
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: '22px', md: '32px' },
					fontWeight: 'bold',
					paddingY: '5px',
					textAlign: 'center'
				}}
			>
				{title.audition} - {title.openNow} - {date} - {title.moreInformations}
			</Typography>
		</Box>
	);
}

export default AuditionBanner;
