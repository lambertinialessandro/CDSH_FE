import { Box, Typography, /* keyframes, */ useTheme } from '@mui/material';

function FurtherTraining(props) {
	const theme = useTheme();

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'flex-start',
				justifyContent: 'center',
				width: '1200px',
				margin: 'auto',
				backgroundColor: theme.palette.background.default
			}}
		>
			<img
				alt="..."
				src={require('../assets/img/cdsh-fortbildung.jpg')}
				style={{
					position: 'absolute',
					width: '500px',
					top: '25px',
					left: '55px'
				}}
			/>
			<Box sx={{ width: '700px', margin: 'auto' }}>
				<Box sx={{ padding: '25px 100px' }}>
					<Typography variant="h5">Fortbildung</Typography>
					<Typography sx={{ paddingBottom: '12px', fontSize: '18px' }}>
						Further training in residence - FIR - is the name of the post graduate programme offered by the
						Contemporary Dance School Hamburg. This course is aimed at anyone who has completed training in
						contemporary dance and does not yet have work lined up but wants to keep training and
						developing: the customised CDSH offer could be just what you are looking for.
					</Typography>
					<Typography sx={{ paddingBottom: '12px', fontSize: '18px' }}>
						A selection of two blocks of courses is available: From January 1 to July 1, or from September 1
						to March 1. During the respective six-month further training program, you can develop your own
						individual training plan with up to 12 training units per week, selected from the various
						courses CDSH offers.
					</Typography>
					<Typography sx={{ paddingBottom: '12px', fontSize: '18px' }}>
						Furthermore, you can use the CDSH premises to realise your own dance project. If you like, you
						can present the results of your creative work at the end of the six-months within the frame of
						the “Work in Progress” performances in the spring, or the final project at the end of the CDSH
						school year in the summer. On request, experienced CDSH choreographers will provide assistance
						with up to six project-mentoring meetings. Alternatively you can chose two pieces of our house
						choreographers to be part in as a dancer.
					</Typography>
					<Typography sx={{ paddingBottom: '12px', fontSize: '18px' }}>
						Terms of admission for the postgraduate “further training in residence” program are a completed
						training in contemporary dance or equivalent professional experience. The school management
						reserves the right to decide about admission of the resident. The decision on the admission is
						being made on the basis of an audition, either in person in one of the official audition dates,
						during the running programme or via video. Costs for the six-month postgraduate course are 280
						Euro a month.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default FurtherTraining;
