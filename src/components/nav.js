import React from "react";
import { NavLink } from 'react-router-dom';
import { IoIosAlbums, IoIosContact, IoIosToday } from 'react-icons/io';

function Nav() {
  return (
		<nav className="nav">
			<ul className="nav__list">
			
				<NavLink exact to="/" className="nav_link" >
					<li className="nav__item">
						<IoIosToday className="nav__icon"/>
						<span>Home</span>
					</li>
				</NavLink>
				
				<NavLink to="/wallpaper" className="nav_link">
					<li className="nav__item">
						<IoIosAlbums className="nav__icon"/>
						<span>Wallpaper</span>
					</li>
				</NavLink>
				
				<NavLink to="/contact" className="nav_link">
					<li className="nav__item">
						<IoIosContact className="nav__icon"/>
						<span>Contact</span>
					</li>
				</NavLink>
			  
			</ul>
		</nav>
	
  );
}

export default Nav;