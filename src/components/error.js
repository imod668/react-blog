import React, { Fragment } from "react";
import { Link, useLocation } from 'react-router-dom';

function Error() {
	let haha = useLocation();
	
	return (
		<Fragment>
		<div className="error">Không tìm thấy trang này <code>{haha.pathname}</code>
			<Link to="/" className="return">Back Home</Link>
		</div>
		</Fragment>
	);
}

export default Error;