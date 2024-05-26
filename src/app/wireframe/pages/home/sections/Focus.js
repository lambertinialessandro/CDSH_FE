import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import TitleLined from 'app/wireframe/sharedComponents/TitleLined';
import { useTranslation } from 'react-i18next';
import { ns } from '../translations';

function Focus() {
	const { t } = useTranslation(ns);
	const { message, title, temp } = t(ns);
	const theme = useTheme();

	const focus = [
		{
			name: title.training,
			description: message.trainingDescription,
			background: theme.palette.primary._300
		},
		{
			name: title.staff,
			description: message.staffDescription,
			background: theme.palette.primary._500
		},
		{
			name: title.projects,
			description: message.projectsDescription,
			background: theme.palette.primary._700
		}
	];

	return (
		<Box component="section" className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full">
			<Box className="flex items-center justify-center w-full">
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
					<TitleLined title={title.focus} />
				</Box>
			</Box>
			<Box className="flex flex-row justify-center items-center max-w-1200">
				<Box
					className="flex flex-col flex-1"
					sx={{ paddingX: '16px', justifyContent: 'space-around', gap: '16px' }}
				>
					{focus.map(({ name, description, background }, idx) => (
						<Box key={idx} sx={{ minWidth: '350px', maxWidth: '450px' }}>
							<Box
								className="flex flex-col justify-center w-full text-center"
								sx={{
									padding: '8px 16px',
									borderRadius: '8px',
									background
								}}
							>
								<Typography
									variant="h6"
									color="text.primary"
									className="font-semibold"
									sx={{
										fontSize: '34px',
										alignItems: 'flex-center',
										opacity: 1
									}}
								>
									{name}
								</Typography>

								<Typography
									variant="p"
									color="text.secondary"
									className="leading-relaxed"
									sx={{ fontSize: '14px' }}
								>
									{description}
								</Typography>
							</Box>
						</Box>
					))}
				</Box>
				<Box className="flex-1">
					<Typography
						className="mt-4 leading-relaxed"
						style={{ fontSize: '24px', color: 'rgb(186 186 186)', textShadow: '0 0 4px black' }}
					>
						{temp.line1Temp}
						<br />
						{temp.line2Temp}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Focus;
