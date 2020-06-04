import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import styled from 'styled-components/macro';

const StyledScrollButton = styled.div`
	cursor: pointer;

	top: 0;

	&&& {
		position: absolute;
		margin-left: 50%;
		transform: translateX(-50%);
	}
`;

const ScrollButton = ({ destination, content }) => (
	<StyledScrollButton>
		<Link
			to={destination}
			activeClass="active"
			spy
			smooth
			offset={0}
			duration={1000}
		>
			{content}
		</Link>
	</StyledScrollButton>
);

ScrollButton.propTypes = {
	destination: PropTypes.string,
	content: PropTypes.string,
};

export default ScrollButton;
