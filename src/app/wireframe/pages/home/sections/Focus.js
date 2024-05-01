import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import TitleLined from 'app/wireframe/sharedComponents/TitleLined';

function Focus() {
	const theme = useTheme();

	const focus = [
		{
			name: 'Training',
			description: 'Training description',
			background: theme.palette.primary._300
		},
		{
			name: 'Staff',
			description: 'Staff description',
			background: theme.palette.primary._500
		},
		{
			name: 'Projects',
			description: 'Projects description',
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
						alignItems: 'flex-end',
						paddingX: '25px',
						maxWidth: '1300px'
					}}
					className="w-full"
				>
					<TitleLined title="Focus" />
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
						The CDSH - CONTEMPORARY DANCE SCHOOL HAMBURG is an officially recognised school for contemporary
						dance. It is the only school of its kind in northern Germany. The three years professional dance
						training focus on contemporary and modern dance techniques, improvisation, composition and on
						classical ballet. An experienced team of international dancers and instructors will help you
						achieve your goals and give you the skills needed for your professional career as a dancer
						and/or performer.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Focus;
