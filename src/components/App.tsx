import * as React from 'react';
import { ExtensionSlot, LayoutProps } from 'piral-core';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Menu } from 'piral-menu';
import Logo from './Logo';
import Footer from './Footer';


const App: React.FC<LayoutProps> = ({ children }) => (
	<React.Fragment>
		<div className="main-wrapper">
			<Router>
				<header className="Header">
					<Logo />
					<Menu type="general" />
					<ExtensionSlot name="search"></ExtensionSlot>
					<div className="header-right">
						<ExtensionSlot name="header-right" />
					</div>
				</header>

				<Route exact path="/">
					<Redirect to="/browse" />
				</Route>

				{children}
			</Router>
		</div>

		<Footer />
	</React.Fragment>
);

export default App;
