import { Box, Typography } from '@mui/material';
import ExternalLink from 'app/components/Buttons/ExternalLink';
import { Link } from 'react-router-dom';
import Dropdown from '../../components/Dropdowns/Dropdown';
import LanguageSwitcher from './LanguageSwitcher';

import { useLayoutEffect, useMemo, useState, useEffect, useRef } from 'react';

function LargeNavbar(props) {
	const { socials, pages } = props;

	const ref = useRef();
	const [isOverflow, setIsOverflow] = useState(undefined);
	const direction = 'Width'; // Width  Height
	const callback = null;

	useLayoutEffect(() => {
		const { current } = ref;

		const trigger = () => {
			const hasOverflow = current[`scroll${direction}`] > current[`client${direction}`];

			/* console.log('current[`scroll${direction}`]', current[`scroll${direction}`]);
			console.log('current[`client${direction}`]', current[`client${direction}`]); */

			setIsOverflow(hasOverflow);

			if (callback) callback(hasOverflow);
		};

		if (current) {
			if ('ResizeObserver' in window) {
				new ResizeObserver(trigger).observe(current);
			}

			trigger();
		}
	}, [callback, direction, ref]);

	return (
		<Box className="px-4 mx-auto flex flex-wrap items-center justify-between w-full h-full">
			<Link to="/">
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
			<Box ref={ref} className="lg:flex flex-grow items-center">
				<ul className="flex flex-row list-none mr-auto">
					{socials.map(({ name, icon, path }) => (
						<li className="flex items-center" key={name}>
							<ExternalLink path={path} icon={icon} />
						</li>
					))}
				</ul>
				<menu className="flex flex-col lg:flex-row list-none lg:ml-auto">
					{pages.map(page => (
						<li className="flex items-center" key={page.name}>
							<Dropdown {...page} />
						</li>
					))}
				</menu>
				<LanguageSwitcher />
			</Box>
		</Box>
	);
}

export default LargeNavbar;
