import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledSection = styled.section`
	position: relative;
	display: grid;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 6em);
	min-height: calc((var(--vh, 1vh) * 100) - 6em);
	margin: 0;
	z-index: 3;
	padding: 3em 0;

	background-color: ${props => props.color || ''};
`;

class Section extends React.Component {
	static propTypes = {
		id: PropTypes.string,
		name: PropTypes.string,
		className: PropTypes.string,
		// loadWorks: PropTypes.func,
		toggle: PropTypes.func,
		isToggleOn: PropTypes.bool,
	};

	componentDidMount() {
		// const { loadWorks } = this.props;
		// if (loadWorks) loadWorks();
	}

	render() {
		const { className, name, id, toggle, isToggleOn } = this.props;

		return (
			<StyledSection className={className} id={id}>
				<button type="button" onClick={toggle}>
					{name}
				</button>
				<p>{isToggleOn ? 'ON' : 'OFF'}</p>
			</StyledSection>
		);
	}
}

export default Section;
