import { Box, useTheme } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ns } from './translations';

import Footer from 'app/wireframe/footer/Footer';
import Navbar from 'app/wireframe/navbar/Navbar';
import generateNavigation from './generateNavigation';
import { useLocation } from 'react-router';

function RenderRoutes({ routes }) {
	return routes.map((route, idx) => {
		const { path, component, props, children } = route;
		return (
			<React.Fragment key={idx}>
				{component && <Route {...props} path={path} component={component} />}
				{children && <RenderRoutes routes={children} />}
			</React.Fragment>
		);
	});
}

export default function Wireframe() {
	const theme = useTheme();
	const { t } = useTranslation(ns);
	const { title } = t('navigation');

	const navigationPages = useMemo(() => generateNavigation(title), [title]);

	const { pathname } = useLocation();

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<Box className="relative w-full h-full min-h-screen">
				<Navbar fixed />
				<main>
					<Box
						className="w-full min-h-screen"
						sx={{ background: theme.palette.background.light_1, paddingX: '24px', paddingBottom: '40px' }}
					>
						<Switch>
							<Route path="/" exact>
								<Redirect to="home" />
							</Route>

							<RenderRoutes routes={navigationPages} />

							<Route path="*">
								<Redirect to="home" />
							</Route>
						</Switch>
					</Box>
					<Footer />
				</main>
			</Box>
		</>
	);
}
