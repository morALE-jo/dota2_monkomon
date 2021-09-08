import React from 'react'
import { ReactComponent as Logo } from '../assets/img/logo40.svg';
import MenuActionLink from './MenuActionLink';

export default function Menu({ menuOption, goToPage }) {
	return (
		<div>
			<header className="topnav">
				<a key="Logo" href="#"><Logo/></a>
				
				{menuOption.map(opt => (
					<MenuActionLink 
						menuLabel={opt}
						menuFunction={goToPage}
					/>
				))}
			</header>
		</div>
	)
}
