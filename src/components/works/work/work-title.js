import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const WorkTitle = ({ className, link, title }) => (
	<a
		className={className}
		href={link}
		target="_blank"
		rel="noopener noreferrer"
	>
		{title}
	</a>
);

WorkTitle.propTypes = {
	link: PropTypes.string,
	title: PropTypes.string,
	className: PropTypes.string,
};

const styledWorkTitle = styled(WorkTitle)`
	font-weight: 400;
	text-decoration-thickness: 1px;
	position: relative;
	display: inline-block;
	margin-bottom: 0.13em;

	&,
	&:visited,
	&:hover,
	&:focus {
		color: black;
	}
`;
export default styledWorkTitle;
