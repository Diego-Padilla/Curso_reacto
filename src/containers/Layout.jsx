import React from 'react';
import Header from '../components/Header';
import Home from '../pages/Home';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			
			{children}
		</div>
	);
}

export default Layout;
