import { Box, Icon, IconButton, Typography } from '@mui/material';
import ExternalLink from 'app/components/Buttons/ExternalLink';
import DropdownOpened from 'app/components/Dropdowns/DropdownOpened';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SmallNavbar(props) {
	const { socials, pages } = props;

	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<Box className="mx-auto flex flex-col items-start justify-start w-full" sx={{ paddingY: '10px' }}>
			<Box className="w-full relative flex justify-between">
				<Link to="/home">
					<Typography
						color="text.primary"
						sx={{
							fontWeight: '700',
							fontSize: '24px',
							lineHeight: '32px',
							marginRight: '14px'
						}}
						className="py-2 whitespace-nowrap uppercase"
					>
						CDSH
					</Typography>
				</Link>
				<IconButton
					className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
					type="button"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
					{navbarOpen ? (
						<Icon color="primary" className="fas fa-close" />
					) : (
						<Icon color="primary" className="fas fa-bars" />
					)}
				</IconButton>
			</Box>
			<Box className={`lg:flex flex-grow items-center min-h-screen ${navbarOpen ? 'block' : 'hidden'}`}>
				<ul className="flex flex-row list-none mr-auto">
					{socials.map(({ name, icon, path }) => (
						<li className="flex items-center" key={name}>
							<ExternalLink path={path} icon={icon} onClick={() => setNavbarOpen(false)} />
						</li>
					))}
				</ul>
				<menu className="flex flex-col lg:flex-row list-none lg:ml-auto pl-4">
					{pages.map(page => (
						<li className="flex items-center" key={page.name}>
							<DropdownOpened {...page} onClick={() => setNavbarOpen(false)} />
						</li>
					))}
				</menu>
			</Box>
		</Box>
	);
}

export default SmallNavbar;
