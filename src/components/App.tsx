import * as React from 'react';
import { ExtensionSlot, LayoutProps } from 'piral-core';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Menu } from 'piral-menu';
import Logo from './Logo';
import Footer from './Footer';


const App: React.FC<LayoutProps> = ({ children }) => (
	<React.Fragment>
		<div className="app__main">
			<Router>
				<header className="app__header">
					<Logo />
					<Menu type="general" />
					<ExtensionSlot name="header-items" />
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
