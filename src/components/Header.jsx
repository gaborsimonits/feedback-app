import React from "react";

function Header({ text, bgColor, textColor }) {
	const HeaderStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};
	return (
		<header style={HeaderStyles}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
}

Header.defaultProps = {
	text: "Feedback feature",
	bgColor: "#fff",
	textColor: "#02491b",
};

export default Header;
