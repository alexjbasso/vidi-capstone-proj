import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div id="nav-container">
			<NavLink exact to="/"><span id="nav-home-button"><i class="fa-solid fa-eye vidi-eye-logo"></i>Vidi</span></NavLink>

			<div id="nav-links-cont">
				<NavLink to="/films">FILMS</NavLink>
				<NavLink to="/people">PEOPLE</NavLink>
				{isLoaded && (
					<div>
						<ProfileButton user={sessionUser} />
					</div>
				)}
			</div>

		</div>
	);
}

export default Navigation;
