/* eslint-disable import/no-named-as-default-member */
/*
 * Copyright 2022 Agnostiq Inc.
 * Note: This file is subject to a proprietary license agreement entered into between
 * you (or the person or organization that you represent) and Agnostiq Inc. Your rights to
 * access and use this file is subject to the terms and conditions of such agreement.
 * Please ensure you carefully review such agreements and, if you have any questions
 * please reach out to Agnostiq at: [support@agnostiq.com].
 */
// Disabled marketplace related features
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Amplify, Auth } from 'aws-amplify';
// eslint-disable-next-line import/extensions
import awsconfig from './aws-exports';
import Projects from './containers/projects';
import Dispatches from './containers/dispatches';
import Hardware from './containers/hardware';
import Settings from './containers/settings';
// import ElectronFunction from './containers/electron';
import ShareWithMeScreen from './containers/sharewithme';
// import OrganizationHardware from './containers/marketplace/hardware';
// import Solver from './containers/marketplace/solvers';
// import HardwareOverview from './containers/hardwareOverview';
import theme from './theme';
import Dashboard from './containers/dashboard';
import './App.css';
import LoaderScreen from './components/loader/index';
import ProtectRoute from './containers/template/protectedRoute';
import Environments from './containers/environments';
// import MarketPlace from './containers/marketplace';
import GettingStarted from './containers/dashboard/gettingStarted';
import CustomisedSnackbar from './components/snackbar/projects';
import useSocketConnection from './socketHooks/useSocketConnection';
// import Solvers from './containers/solverscontainer';
// import SolverAdmin from './containers/solveradmin';
import scrollToTopIcon from './assets/arrows/caretUp.svg';
import Icon from './components/icon';
import Template from './containers/template/template';
import GraphContainer from './containers/graph';
// import Screen from './containers/template/screen';
import GraphProvider from './containers/graph/contexts/GraphContext';
import EnvDetails from './containers/environments/envDetail';
import AddNewEnvironment from './containers/environments/addEnvironment';
import BlurBackgroundComponent from './containers/template/blurScreen';
import urls from './constants/routes.json';
import { setEnvPage } from './redux/environmentSlice';

