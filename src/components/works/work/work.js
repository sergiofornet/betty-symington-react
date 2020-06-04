import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import StyledWorkTitle from './work-title';
import StyledWorkDescription from './work-description';

const StyledWork = styled.li`
	margin-bottom: 2.08em;

	&:last-of-type {
		margin-bottom: 0;
	}
`;

class Work extends React.Component {
	static propTypes = {
		work: PropTypes.shape({
			date: PropTypes.string,
			description: PropTypes.string,
			link: PropTypes.string,
			title: PropTypes.string,
		}),
	};

	render() {
		const { work } = this.props;

		return (
			<StyledWork>
				<StyledWorkTitle title={work.title} link={work.link} />
				<StyledWorkDescription
					description={work.description}
					date={work.date}
				/>
			</StyledWork>
		);
	}
}

export default Work;
