import { Typography } from '@mui/material';

function TitleLined(props) {
	const { title, fontSize = 80 } = props;

	/* const [textWidth, setTextWidth] = useState(0);
	const [textHeight, setTextHeight] = useState(0);
	const textRef = useRef(null);
	useEffect(() => {
		if (textRef.current) {
			const textRect = textRef.current.getBoundingClientRect();
			setTextWidth(textRect.width);
			setTextHeight(textRect.height);
		}
	}, [title]); */

	return (
		<>
			<Typography
				variant="h1"
				color="text.primary"
				className="leading-relaxed font-semibold flex items-center z-2"
				sx={{
					fontSize: { xs: '36px !important', sm: '60px !important', md: '80px !important' },
					textWrap: 'balance',
					lineHeight: 'normal',
					width: 'fit-content'
					/* color: 'rgb(255, 255, 255)', */
					/* textShadow: '0 0 10px black' */
					/* marginBottom: '20px' */
					/* position: 'relative',
					whiteSpace: 'nowrap',
					
					'&:before': {
						content: '" "',
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: 'calc(0.3125em * -0.025)',
						height: '100%',
						backgroundImage:
							"url(\"data:image/svg+xml,%3Csvg width='100' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M-17 30.5C-1 22 72-4 54 13 37.9 28.2-2.5 57.5 16 55.5s72-29 104-40' stroke='%235594DB' stroke-width='3'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v64H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A\")",
						backgroundSize: 'contain',
						backgroundRepeat: 'round',
						mixBlendMode: 'hue',
						pathLength: 0.5
					} */
				}}
			>
				{title}
			</Typography>
			{/* <Typography
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
				ref={textRef}
			>
				{title}
				<Box
					sx={{
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: 'calc(0.3125em * -0.025)',
						height: '100%',
						zIndex: -1
					}}
				>
					<svg width="200" height="1280" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<clipPath id="a">
								<path fill="#fff" d="M0 0h200v1280H0z" />
							</clipPath>
						</defs>
						<motion.g
							clipPath="url(#a)"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}

						>
							<motion.path
								d="M-17 30.5C-1 22 72-4 54 13 37.9 28.2-2.5 57.5 16 55.5s72-29 104-40"
								stroke="#5594DB"
								strokeWidth="3"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ duration: 2 }}
							/>
						</motion.g>
					</svg>
				</Box>
			</Typography> */}
		</>
	);
}

export default TitleLined;
