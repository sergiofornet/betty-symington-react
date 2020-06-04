import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Work from './work/work';
import ScrollButton from '../scroll-button';

const StyledWorks = styled.section`
	color: black;
	position: relative;
	display: grid;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 6em);
	min-height: calc((var(--vh, 1vh) * 100) - 6em);
	margin: 0;
	z-index: 3;
	padding: 3em 0;

	background-color: ${props => props.bgColor || 'var(--yellow)'};

	& *::selection {
		background-color: black;
		color: var(--yellow);
	}

	> * {
		margin: 2rem 0.625rem;
	}

	& > ul {
		max-width: 1200px;
	}
`;

class Works extends React.Component {
	static propTypes = {
		id: PropTypes.string,
		className: PropTypes.string,
		bgColor: PropTypes.string,
		loadWorks: PropTypes.func,
		works: PropTypes.object,
	};

	componentDidMount() {
		const { loadWorks } = this.props;
		if (loadWorks) loadWorks();
	}

	render() {
		const { className, id, bgColor, works } = this.props;

		return (
			<StyledWorks bgColor={bgColor} className={className} id={id}>
				<ScrollButton destination="info" content="⬆︎" />
				<ul>
					{Object.keys(works).map(key => (
						<Work key={key} work={works[key]} />
					))}
				</ul>
			</StyledWorks>
		);
	}
}

export default Works;
