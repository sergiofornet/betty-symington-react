import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import GlobalStyles from './components/GlobalStyles';
import Section from './components/section';
import Works from './components/works/section-works';
import Head from './components/head';
import worksList from './works';

class App extends React.Component {
	state = {
		works: {},
		counter: 0,
		isToggleOn: true,
	};

	loadWorks = () => {
		this.setState({ works: worksList });
	};

	updateCounter = () => {
		const { counter } = this.state;
		this.setState({
			counter: counter + 1,
		});
	};

	handleToggle = () => {
		const { isToggleOn } = this.state;
		this.setState({
			isToggleOn: !isToggleOn,
		});
	};

	render() {
		const { works, counter, date, isToggleOn } = this.state;
		return (
			<HelmetProvider>
				<div className="App">
					<Head />
					<GlobalStyles />
					<Section id="playground" name="Playground" color="red" />
					<Section
						id="info"
						name="Info"
						increment={this.updateCounter}
						counter={counter}
						date={date}
						tick={this.tick}
						toggle={this.handleToggle}
						isToggleOn={isToggleOn}
					/>
					<Works
						id="work"
						name="Work"
						works={works}
						loadWorks={this.loadWorks}
					/>
				</div>
			</HelmetProvider>
		);
	}
}

export default App;
