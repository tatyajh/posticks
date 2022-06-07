import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='btn dark-btn dark-btn:hover'
			>	
			POSTICKS
			</button>
		</div>
	);
};

export default Header;