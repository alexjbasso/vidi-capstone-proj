import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div id="nav-container">
			<NavLink exact to="/">HOME</NavLink>
			<div id="nav-links-cont">
				{isLoaded && (
					<div>
						<ProfileButton user={sessionUser} />
					</div>
				)}
				<NavLink to="/films">FILMS</NavLink>
				<NavLink to="/people">PEOPLE</NavLink>
			</div>
		</div>
	);
}

export default Navigation;
