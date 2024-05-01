import { Box, Typography, useTheme } from '@mui/material';
import TitleLined from 'app/wireframe/sharedComponents/TitleLined';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { LinearCarousel, PerpetualRoundCarousel } from '../../sharedComponents/carouselView';

function Graduation(props) {
	const {} = props;
	const theme = useTheme();

	const { graduationTitle } = useParams();

	const graduations = [
		{
			title: 'RE:SET',
			subTitle: 'Graduates 2022',
			src: require('../../../assets/img/graduations/Flyer-AP-2022-vorne-555x555.jpg'),
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
		},
		{
			title: 'ON THE TRAIL',
			subTitle: 'Graduates 2021',
			src: require('../../../assets/img/graduations/On-the-trail-Final-project-ohne_Qua-555x555.jpg'),
			description: [
				'on the trail describes a situation after a shock, a moment in which things are put together again after having been shattered or after having broken apart. There is a potential in these seemingly chaotic situations that contradict our normality: You might be able to grasp the essence of things and normality is to be redefined.',
				'Structures develop, we tend to establish habits and a clear definition of normality. What is being perceived as normal though is the result of a constant, sometimes unconscious reproduction of what we know, what we define as right and wrong, of what’s desirable and productive. We’re functioning and forget to question.',
				'When a system is shaken there might open the possibility to have a look into the void between the fragments and broken pieces, to see the other side of our reality and to perceive the single components which our system is composed of. They wouldn’t be visible in the functioning system.',
				'What does it mean to keep on going after an eventful time? What can we learn? How can we rethink and adjust to new circumstances? How to rebel against the old and how to give a voice to the forgotten? In any case the result will be a transformation, a new consciousness and the beginning of a new journey.'
			]
		},
		{
			title: 'LA COLMENA',
			subTitle: 'Graduates 2020',
			src: require('../../../assets/img/graduations/AP2020-Flyer-EN-vorne-555x555.jpg'),
			description: [
				'la colmena, the Spanish word for beehive, describes a space where energy is concentrated, where apparent chaos is directed towards a common goal, because everybody knows exactly what he or she must do. This generates a considerable momentum that unites the potential of diversity in a tremendous flow of energy. Everyone works on the same vision, each in his or her own way. The result will be flawless, because everyone takes full responsibility for what he or she does and gives everything for what needs to be done.',
				'How do these bodies coordinate in space?  How do they relate to each other, to the architecture, which are both the result and the limitation of the movement of these bodies?  A structure that lies beneath the chaos, symbolising the order that underlies it, the fundamental principle of ‘functioning chaos’ and the basis for its emergence and continued existence, for producing and reproducing.',
				'When the graduates of 2020 engage in dance, they set something of great importance in motion. A complex and multi-layered process begins in which the dedication of each individual is ultimately decisive and essential. In the course of their training at the CDSH, the dancers have connected without putting their individuality at risk. They have worked excessively and tirelessly, combining their diversity into a powerful whole.',
				'This year’s graduate class will work with three choreographers/ choreographer teams: Raul Valdez, our artistic director, and two international guest choreographers/ choreographer teams, Stefano Fardelli from Italy and Dor Mamalia together with Dariusz Nowak from Israel/Germany and Poland/Germany.'
			]
		},
		{
			title: 'MESHED',
			subTitle: 'Graduates 2016',
			src: require('../../../assets/img/graduations/cdsh-ap2016-teaser-555x555.jpg'),
			description: [
				'meshed describes entangled or interwoven networks. A structure that develops from individual elements and coordinates into a new and higher unit.',
				'The final project highlights the path that leads there. Every dancer is an individual person with a personal artistic personality of their own; each of them is involved in a process of development and each of them contributes a different note. Will the students be able to achieve a coordinated and harmonious sound? Is there a subtle connection that goes in the same direction despite all the differences? Do we pursue a mutual truth? Does harmony exist in disharmony?'
			],
			video: 'https://player.vimeo.com/video/171835132?title=0&byline=0&portrait=0',
			galley: [
				{
					src: require('../../../assets/img/graduations/cdsh-ap2016-1.jpg'),
					label: '...'
				},
				{
					src: require('../../../assets/img/graduations/cdsh-ap2016-2.jpg'),
					label: '...'
				},
				{
					src: require('../../../assets/img/graduations/cdsh-ap2016-3.jpg'),
					label: '...'
				}
			]
		},
		{
			title: 'ANDERER­SEITS',
			subTitle: 'Graduates 2015',
			src: require('../../../assets/img/graduations/cdsh-ap2015-teaser-555x555.jpg'),
			description: [
				'On the other hand: A motto that leaves various directions open, presents opportunities not to lose sight of the goal, which however does not exclude being on the wrong track.  ANDERERSEITS is a term that stands for contradiction, for something else, for alternatives that must always be available. In life as in dance.'
			],

			video: 'https://player.vimeo.com/video/129704486?title=0&byline=0&portrait=0',
			galley: [
				{
					src: require('../../../assets/img/graduations/cdsh-ap2015-1.jpg'),
					label: '...'
				},
				{
					src: require('../../../assets/img/graduations/cdsh-ap2015-2.jpg'),
					label: '...'
				},
				{
					src: require('../../../assets/img/graduations/cdsh-ap2015-3.jpg'),
					label: '...'
				}
			]
		}
	];
	const graduationUrlPos = graduations.findIndex(item => item.title === graduationTitle);
	const [selectedGraduation, setSelectedGraduation] = useState(graduations[0]);

	const onBuildGraduations = useCallback(
		item => {
			const { width, height, title, subTitle, src } = item;

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
					<img alt={title} src={src} style={{ width: '100px', height: '100px' }} />
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
						{title}
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
						{subTitle}
					</Typography>
				</Box>
			);
		},
		[theme]
	);

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
					style={{ paddingBottom: '30px', gap: '32px' }}
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
								position: 'relative',
								whiteSpace: 'nowrap'
							}}
						>
							Graduations
						</Typography>
					</Box>

					<Box>
						<Typography variant="p" color="text.primary" sx={{ fontWeight: 200, fontSize: '20px' }}>
							Every school year ends with a final project. For the graduates this is the last performance
							they will be giving as students at the CDSH. For the first and second year students it is a
							way of presenting the pieces they have worked on in the course of the year to an audience.
							In their last semester, the graduate class works together with two or three internationally
							known guest choreographers. They develop pieces and have the opportunity to present the
							artistic and technical skills they have acquired in the course of four performances.
						</Typography>
					</Box>
				</Box>

				<Box
					component="section"
					className="pt-8 md:pt-40 flex flex-col items-center justify-center w-full"
					style={{ paddingBottom: '40px' }}
				>
					<Box className="w-full" sx={{ paddingBottom: '30px' }}>
						<PerpetualRoundCarousel
							width={350}
							height={200}
							initPos={graduationUrlPos !== -1 ? graduationUrlPos : 0}
							items={graduations}
							Component={onBuildGraduations}
							onChange={idx => {
								setSelectedGraduation(graduations[idx]);
							}}
							sigma={2}
						/>
					</Box>

					{selectedGraduation && (
						<>
							<Box className="flex items-start" sx={{ gap: '46px' }}>
								<Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'flex-start',
											alignItems: 'center',
											gap: '16px',
											maxWidth: '1300px'
										}}
										className="w-full"
									>
										<motion.div
											initial={{ opacity: 0, y: 40 }}
											animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
										>
											<TitleLined title={selectedGraduation.title} fontSize="62px" />
										</motion.div>
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
											{selectedGraduation.subTitle}
										</Typography>
									</Box>
									<Box className="flex flex-col">
										{selectedGraduation.description.map((txt, idx) => (
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
									{selectedGraduation?.students && (
										<Box className="flex flex-col">
											<Typography variant="h5" color="text.primary">
												Students
											</Typography>
											<Typography
												variant="p"
												color="text.primary"
												sx={{ fontWeight: 200, fontSize: '20px' }}
											>
												{selectedGraduation.students}
											</Typography>
										</Box>
									)}
								</Box>
								<Box className="w-full flex flex-col" sx={{ gap: '32px' }}>
									<Box
										component="img"
										src={selectedGraduation.src}
										alt={selectedGraduation.title}
										sx={{ width: '460px', height: '460px' /* , position: 'sticky', top: '75px' */ }}
									/>
									{selectedGraduation.video && (
										<iframe
											src={selectedGraduation.video}
											title={selectedGraduation.title}
											width="460"
											height="280"
											frameBorder="0"
											allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
										/>
									)}
								</Box>
							</Box>
							{selectedGraduation.galley && (
								<LinearCarousel
									width={450}
									height={265}
									items={selectedGraduation.galley}
									delta={2}
									loop
									Component={image => {
										const { width, height, src, label } = image;

										return (
											<Box
												component="img"
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
							)}
						</>
					)}
				</Box>
			</Box>
		</>
	);
}

export default Graduation;