const LoginScreen = lazy(() => import('./containers/login'));
const PageNotFoundScreen = lazy(() => import('./containers/pagenotfound'));
// const Screen = lazy(() => import('./containers/template/screen'));
awsconfig.oauth.domain = process.env.REACT_APP_COGNITO_CUSTOM_DOMAIN;
awsconfig.oauth.redirectSignIn = process.env.REACT_APP_COGNITO_REDIRECT_SIGN_IN;
awsconfig.oauth.redirectSignOut = process.env.REACT_APP_COGNITO_REDIRECT_SIGN_OUT;
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
	useSocketConnection();
	const location = useLocation();
	const navigate = useNavigate();
	const pathname = location?.pathname;
	const [name, setName] = useState('');
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const environmentAction = useDispatch();

	useEffect(() => {
		if (!pathname.includes(urls?.ENVIRONMENTS)) {
			environmentAction(setEnvPage({ envPage: 1 }));
		}
		Auth.currentAuthenticatedUser()
			.then(user => {
				const res = user?.attributes;
				const firstName = res?.given_name || res?.name || '';
				setName(firstName);
				if (pathname === '/login' || pathname === '/register') navigate('/');
			})
			.catch(error => {
				if (
					(pathname === '/login' || pathname === '/' || pathname === '/login/') &&
					window.localStorage.getItem('isFederatedError') === 'true' &&
					window.localStorage.getItem('federatedError')
				) {
					setSnackbarMessage(window.localStorage.getItem('federatedError'));
					setOpenSnackbar(true);
					window.localStorage.removeItem('isFederatedError');
					window.localStorage.removeItem('federatedError');
					setTimeout(() => navigate('/login'), 500);
				} else if (
					pathname !== '/login' &&
					pathname !== '/' &&
					pathname !== '/login/' &&
					pathname !== '/register' &&
					pathname !== '/register/'
				) {
					setSnackbarMessage(error);
					setOpenSnackbar(true);
				}
			});
	}, [pathname]);

	const [scrollTop, setScrollTop] = React.useState(false);
	React.useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 200) {
				setScrollTop(true);
			} else {
				setScrollTop(false);
			}
		});
	}, []);

	const bottomToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
		// scroll to top on page load
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);

	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<LoaderScreen isFetching={false} />}>
				<CustomisedSnackbar
					open={openSnackbar}
					message={snackbarMessage}
					clickHandler={() => setOpenSnackbar(false)}
					onClose={() => setOpenSnackbar(false)}
				/>
				<CssBaseline />
				<Routes>
					<Route path="/login" element={<LoginScreen path="login" />} />
					<Route path="/register" element={<LoginScreen path="register" />} />
					<Route
						path="/"
						element={
							<ProtectRoute>
								<Template screen={<Dashboard />} title={`Welcome Back, ${name}`} />
							</ProtectRoute>
						}
					/>
					<Route
						path="/graph/:dispatchID"
						element={
							<ProtectRoute>
								{/* <Template screen={<ElectronFunction />} layout="graph" /> */}
								<GraphProvider>
									<Template screen={<GraphContainer />} />
								</GraphProvider>
							</ProtectRoute>
						}
					/>
					<Route
						path="/projects"
						element={
							<ProtectRoute>
								<Template screen={<Projects />} title="Projects" />
							</ProtectRoute>
						}
					/>
					<Route
						path="/dispatches"
						element={
							<ProtectRoute>
								<Template screen={<Dispatches />} title="Dispatches" />
							</ProtectRoute>
						}
					/>
					{/* <Route
						path="/marketplace/hardware/:hardwareId"
						element={
							<ProtectRoute>
								<Template screen={<OrganizationHardware />} title="" />
							</ProtectRoute>
						}
					/>
					<Route
						path="/marketplace/solvers/:solverId"
						element={
							<ProtectRoute>
								<Template screen={<Solver />} title="" />
							</ProtectRoute>
						}
					/> */}
					<Route
						path="/template"
						element={
							<ProtectRoute>
								<Template />
							</ProtectRoute>
						}
					/>
					<Route
						path="/shared"
						element={
							<ProtectRoute>
								<Template screen={<ShareWithMeScreen />} title="Shared with me" />
							</ProtectRoute>
						}
					/>

					<Route
						path="/gettingstarted"
						element={
							<ProtectRoute>
								<Template screen={<GettingStarted />} title="Getting started!" />
							</ProtectRoute>
						}
					/>
					<Route
						path="/settings"
						element={
							<ProtectRoute>
								<Template screen={<Settings />} title="Settings" />
							</ProtectRoute>
						}
					/>
					<Route
						path="/settings/account"
						element={
							<ProtectRoute>
								<Template screen={<Settings />} title="Settings" />
							</ProtectRoute>
						}
					/>
					<Route
						path="/settings/billing"
						element={
							<ProtectRoute>
								<Template screen={<Settings />} title="Settings" />
							</ProtectRoute>
						}
					/>
					{/* <Route
						path="/settings/hardware"
						element={
							<ProtectRoute>
								<Template screen={<Settings />} title="Settings" />
							</ProtectRoute>
						}
					/> */}
					{/* <Route
						path="/settings/notifications"
						element={
							<ProtectRoute>
								<Template screen={<Settings />} title="Settings" />
							</ProtectRoute>
						}
					/> */}
					<Route
						path="/hardware"
						element={
							<ProtectRoute>
								<Template
									screen={
										<BlurBackgroundComponent placeholderText="Coming soon...">
											<Hardware />
										</BlurBackgroundComponent>
									}
									title="Hardware"
								/>
							</ProtectRoute>
						}
					/>
					<Route
						path="/environments"
						element={
							<ProtectRoute>
								<Template screen={<Environments />} />
							</ProtectRoute>
						}
					/>
					<Route
						path="/environments/add"
						element={
							<ProtectRoute>
								<Template screen={<AddNewEnvironment />} title="" />
							</ProtectRoute>
						}
					/>
					<Route
						path="/environments/:id"
						element={
							<ProtectRoute>
								<Template screen={<EnvDetails />} title="" />
							</ProtectRoute>
						}
					/>
					<Route
						path="/environments/add"
						element={
							<ProtectRoute>
								<Template screen={<AddNewEnvironment />} title="" />
							</ProtectRoute>
						}
					/>
					<Route
						path="/environments/:id"
						element={
							<ProtectRoute>
								<Template screen={<EnvDetails />} title="" />
							</ProtectRoute>
						}
					/>
					{/* <Route
						path="/marketplace"
						element={
							<ProtectRoute>
								<Template screen={<MarketPlace />} title="" />
							</ProtectRoute>
						}
					/>
					<Route
						path="/solvers"
						element={
							<ProtectRoute>
								<Template screen={<Solvers />} title="" />
							</ProtectRoute>
						}
					/>
					<Route
						path="/hardwareadmin"
						element={
							<ProtectRoute>
								<Template screen={<HardwareOverview />} title="" />
							</ProtectRoute>
						}
					/>
					<Route
						path="/solveradmin"
						element={
							<ProtectRoute>
								<Template screen={<SolverAdmin />} title="" />
							</ProtectRoute>
						}
					/> */}
					<Route
						path="*"
						element={
							<ProtectRoute>
								<PageNotFoundScreen />
							</ProtectRoute>
						}
					/>
				</Routes>
				<GlobalStyles
					styles={{
						body: { backgroundColor: '#08081A' }
					}}
				/>
				{scrollTop && (
					<div className="backToTop">
						<Icon src={scrollToTopIcon} alt="scrollToTopIcon" clickHandler={bottomToTop} />
					</div>
				)}
			</Suspense>
		</ThemeProvider>
	);
}

// eslint-disable-next-line import/no-unused-modules
export default App;
