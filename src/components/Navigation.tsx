import * as React from 'react';
import { MenuContainerProps } from 'piral';

const Navigation: React.FC<MenuContainerProps> = ({ children }) => (
	<div id="navigation" className="navigation">
		<nav>
			<ul>{children}</ul>
		</nav>
	</div>
);

export default Navigation;
