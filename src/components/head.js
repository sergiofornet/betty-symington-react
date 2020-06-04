import React from 'react';
import { Helmet } from 'react-helmet-async';

class Head extends React.Component {
	render() {
		return (
			<Helmet>
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#ffff10" />
				<meta
					name="description"
					content="betty symington // frontend developer"
				/>
				<title>betty symington // frontend developer</title>
				<link
					href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@3/distr/fira_code.css"
					rel="stylesheet"
				></link>
			</Helmet>
		);
	}
}

export default Head;
