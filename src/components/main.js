import React, { Component } from "react";


function Main() {
  return (
    <main className="content" >
		<Favorite/>
		<Location/>
		<Contact/>
	</main>
  );
}

class Favorite extends Component {
  render() {
    return (
      <section className="content__tab">
		   <h2 className="content__heading">Cafe's yêu thích</h2>
		   <ul>
		   
			  <li className="card">
				 <div className="card__image"><img className="img--cover" src={`${process.env.PUBLIC_URL}/assets/images/cafe3.jpg`} alt="cafe" /></div>
				 <div className="card__content">
					<h4 className="card__heading">Cafe' Mocha</h4>
					<p>Giờ mở cửa</p>
					<p className="card__times">6am - 22pm</p>
					<div className="card__buttons"><a className="card__remove btn">Chi tiết</a></div>
				 </div>
			  </li>
			  
			  <li className="card">
				 <div className="card__image"><img className="img--cover" src="https://bizweb.dktcdn.net/100/004/714/articles/ca-phe-da.png?v=1586258829727" alt="cafe" /></div>
				 <div className="card__content">
					<h4 className="card__heading">Cafe đá</h4>
					<p>Giờ mở cửa</p>
					<p className="card__times">6am - 22pm</p>
					<div className="card__buttons"><a className="card__remove btn">Chi tiết</a></div>
				 </div>
			  </li>
			  
			  <li className="card">
				 <div className="card__image"><img  className="img--cover" src="https://jarvis.vn/wp-content/uploads/2020/01/ly-cafe-kem-tuoi.jpg" alt="cafe" /></div>
				 <div className="card__content">
					<h4 className="card__heading">Cafe kem</h4>
					<p>Giờ mở cửa</p>
					<p className="card__times">6am - 22pm</p>
					<div className="card__buttons"><a className="card__remove btn">Chi tiết</a></div>
				 </div>
			  </li>
			  
		   </ul>
		</section>
    );
  }
}

class Location extends Component {
  render() {
    return (
		<section className="content__tab">
		   <h2 className="content__heading">Cafe's nearby</h2>
		   <div className="gallery">
			  <div data-flip-key="photo-1" className="gallery__item"><img className="img--cover" src="https://source.unsplash.com/250x250/?cafe,1" alt="Coffee" /></div>
			  <div data-flip-key="photo-2" className="gallery__item"><img className="img--cover" src="https://source.unsplash.com/250x250/?cafe,2" alt="Coffee" /></div>
			  <div data-flip-key="photo-3" className="gallery__item"><img className="img--cover" src="https://source.unsplash.com/250x250/?cafe,3" alt="Coffee" /></div>
			  <div data-flip-key="photo-4" className="gallery__item"><img className="img--cover" src="https://source.unsplash.com/250x250/?cafe,4" alt="Coffee" /></div>
			  <div data-flip-key="photo-5" className="gallery__item"><img className="img--cover" src="https://source.unsplash.com/250x250/?cafe,5" alt="Coffee" /></div>
			  <div data-flip-key="photo-6" className="gallery__item"><img className="img--cover" src="https://source.unsplash.com/250x250/?cafe,6" alt="Coffee" /></div>
			  <div data-flip-key="photo-7" className="gallery__item"><img className="img--cover" src="https://source.unsplash.com/250x250/?cafe,7" alt="Coffee" /></div>
			  <div data-flip-key="photo-8" className="gallery__item"><img className="img--cover" src="https://source.unsplash.com/250x250/?cafe,8" alt="Coffee" /></div>
			  <div data-flip-key="photo-9" className="gallery__item"><img className="img--cover" src="https://source.unsplash.com/250x250/?cafe,9" alt="Coffee" /></div>
		   </div>
		</section>
    );
  }
}

class Contact extends Component {
  render() {
    return (
		<section className="content__tab profile">
		   <img src="https://source.unsplash.com/400x250/?coffee" alt="coffee" className="profile__header" /> 
		   <div className="profile__content">
			  <img src="https://source.unsplash.com/250x250/?animal" alt="a woman" className="profile__image" /> 
			  <h2>MrThuan</h2>
			  <span className="profile__divider" /> 
			  <div className="profile__numbers">
			  
				 <div className="profile__item">
					<h1 className="profile__number">300</h1>
					<p className="profile__subtitle">coffee cups consumed</p>
				 </div>
				 
				 <div className="profile__item">
					<h1 className="profile__number">20</h1>
					<p className="profile__subtitle">cafes visited</p>
				 </div>
				 
				 <div className="profile__item">
					<h1 className="profile__number">5</h1>
					<p className="profile__subtitle">coupons remaining</p>
				 </div>
				 
			  </div>
		   </div>
		</section>
    );
  }
}

export default Main;