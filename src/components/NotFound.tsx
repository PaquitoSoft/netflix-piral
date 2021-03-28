import * as React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div>
			<p className="error">Could not find the requested page. Are you sure it exists?</p>
			<p>
				Go back <Link to="/">to the homepage</Link>
			</p>
		</div>
	);
}

export default NotFound;
