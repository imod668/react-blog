import React from "react";
import { IoLogoFacebook, IoLogoTwitter, IoMdMailUnread } from 'react-icons/io';

function Contact() {
	return (
		<main className="content">
		<section className="content__tab profile">
			<div className="profile__header" ></div> 
			<div className="profile__content">
				<img className="profile__image" src={`${process.env.PUBLIC_URL}/assets/images/avatar.jpg`} alt="avatar"/> 
				<h2>MrThuan</h2>
				<span className="profile__divider" />
				<p className="title_profile">My name is Thuan.I'm come from VietNam.</p>
				<div className="profile_social">
					<a href="https://facebook.com/MrthuanJB" target="_blank" rel="noreferrer" className="social_icon"><IoLogoFacebook/></a>
					<a href="https://twitter.com/th6688" target="_blank" rel="noreferrer" className="social_icon"><IoLogoTwitter /></a>
					<a href="mailto:thuanvodka@gmail.com" target="_blank" rel="noreferrer" className="social_icon"><IoMdMailUnread /></a>
				</div>
			</div>
			</section>
		</main>
	);
}

export default Contact;