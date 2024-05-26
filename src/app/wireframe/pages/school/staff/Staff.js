import { Box, Divider, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { getStaffDataSources, selectStaffDataSources } from 'app/store/app/staffSlice';
import __ from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import StaffCarouselList from './StaffCarouselList';

function Staff(props) {
	const {} = props;
	const theme = useTheme();
	const { staffUrlName } = useParams();
	const { hash } = useLocation();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getStaffDataSources());
	}, []);

	const { staff, teachers, workshops, guests } = useSelector(selectStaffDataSources);

	const staffUrlPos = useMemo(
		() => staff?.findIndex(item => item.name === staffUrlName) ?? -1,
		[staff, staffUrlName]
	);
	const onBuildStaff = useCallback(
		item => {
			const { width, height, name, role, src } = item;

			return (
				<Box
					className="relative flex flex-col justify-center items-center text-center"
					sx={{
						padding: '16px',
						width: `${width}px`,
						height: `${height}px`,

						background: 'rgba( 64, 64, 64, 0.4 )',
						boxShadow: '0 8px 32px 0 rgba( 0, 0, 0, 0.4 )',
						borderRadius: '10px',
						border: '1px solid rgba( 119, 119, 119, 0.20 )'
					}}
				>
					<img alt={name} src={src} style={{ width: '100px', height: '100px' }} />
					<Typography
						variant="h1"
						color="text.primary"
						className="font-semibold"
						style={{
							color: 'rgb(186 186 186)',
							fontSize: '26px',
							width: '300px',
							backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 60%)`,
							backgroundSize: '100%',
							backgroundRepeat: 'repeat',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent'
						}}
					>
						{name}
					</Typography>
					<Typography
						variant="h1"
						color="text.primary"
						className="font-semibold"
						sx={{
							color: 'rgb(186 186 186)',
							fontSize: '16px',
							width: '300px'
						}}
					>
						{role}
					</Typography>
				</Box>
			);
		},
		[theme]
	);

	const [tabValue, setTabValue] = useState(0);
	const TAB_OPTIONS = [
		{
			name: 'All',
			subjects: []
		},
		{
			name: 'Major subjects',
			subjects: [
				'Classical ballet',
				'Contemporary',
				'Improvisation',
				'Choreography',
				'Horton Technique',
				'Graham Technique'
			]
		},
		{ name: 'Minor subjects', subjects: ['Voice', 'Feldenkrais', 'Yoga', 'Drama', 'Pilates'] },
		{ name: 'Theory subjects', subjects: ['History of Dance', 'Anatomie'] },
		{ name: 'Guest choreographers', subjects: ['Guest choreographer'] },
		{ name: 'Guest teachers', subjects: ['Guest teacher'] }
	];
	const filteredTeachers =
		tabValue === 0
			? teachers
			: teachers?.filter(({ subjects }) =>
					subjects.some(s1 => TAB_OPTIONS[tabValue].subjects.some(s2 => s1 === s2))
				);
	const teachersUrlPos = useMemo(
		() => filteredTeachers?.findIndex(item => item.name === staffUrlName) ?? -1,
		[teachers, staffUrlName]
	);
	const onBuildTeacher = useCallback(
		item => {
			const { width, height, name, subjects, src } = item;

			return (
				<Box
					className="relative flex flex-col justify-center items-center text-center"
					sx={{
						padding: '16px',
						width: `${width}px`,
						height: `${height}px`,

						background: 'rgba( 64, 64, 64, 0.4 )',
						boxShadow: '0 8px 32px 0 rgba( 0, 0, 0, 0.4 )',
						borderRadius: '10px',
						border: '1px solid rgba( 119, 119, 119, 0.20 )'
					}}
				>
					<img alt={name} src={src} style={{ width: '100px', height: '100px' }} />
					<Typography
						variant="h1"
						color="text.primary"
						className="font-semibold"
						style={{
							color: 'rgb(186 186 186)',
							fontSize: '26px',
							width: '300px',
							backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 60%)`,
							backgroundSize: '100%',
							backgroundRepeat: 'repeat',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent'
						}}
					>
						{name}
					</Typography>
					<Typography
						variant="h1"
						color="text.primary"
						className="font-semibold"
						sx={{
							color: 'rgb(186 186 186)',
							fontSize: '16px',
							width: '300px'
						}}
					>
						{subjects.join(', ')}
					</Typography>
				</Box>
			);
		},
		[theme]
	);

	const onBuildWorkshop = useCallback(
		item => {
			const { width, height, name, subjects, src } = item;

			return (
				<Box
					className="relative flex flex-col justify-center items-center text-center"
					sx={{
						padding: '16px',
						width: `${width}px`,
						height: `${height}px`,

						background: 'rgba( 64, 64, 64, 0.4 )',
						boxShadow: '0 8px 32px 0 rgba( 0, 0, 0, 0.4 )',
						borderRadius: '10px',
						border: '1px solid rgba( 119, 119, 119, 0.20 )'
					}}
				>
					<img alt={name} src={src} style={{ width: '100px', height: '100px' }} />
					<Typography
						variant="h1"
						color="text.primary"
						className="font-semibold"
						style={{
							color: 'rgb(186 186 186)',
							fontSize: '26px',
							width: '300px',
							backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 60%)`,
							backgroundSize: '100%',
							backgroundRepeat: 'repeat',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent'
						}}
					>
						{name}
					</Typography>
					<Typography
						variant="h1"
						color="text.primary"
						className="font-semibold"
						sx={{
							color: 'rgb(186 186 186)',
							fontSize: '16px',
							width: '300px'
						}}
					>
						{subjects.join(', ')}
					</Typography>
				</Box>
			);
		},
		[theme]
	);

	const onBuildGuest = useCallback(
		item => {
			const { width, height, name, subjects, src } = item;

			return (
				<Box
					className="relative flex flex-col justify-center items-center text-center"
					sx={{
						padding: '16px',
						width: `${width}px`,
						height: `${height}px`,

						background: 'rgba( 64, 64, 64, 0.4 )',
						boxShadow: '0 8px 32px 0 rgba( 0, 0, 0, 0.4 )',
						borderRadius: '10px',
						border: '1px solid rgba( 119, 119, 119, 0.20 )'
					}}
				>
					<img alt={name} src={src} style={{ width: '100px', height: '100px' }} />
					<Typography
						variant="h1"
						color="text.primary"
						className="font-semibold"
						style={{
							color: 'rgb(186 186 186)',
							fontSize: '26px',
							width: '300px',
							backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 60%)`,
							backgroundSize: '100%',
							backgroundRepeat: 'repeat',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent'
						}}
					>
						{name}
					</Typography>
					<Typography
						variant="h1"
						color="text.primary"
						className="font-semibold"
						sx={{
							color: 'rgb(186 186 186)',
							fontSize: '16px',
							width: '300px'
						}}
					>
						{subjects.join(', ')}
					</Typography>
				</Box>
			);
		},
		[theme]
	);

	if (__.isEmpty(staff)) {
		return <Typography>Vuoto</Typography>;
	}

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
					component="section"
					className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
					style={{ paddingBottom: '30px' }}
					id="staff"
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
							Staff
						</Typography>
					</Box>

					<Box>
						<Typography variant="p" color="text.primary" sx={{ fontWeight: 200, fontSize: '20px' }}>
							The directors of CDSH, Javier Báez and Raul Valdez, can both look back on many years of
							experience as artists and instructors. This gives their training program the high quality
							needed to prepare their students for careers as professional contemporary dancers.
						</Typography>
					</Box>
				</Box>

				<Box
					component="section"
					className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
					style={{ paddingBottom: '30px' }}
				>
					<StaffCarouselList
						items={staff}
						onBuildItem={onBuildStaff}
						initPos={hash === '#staff' && staffUrlPos !== -1 ? staffUrlPos : 0}
					/>
				</Box>

				<Box
					component="section"
					className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
					style={{ paddingBottom: '30px' }}
					id="teachers"
				>
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
							Teachers
						</Typography>
						<Box className="flex items-center" sx={{ gap: '16px', marginBottom: '16px' }}>
							<Typography variant="h6" color="text.secondary">
								{filteredTeachers.length} teachers
							</Typography>
							<Tabs
								value={tabValue}
								onChange={(event, value) => setTabValue(value)}
								indicatorColor="secondary"
								textColor="inherit"
								variant="scrollable"
								scrollButtons={false}
								className="h-fit min-h-32 min-w-fit"
								classes={{
									indicator: 'flex justify-center items-center bg-transparent w-full h-full'
								}}
								TabIndicatorProps={{
									children: (
										<Divider
											className="w-full h-full rounded-full border-0"
											sx={{ background: 'rgba(113, 113, 122, 0.25)' }}
										/>
									)
								}}
							>
								{TAB_OPTIONS.map((option, idx) => (
									<Tab
										key={idx}
										label={option.name}
										sx={{
											color: 'text.primary',
											textSize: '14px',
											padding: '4px 12px',
											marginX: '4px',
											/* minHeight: '32px', */
											minWidth: '100px'
										}}
										disableRipple
									/>
								))}
							</Tabs>
						</Box>
					</Box>

					<StaffCarouselList
						items={filteredTeachers}
						onBuildItem={onBuildTeacher}
						initPos={hash === '#teachers' && teachersUrlPos !== -1 ? teachersUrlPos : 0}
					/>
				</Box>

				<Box
					component="section"
					className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
					style={{ paddingBottom: '30px' }}
					id="workshops"
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
							Workshops
						</Typography>
					</Box>

					<StaffCarouselList items={workshops} onBuildItem={onBuildWorkshop} />
				</Box>

				<Box
					component="section"
					className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
					style={{ paddingBottom: '30px' }}
					id="guests"
				>
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
							Guests
						</Typography>
					</Box>

					<StaffCarouselList items={guests} onBuildItem={onBuildGuest} />
				</Box>
			</Box>
		</>
	);
}

export default Staff;
