import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const WorkDate = ({ className, date }) => (
	<span className={className}>{date}</span>
);

WorkDate.propTypes = {
	date: PropTypes.string,
	className: PropTypes.string,
};

const styledWorkDate = styled(WorkDate)`
	padding: 0.1em 0.2em;
	color: black;
	background-color: white;
	display: inline-block;
	text-align: center;

	&&& ::selection {
		color: black;
		background-color: var(--yellow);
	}
`;
export default styledWorkDate;
