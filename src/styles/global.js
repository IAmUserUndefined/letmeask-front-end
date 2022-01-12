import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	background-color: #e5e5e5;
}`;

export default GlobalStyle;