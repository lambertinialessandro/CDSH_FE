import { Box, Typography, useTheme } from '@mui/material';
import { LinearCarousel } from 'app/wireframe/sharedComponents/carouselView';
import { useParams } from 'react-router';

function Class(props) {
	const {} = props;
	const theme = useTheme();
	const { className } = useParams();

	const classes = [
		{
			name: 'Ho’omau',
			startYear: 2022,
			endYear: 2025,
			src: require('../../../assets/img/class/Hoomau-IMG_1781-360x360.jpg'),
			description: [
				'Ho’omau signifies resilience and perseverance. As a class, we value and trust the process of growth, in the many different forms it may come in.',
				'By understanding that our journeys as artists won’t always be linear or necessarily smooth sailing, we are able to steady each other and carry on together.',
				'We are a group who keeps moving forward, no matter the obstacles, and in doing so, learns how to take care of each other as dancers and most importantly, as people.'
			],
			students:
				'Agnese Fornara Erbetta, Alanna Reimpell Bravo, Alessia Marra, Cristina Vaino, Daria Barbone, Denise Landini, Ellen Burgess, Emir García Pineda, Gina Kudzai Marange, Haeyeon Kang, Livi Brüggmann, Luisa Fernanda Rivas Castillo, Nathalia Gómez Reséndiz, Noé Garrick, Oladé Roland Rodolpho Sagbo, Tatjana Walter, Wendy Yeh López,  Clara Bähr,  Edwin E. Sánchez,  Katherine Aileen Osalde Lezama,  Madeleine Julie Reichert'
		},
		{
			name: 'Unalome',
			startYear: 2021,
			endYear: 2024,
			src: require('../../../assets/img/class/Unalome_web-360x360.jpg'),
			description: [
				'In Bhuddist belief there is a line-shaped symbol that represents the path of life. This symbol is a visual metaphor that stands for our search for awareness and satisfaction in life. It starts with birth (the midpoint of the spiral) and goes through learning, chaos and struggle to end with enlightenment (the point at the end of the line). Each new whorl represents another phase of life.',
				'Unalome as a symbol for our group stands for the idea that we, as very different individuals, are following paths that don’t necessarily have to be always straight, perfectly in line and always in the right direction in order to reach our goals and fulfil our dreams. Filled with challenges, missteps and lessons, the path can be straight as well as it can be circular or curvy. Each individual in our group comes from a very different part of the world but here we can walk together. We look forward to a time when we can learn from each other, inspire , encourage and empower each other and work creatively in our shared passion for dance.'
			],
			students:
				'Ariane Fryc, Betsy Contreras Lara, Charlotte Maria Kiparski, Emilie Heitmann, Giorgia Varano, Hannah Elisabeth Koidl, Hyunjin Lee, Lara Sophia Brenneisen, Lisa Natalia Torres Luna, Mariana Martínez Salgado, Miriam Hirt, Noa Calcagno, Virendra Nishad',
			photos: [''],
			soloProject: {
				title: 'UNDER UTOPIA',
				subTitle: '2nd Schoolyear 2023',
				src: require('../../../assets/img/class/UtopiaFRONT-555x555.jpg'),
				description: [
					'Utopia is a place of longing, projection of our dreams and desires, a promise and the reason why we continue, transcend and move forward.',
					'„Utopia lies at the horizon.',
					'When I draw nearer by two steps,',
					'it retreats two steps.',
					'If I proceed ten steps forward,',
					'It swiftly slips ten steps ahead.',
					'No matter how far I go, I can never reach it.',
					'What, then, is the purpose of utopia?',
					'It is to cause us to advance.“ (Eduardo Galeano)',
					'14 human beings share in short pieces their paths of what’s underneath their own utopias: the steps, the obstacles, the fears, the achievements, their trips and all that lies under the impulse to keep moving forward.',
					'What’s under your utopia?'
				],
				video: 'https://player.vimeo.com/video/825270512?dnt=1&amp;app_id=122963',
				students:
					'Betsy Contreras Lara, Charlotte Maria Kiparski, Emilie Heitmann, Francisco Javier Hernández, Friscarlin Nathaly Constance Alcántara, Giorgia Varano, Hannah Elisabeth Koidl, Hyunjin Lee, Lara Sophia Brenneisen, Lisa Natalia Torres Luna, Mariana Martínez Salgado, Miriam Hirt, Noa Calcagno, Virendra Nishad'
			},
			finalProject: {
				title: 'RE:SET',
				subTitle: 'Graduates 2022',
				src: require('../../../assets/img/class/Flyer-AP-2022-vorne-555x555.jpg'),
				description: [
					'People in exhausted societies have always yearned for the new, the different and the better.',
					'The current social and ecological crisis, that involves economic hardship for some and an existence-threatening catastrophe for others, is marked by a collective search for a reset button for civilisation. In chaos and catastrophe lies a utopian potential for a new beginning.',
					'A re:set is a procedure to bring an electronic system to a defined initial state. This may be necessary if the system no longer functions properly and no longer responds to the usual inputs.',
					'What could be such an imaginary starting point? A utopian society, a collective consciousness that we are all part of a whole and everything is interconnected at its core. That we share our place in the universe with others. A state achieved by realising that our behaviour, the way we have treated the world and each other, has inevitably come to a crisis.',
					'Instead, we change perspective(s), find creative solutions together, make peace with the ghosts of the past and connect to be ready for what is to come!',
					'A tabula rasa – empty and receptive like a blank slate! The possibilities would be unlimited!',
					'Right now we need strong utopias!',
					'“Everyone creates the world anew with his birth, because everyone is the world”.',
					'(Rainer Maria Rilke)',
					'With the topic re:set we’re opening an experimental ground for questions related to the utopian, for imaginations of a future – or of various futures, for dreams of new beginnings and for the ambivalent wish to make peace with the past and unify with what can’t be undone.'
				]
			}
		}
	];

	const selectedClass = classes.find(c => c.name === className);
	if (!selectedClass) {
		return (
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
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							paddingX: '25px',
							maxWidth: '1300px'
						}}
						className="w-full"
					>
						<Typography
							variant="h1"
							color="text.primary"
							className="leading-relaxed font-semibold flex items-center z-2"
							sx={{
								color: 'rgb(255, 255, 255)',
								textShadow: '0 0 10px black',
								marginBottom: '20px',
								position: 'relative',
								textAlign: 'center'
							}}
						>
							The class
						</Typography>
						<Typography
							variant="h1"
							sx={{
								backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 60%)`,
								backgroundSize: '100%',
								backgroundRepeat: 'repeat',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent'
							}}
						>
							{className}
						</Typography>
						<Typography
							variant="h1"
							color="text.primary"
							className="leading-relaxed font-semibold flex items-center z-2"
							sx={{
								color: 'rgb(255, 255, 255)',
								textShadow: '0 0 10px black',
								marginBottom: '20px',
								position: 'relative',
								textAlign: 'center'
							}}
						>
							doesn't exist
						</Typography>
					</Box>
				</Box>
			</Box>
		);
	}

	const galley = [
		{
			label: '...',
			src: require('../../../assets/img/galley/cdsh-galley-1-1.jpg')
		},
		{
			label: '...',
			src: require('../../../assets/img/galley/cdsh-galley-2-1.jpg')
		},
		{
			label: '...',
			src: require('../../../assets/img/galley/cdsh-galley-3-1.jpg')
		},
		{
			label: '...',
			src: require('../../../assets/img/galley/cdsh-galley-4-1.jpg')
		},
		{
			label: '...',
			src: require('../../../assets/img/galley/cdsh-galley-5-1.jpg')
		},
		{
			label: '...',
			src: require('../../../assets/img/galley/cdsh-galley-6-1.jpg')
		},
		{
			label: '...',
			src: require('../../../assets/img/galley/cdsh-galley-7-1.jpg')
		},
		{
			label: '...',
			src: require('../../../assets/img/galley/cdsh-galley-8-1.jpg')
		},
		{
			label: '...',
			src: require('../../../assets/img/galley/cdsh-galley-9-1.jpg')
		}
	];

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
				>
					<Box className="flex items-start" sx={{ gap: '46px' }}>
						<Box
							component="img"
							src={selectedClass.src}
							alt={selectedClass.name}
							sx={{ width: '460px', height: '460px' /* , position: 'sticky', top: '75px' */ }}
						/>
						<Box>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'flex-end',
									alignItems: 'center',
									gap: '16px',
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
										position: 'relative',
										whiteSpace: 'nowrap'
									}}
								>
									Class
								</Typography>
								<Typography
									variant="h1"
									sx={{
										backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 60%)`,
										backgroundSize: '100%',
										backgroundRepeat: 'repeat',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent'
									}}
								>
									{selectedClass.name}
								</Typography>
							</Box>

							<Box
								sx={{
									display: 'flex',
									justifyContent: 'flex-end',
									alignItems: 'center',
									gap: '16px',
									paddingX: '25px',
									maxWidth: '1300px',
									marginBottom: '20px'
								}}
								className="w-full"
							>
								<Typography
									variant="h1"
									color="text.primary"
									className="font-semibold"
									sx={{
										color: 'rgb(186 186 186)',
										fontSize: '26px'
									}}
								>
									{selectedClass.startYear} - {selectedClass.endYear}
								</Typography>
							</Box>

							<Box className="flex flex-col">
								{selectedClass.description.map((txt, idx) => (
									<Typography
										key={idx}
										variant="p"
										color="text.primary"
										sx={{ fontWeight: 200, fontSize: '20px' }}
									>
										{txt}
									</Typography>
								))}
							</Box>
						</Box>
					</Box>
				</Box>

				<Box
					component="section"
					className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
					style={{ paddingBottom: '30px' }}
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
							sx={{
								color: 'rgb(255, 255, 255)',
								textShadow: '0 0 10px black',
								marginBottom: '20px',
								position: 'relative',
								whiteSpace: 'nowrap'
							}}
						>
							Students
						</Typography>
					</Box>

					<Box className="flex">
						<Typography variant="p" color="text.primary" sx={{ fontWeight: 200, fontSize: '20px' }}>
							{selectedClass.students}
						</Typography>
						<Box
							className="flex flex-col items-center justify-center max-w-full"
							sx={{ flex: '1 0 700px' }}
						>
							<LinearCarousel
								width={200}
								height={200}
								items={galley}
								delta={2}
								loop
								Component={image => {
									const { width, height, src, label } = image;

									return (
										<Box
											component="img"
											className="max-w-full"
											sx={{
												width: `${width}px`,
												height: `${height}px`,
												display: 'block',
												objectFit: 'cover'
											}}
											src={src}
											alt={label}
										/>
									);
								}}
							/>
						</Box>
					</Box>
				</Box>

				{selectedClass.soloProject && (
					<Box
						component="section"
						className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
						style={{ paddingBottom: '30px' }}
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
								sx={{
									color: 'rgb(255, 255, 255)',
									textShadow: '0 0 10px black',
									marginBottom: '20px',
									position: 'relative',
									whiteSpace: 'nowrap'
								}}
							>
								Solo Project
							</Typography>
						</Box>

						<Box className="flex items-start" sx={{ gap: '46px' }}>
							<Box className="w-full flex flex-col" sx={{ gap: '32px' }}>
								<Box
									component="img"
									src={selectedClass.soloProject.src}
									alt={selectedClass.soloProject.title}
									sx={{ width: '460px', height: '460px' /* , position: 'sticky', top: '75px' */ }}
								/>
								{selectedClass.soloProject.video && (
									<iframe
										src={selectedClass.soloProject.video}
										title={selectedClass.soloProject.title}
										width="460"
										height="280"
										allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
									/>
								)}
							</Box>
							<Box>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
										alignItems: 'center',
										gap: '16px',
										paddingX: '25px',
										maxWidth: '1300px'
									}}
									className="w-full"
								>
									<Typography
										variant="h1"
										sx={{
											fontSize: '52px',
											backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 60%)`,
											backgroundSize: '100%',
											backgroundRepeat: 'repeat',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent'
										}}
									>
										{selectedClass.soloProject.title}
									</Typography>
								</Box>

								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
										alignItems: 'center',
										gap: '16px',
										paddingX: '25px',
										maxWidth: '1300px',
										marginBottom: '20px'
									}}
									className="w-full"
								>
									<Typography
										variant="h1"
										color="text.primary"
										className="font-semibold"
										sx={{
											color: 'rgb(186 186 186)',
											fontSize: '26px'
										}}
									>
										{selectedClass.soloProject.subTitle}
									</Typography>
								</Box>
								<Box className="flex flex-col">
									{selectedClass.soloProject.description.map((txt, idx) => (
										<Typography
											key={idx}
											variant="p"
											color="text.primary"
											sx={{ fontWeight: 200, fontSize: '20px' }}
										>
											{txt}
										</Typography>
									))}
								</Box>
							</Box>
						</Box>
					</Box>
				)}

				{selectedClass.finalProject && (
					<Box
						component="section"
						className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
						style={{ paddingBottom: '30px' }}
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
								sx={{
									color: 'rgb(255, 255, 255)',
									textShadow: '0 0 10px black',
									marginBottom: '20px',
									position: 'relative',
									whiteSpace: 'nowrap'
								}}
							>
								Final Project
							</Typography>
						</Box>

						<Box className="w-full flex items-start" sx={{ gap: '46px' }}>
							<Box>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-start',
										alignItems: 'center',
										gap: '16px',
										paddingX: '25px',
										maxWidth: '1300px'
									}}
									className="w-full"
								>
									<Typography
										variant="h1"
										sx={{
											fontSize: '52px',
											backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 60%)`,
											backgroundSize: '100%',
											backgroundRepeat: 'repeat',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent'
										}}
									>
										{selectedClass.finalProject.title}
									</Typography>
								</Box>

								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-start',
										alignItems: 'center',
										gap: '16px',
										paddingX: '25px',
										maxWidth: '1300px',
										marginBottom: '20px'
									}}
									className="w-full"
								>
									<Typography
										variant="h1"
										color="text.primary"
										className="font-semibold"
										sx={{
											color: 'rgb(186 186 186)',
											fontSize: '26px'
										}}
									>
										{selectedClass.finalProject.subTitle}
									</Typography>
								</Box>
								<Box className="flex flex-col">
									{selectedClass.finalProject.description.map((txt, idx) => (
										<Typography
											key={idx}
											variant="p"
											color="text.primary"
											sx={{ fontWeight: 200, fontSize: '20px' }}
										>
											{txt}
										</Typography>
									))}
								</Box>
							</Box>
							<Box className="w-full flex flex-col" sx={{ gap: '32px' }}>
								<Box
									component="img"
									src={selectedClass.finalProject.src}
									alt={selectedClass.finalProject.title}
									sx={{ width: '460px', height: '460px' /* , position: 'sticky', top: '75px' */ }}
								/>
								{selectedClass.finalProject.video && (
									<iframe
										src={selectedClass.finalProject.video}
										title={selectedClass.finalProject.title}
										width="460"
										height="280"
										allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
									/>
								)}
							</Box>
						</Box>
					</Box>
				)}
			</Box>
		</>
	);
}

export default Class;
