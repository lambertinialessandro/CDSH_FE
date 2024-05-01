import { Link, Typography, useTheme } from '@mui/material';
import ExternalLink from 'app/components/Buttons/ExternalLink';
import { useMemo } from 'react';

function Footer(props) {
	const { fixed } = props;

	const theme = useTheme();

	const socials = useMemo(
		() => [
			{
				name: 'instagram',
				icon: 'fa-instagram',
				color: 'text-pink-400',
				path: 'https://www.instagram.com/_cdsh_/'
			},
			{
				name: 'facebook',
				icon: 'fa-facebook',
				color: 'text-sky-600',
				path: 'https://www.facebook.com/cdsh.contemporarydanceschoolhamburg/'
			},
			{
				name: 'twitter',
				icon: 'fa-x-twitter',
				color: 'text-blueGray-800',
				path: 'https://twitter.com/CDSH_tweet'
			},
			{
				name: 'youtube',
				icon: 'fa-youtube',
				color: 'text-red-500',
				path: 'https://www.youtube.com/@cdsh-contemporarydancescho3235'
			},
			{
				name: 'vimeo',
				icon: 'fa-vimeo',
				color: 'text-blueGray-800',
				path: 'https://vimeo.com/cdsh'
			}
		],
		[]
	);

	return (
		<>
			<footer
				className={`relative pt-8 pb-6 ${fixed && 'w-full fixed -bottom-1'}`}
				style={{ background: theme.palette.background.default }}
			>
				{/* <div
					className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
					style={{ transform: 'translateZ(0)' }}
				>
					<svg
						style={{ bottom: '-1px' }}
						className="absolute overflow-hidden"
						preserveAspectRatio="none"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
					>
						<polygon
							className="fill-current"
							style={{ color: theme.palette.background.default }}
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div> */}

				<div className="container mx-auto px-4">
					<hr className="my-6 border-blueGray-300" />
					<div className="flex flex-wrap text-center lg:text-left">
						<div className="w-full lg:w-6/12 px-4">
							<Typography variant="h4" className="text-3xl font-semibold" color="text.primary">
								Let's keep in touch!
							</Typography>
							<div className="mt-6 lg:mb-0 mb-6 flex justify-center lg:justify-start items-center">
								{socials.map(({ name, icon, path }) => (
									<ExternalLink key={name} path={path} icon={icon} fontSize="18px" />
								))}
							</div>
						</div>
						<div className="w-full lg:w-6/12 px-4">
							<div className="flex flex-wrap items-top mb-6">
								<div className="w-full lg:w-6/12 px-4 ml-auto">
									<Typography
										variant="h6"
										className="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
										color="text.primary"
									>
										KONTAKT
									</Typography>
									<ul className="list-unstyled">
										<li>
											<Typography
												variant="p"
												className="block pb-2 text-sm"
												color="text.secondary"
											>
												CDSH - Contemporary Dance School Hamburg GmbH
											</Typography>
										</li>
										<li>
											<Typography
												variant="p"
												className="block pb-2 text-sm"
												color="text.secondary"
											>
												Stresemannstraße 374 b in der »Alten Dosenfabrik«
											</Typography>
										</li>
										<li>
											<Typography
												variant="p"
												className="block pb-2 text-sm"
												color="text.secondary"
											>
												22761 Hamburg
											</Typography>
										</li>
										<li>
											<Typography
												variant="p"
												className="block pb-2 text-sm"
												color="text.secondary"
											>
												Tel. +49 (0)40 41924560
											</Typography>
										</li>
										<li>
											<Typography
												variant="p"
												className="block pb-2 text-sm"
												color="text.secondary"
											>
												info@cdsh.de
											</Typography>
										</li>
									</ul>
								</div>
								<div className="w-full lg:w-4/12 px-4">
									<Typography
										variant="h6"
										className="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
										color="text.primary"
									>
										Other Links
									</Typography>
									<ul className="list-unstyled">
										<li>
											<Link
												target="_blank"
												rel="noreferrer"
												href="/"
												sx={{ textDecoration: 'none' }}
											>
												<Typography
													variant="p"
													color="primary"
													sx={{
														':hover': {
															color: theme.palette.primary.dark
														}
													}}
												>
													Impressum
												</Typography>
											</Link>
										</li>
										<li>
											<Link
												target="_blank"
												rel="noreferrer"
												href="/"
												sx={{ textDecoration: 'none' }}
											>
												<Typography
													variant="p"
													color="primary"
													sx={{
														':hover': {
															color: theme.palette.primary.dark
														}
													}}
												>
													Datenschutz
												</Typography>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<hr className="my-6 border-blueGray-300" />
					<div className="flex flex-wrap items-center md:justify-between justify-center">
						<div className="w-full md:w-4/12 px-4 mx-auto text-center">
							<div className="text-sm font-semibold py-1">
								<Typography variant="p" color="text.primary">
									Copyright © {new Date().getFullYear()} by CDSH.
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
