import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import StyledWorkDate from './work-date';

const WorkDescription = ({ className, description, date }) => (
	<p className={className}>
		{description}
		{' // '}
		<StyledWorkDate date={date} />
	</p>
);

WorkDescription.propTypes = {
	description: PropTypes.string,
	date: PropTypes.string,
	className: PropTypes.string,
};

const styledWorkDescription = styled(WorkDescription)`
	font-size: 1.17rem;
	line-height: 1.4;
	margin: 0 0 1em;
	font-weight: 00;
`;

export default styledWorkDescription;
