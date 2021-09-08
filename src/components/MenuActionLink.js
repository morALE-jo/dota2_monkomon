import React from 'react'

export default function MenuActionLink({menuLabel, menuFunction}) {
	function handleClick(e) {
		e.preventDefault();
		console.log('The link was clicked.');
		menuFunction(menuLabel);
	}
	return (
		<a key={menuLabel} href={'#'+menuLabel} onClick={handleClick}>
			{menuLabel}
		</a>
	)
}