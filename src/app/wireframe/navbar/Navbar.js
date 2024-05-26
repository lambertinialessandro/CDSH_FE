import { Box, useTheme } from '@mui/material';
import generateNavigation from 'app/navigation/generateNavigation';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import LargeNavbar from './LargeNavbar';
import SmallNavbar from './SmallNavbar';
/* import { ns } from './translations'; */
import { ns as ns_navigation } from '../../navigation/translations';

function Navbar(props) {
	const { fixed } = props;
	const { t } = useTranslation([/* ns, */ ns_navigation]);
	const { title } = t(ns_navigation);

	const socials = useMemo(
		() => [
			{ name: 'instagram', icon: 'fa-instagram', path: 'https://www.instagram.com/_cdsh_/' },
			{
				name: 'facebook',
				icon: 'fa-facebook',
				path: 'https://www.facebook.com/cdsh.contemporarydanceschoolhamburg/'
			},
			{ name: 'twitter', icon: 'fa-x-twitter', path: 'https://twitter.com/CDSH_tweet' },
			{
				name: 'youtube',
				icon: 'fa-youtube',
				path: 'https://www.youtube.com/@cdsh-contemporarydancescho3235'
			},
			{ name: 'vimeo', icon: 'fa-vimeo', path: 'https://vimeo.com/cdsh' }
		],
		[]
	);
	const navigationPages = useMemo(() => generateNavigation(title), [title]);

	const theme = useTheme();

	return (
		<>
			<Box sx={{ marginBottom: fixed && '66px' }}>
				<nav
					style={{
						background: theme.palette.background.default
					}}
					className={`top-0 z-50 w-full flex flex-wrap items-center justify-between px-4 ${fixed && 'fixed'}`}
				>
					<Box className="lg:hidden w-full">
						<SmallNavbar socials={socials} pages={navigationPages} />
					</Box>
					<Box className="hidden lg:block w-full">
						<LargeNavbar socials={socials} pages={navigationPages} />
					</Box>
				</nav>
			</Box>
		</>
	);
}

export default Navbar;
