import { Box, Typography, useTheme } from '@mui/material';
import TitleLined from 'app/wireframe/sharedComponents/TitleLined';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { LinearCarousel, PerpetualRoundCarousel } from '../../sharedComponents/carouselView';

function SoloProject(props) {
	const {} = props;
	const theme = useTheme();

	const { soloTitle } = useParams();

	const soloProjects = [
		{
			title: 'UNDER UTOPIA',
			subTitle: '2nd Schoolyear 2023',
			src: require('../../../assets/img/soloProject/UtopiaFRONT-555x555.jpg'),
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
		{
			title: 'QUANTUM REALITIES',
			subTitle: '2nd Schoolyear 2022',
			src: require('../../../assets/img/soloProject/Flyer-front-RGB-555x555.jpg'),
			description: [
				'This year, 10 women have developed short pieces that, gathered under the theme “QUANTUM REALITIES”, deal with identities, loneliness, the clownish, letting go and saying goodbye; they are about bodily reality and bodily ideals and the impossibility of achieving them without putting one’s mental and physical health at risk.',
				'The choreographers ask how sleep works, confront the threat of man-made climate catastrophe, and raise questions about female identity, as well as the (im)possibilities of self-determination of female-read bodies by addressing the repressive norm that is directed latently or explicitly, with seemingly good intentions, or with violence against female self-determination.'
			],
			students:
				'Alessandra Rigi-Luperti, Ana Ruth Salcido Roa, Aurora Neri, Isidora Soto Frías, Lourdes del Carmen Maldonado Torres, Nuna Valls Bayot, Olivia Shoesmith, Paula Planas Melgar, Sahra Maria Abbassi, Simone Wennerberg'
		},
		{
			title: 'SOMEWHERE IN BETWEEN',
			subTitle: '2nd Schoolyear 2021',
			src: require('../../../assets/img/soloProject/Flyer_Front_Quadrat-555x555.jpg'),
			description: [
				'Time for reflection',
				'Maybe now we have time to ask ourselves what we want, really want',
				'We also want to ask you, what do you want?',
				'Lot of things are a matter of perspective, let it fly or let it sink',
				'And sometimes we are not where we thought we would be, but somewhere in between',
				'If you could make a wish,',
				'Blow it in a balloon.',
				'Holding on the thread.',
				'Let it fly or let it sink.',
				'Somewhere in between,',
				'The blaze and the chills,',
				'Perhaps your habitat?',
				'Through the cycle of inside out –',
				'One in each hand.',
				'Would you make it or would it make you?',
				'What do you want?'
			],
			video: 'https://www.youtube.com/embed/SGTps6eQOrE?feature=oembed',
			galley: [
				{
					src: require('../../../assets/img/soloProject/02-UPSIDE-DOWN-thread_web.jpg'),
					label: '...'
				}
			],
			students:
				'Alessia Piccolelli, Henrike Swoboda, Ioanna Vasileiou, Larissa Fuchs, Maria Paz García, Marlen Nickel, Melanie Espersen, Niki Loulloupi, Pooja Sabarinath, Sakshi Jain, Sara Meyer, Shiyuan Sun'
		}
	];
	const soloProjectUrlPos = soloProjects.findIndex(item => item.title === soloTitle);
	const [selectedSoloProject, setSelectedSoloProject] = useState(soloProjects[0]);

	const onBuildSoloProject = useCallback(
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
							Solo Projects
						</Typography>
					</Box>

					<Box>
						<Typography variant="p" color="text.primary" sx={{ fontWeight: 200, fontSize: '20px' }}>
							In your second year of training you will develop your artistic personality not only as a
							dancer, but also as a choreographer, based on the experience gained. The own work is a
							choreographic project that is developed by the students. Within the context of this project,
							you’ll attend a composition workshop with an experienced choreographer. Short pieces will be
							developed with the assistance of the artistic director Raul Valdez, who will give advice and
							support during the mentoring units of the creation phase. These pieces will be presented on
							stage to the public on three evenings in the spring. This gives you the opportunity to
							define and refine your language as an artist and a dancer.
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
							initPos={soloProjectUrlPos !== -1 ? soloProjectUrlPos : 0}
							items={soloProjects}
							Component={onBuildSoloProject}
							onChange={idx => {
								setSelectedSoloProject(soloProjects[idx]);
							}}
							sigma={2}
						/>
					</Box>

					{selectedSoloProject && (
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
											<TitleLined title={selectedSoloProject.title} fontSize="62px" />
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
											{selectedSoloProject.subTitle}
										</Typography>
									</Box>
									<Box className="flex flex-col">
										{selectedSoloProject.description.map((txt, idx) => (
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
									{selectedSoloProject?.students && (
										<Box className="flex flex-col">
											<Typography variant="h5" color="text.primary">
												Students
											</Typography>
											<Typography
												variant="p"
												color="text.primary"
												sx={{ fontWeight: 200, fontSize: '20px' }}
											>
												{selectedSoloProject.students}
											</Typography>
										</Box>
									)}
								</Box>
								<Box className="w-full flex flex-col" sx={{ gap: '32px' }}>
									<Box
										component="img"
										src={selectedSoloProject.src}
										alt={selectedSoloProject.title}
										sx={{ width: '460px', height: '460px' /* , position: 'sticky', top: '75px' */ }}
									/>
									{selectedSoloProject.video && (
										<iframe
											src={selectedSoloProject.video}
											title={selectedSoloProject.title}
											width="460"
											height="280"
											frameBorder="0"
											allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
										/>
									)}
								</Box>
							</Box>
							{selectedSoloProject.galley && (
								<LinearCarousel
									width={450}
									height={265}
									items={selectedSoloProject.galley}
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

export default SoloProject;
