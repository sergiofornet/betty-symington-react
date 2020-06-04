import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
	${normalize}

	:root {
		font-size: 100%;
		--timeBackground: hsl(0, 100%, 100%);
		--blue: rgb(0, 0, 238);
		--yellow: rgb(255, 225, 16);
	}

	body {
		font-size: 1.95rem;
		font-family: 'Fira Code', monospace;
	}

	@supports (font-variation-settings: normal) {
		body {
			font-family: 'Fira Code VF', monospace;
		}
	}

	h1 {
		font-size: 2rem;
		font-weight: 400;
		margin: 0;
	}

	ul {
		margin: 0;
		padding: 0;

		& li {
			list-style-type: none;
		}
	}


	a,
	a:hover,
	a:visited,
	a:active,
	a:focus {
		${
			'' /* color: var(--blue);

		&.js-trigger {
		 	text-decoration: none;
		 	color: inherit;
		}

		.works-list & {
		 	color: black;
		} */
		}

	}

	a:hover {
		text-decoration: none;
	}
`;

export default GlobalStyles;
