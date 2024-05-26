import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Button, Typography, useTheme } from '@mui/material';
import TitleLined from 'app/wireframe/sharedComponents/TitleLined';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { ns } from '../translations';

function Welcome() {
	const { t } = useTranslation(ns);
	const { button, message, title, temp } = t(ns);
	const theme = useTheme();
	const history = useHistory();

	const [isHoverJAVIER, setIsHoverJAVIER] = useState(false);
	const [isHoverSINA, setIsHoverSINA] = useState(false);
	const [isHoverRAUL, setIsHoverRAUL] = useState(false);

	const staff = [
		{
			isHover: isHoverJAVIER,
			name: 'JAVIER BÁEZ',
			path: '/school/staff/Javier Báez#staff',
			src: require('../../../../assets/img/cdsh-willkommen-1 - JAVIER.jpg'),
			translationId: 'javier',
			background: theme.palette.primary._300,
			onMouseEnter: () => setIsHoverJAVIER(true),
			onMouseLeave: () => setIsHoverJAVIER(false)
		},
		{
			isHover: isHoverSINA,
			name: 'SINA RUNDEL',
			path: '/school/staff/Sina Rundel#staff',
			src: require('../../../../assets/img/cdsh-willkommen-1 - SINA.jpg'),
			translationId: 'sina',
			background: theme.palette.primary._500,
			onMouseEnter: () => setIsHoverSINA(true),
			onMouseLeave: () => setIsHoverSINA(false)
		},
		{
			isHover: isHoverRAUL,
			name: 'RAUL VALDEZ',
			path: '/school/staff/Raul Valdez#staff',
			src: require('../../../../assets/img/cdsh-willkommen-1 - RAUL.jpg'),
			translationId: 'raul',
			background: theme.palette.primary._700,
			onMouseEnter: () => setIsHoverRAUL(true),
			onMouseLeave: () => setIsHoverRAUL(false)
		}
	];

	return (
		<Box
			component="section"
			className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
			sx={{ paddingBottom: '30px' }}
		>
			<Box className="flex flex-col items-center justify-center w-full" sx={{ marginBottom: '40px' }}>
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
					<TitleLined title={title.welcome} />
				</Box>
				<Typography
					className="mt-4 leading-relaxed"
					style={{ fontSize: '24px', color: 'rgb(186 186 186)', textShadow: '0 0 4px black' }}
				>
					{temp.line1Temp}
					<br />
					{temp.line2Temp}
				</Typography>
			</Box>
			<Box className="flex flex-row justify-center items-center max-w-1200">
				<Box className="relative">
					<Box
						component="img"
						alt="..."
						src={require('../../../../assets/img/cdsh-willkommen-1.jpg')}
						className="align-middle rounded-lg flex-1"
						sx={{ height: '450px' }}
					/>
					{staff.map(({ isHover, name, src }, idx) => (
						<Box
							key={idx}
							component="img"
							alt={name}
							src={src}
							className="align-middle rounded-lg flex-1 absolute top-0"
							sx={{ height: '450px', transition: 'all 0.2s ease', opacity: isHover ? 1 : 0 }}
						/>
					))}
				</Box>
				<Box
					className="flex flex-col flex-1"
					sx={{ paddingX: '16px', justifyContent: 'space-around', gap: '16px' }}
				>
					{staff.map(({ name, path, translationId, background, onMouseEnter, onMouseLeave }, idx) => {
						const { role, description } = message[translationId];

						return (
							<Box key={idx} className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
								<Box
									sx={{
										minWidth: '350px',
										maxWidth: '450px',
										padding: '8px 16px',
										borderRadius: '8px',
										background
									}}
								>
									<Box className="flex justify-between">
										<Typography
											variant="h6"
											color="text.primary"
											className="font-semibold"
											sx={{
												fontSize: '24px',
												alignItems: 'flex-end',
												opacity: 1
											}}
										>
											{name}
										</Typography>
										<Button
											variant="outlined"
											sx={{
												color: '#ffffff',
												borderRadius: '25px',
												borderColor: '#ffffff',
												fontSize: '12px',
												'&:hover': {
													color: '#8b8b8b',
													borderColor: '#8b8b8b'
												}
											}}
											onClick={() => history.push(path)}
											endIcon={<KeyboardArrowRightIcon />}
										>
											{button.curriculumVitae}
										</Button>
									</Box>

									<Box>
										<Typography
											variant="subtitle1"
											sx={{
												fontSize: '12px'
											}}
										>
											{role}
										</Typography>
										<Typography
											variant="p"
											color="text.secondary"
											className="mt-4 leading-relaxed"
											sx={{ fontSize: '14px' }}
										>
											{description}
										</Typography>
									</Box>
								</Box>
								{/* {isHover && (
									<Box
										id="classLink"
										className="absolute top-0 w-full h-full flex justify-center items-center"
										sx={{
											cursor: 'pointer',
											padding: '8px 16px',
											background: theme.palette.background.light_1,
											opacity: isHover ? 0.75 : 0
										}}
										onClick={() => history.push(path)}
									>
										<Typography color="text.primary" sx={{ fontSize: '24px' }}>
											Curriculum Vitae
										</Typography>
									</Box>
								)} */}
							</Box>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
}

export default Welcome;
