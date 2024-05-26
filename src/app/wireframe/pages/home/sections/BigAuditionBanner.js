import { Box, Typography, useTheme } from '@mui/material';
import { ns } from '../translations';
import { useTranslation } from 'react-i18next';

function BigAuditionBanner(props) {
	const { date } = props;
	const theme = useTheme();
	const { t } = useTranslation(ns);
	const { title } = t(ns);

	return (
		<Box
			component="section"
			className="flex flex-col justify-center"
			sx={{
				background: theme.palette.primary.main,
				marginTop: '40px',
				paddingY: '16px'
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: '22px', md: '42px' },
					fontWeight: 'bold',
					textAlign: 'center'
				}}
			>
				{title.auditionOpen}
			</Typography>
			<Typography
				sx={{
					fontSize: { xs: '22px', md: '42px' },
					fontWeight: 'bold',
					textAlign: 'center'
				}}
			>
				{date} - {title.applyNow}!
			</Typography>
		</Box>
	);
}

export default BigAuditionBanner;
