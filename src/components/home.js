import React from "react";
import { Link } from "react-router-dom";
import Data from "./data/HOME_DATA.json";


function Home () {
	return (
		<main className="content" >
			<section className="content__tab">
			   <h2 className="content__heading">Today</h2>
			   <ul>
				{
				   Data.map((val, key) => {
					   return( 
						<li className="card" key={key}>
							<div className="card__image">
								<img src={val.img[0]} alt={val.name} className="img--cover" style={{maxHeight: "110px"}}/>
							</div>
							<div className="card__content">
								<h4 className="card__heading">{val.name}</h4>
								<p>{val.decs}</p>
								<p>{val.price} </p>
								<div className="card__buttons">
									<Link to={"mota/" + val.id + "/" + val.name + ".html"} className="btn">Chi tiết</Link>
								</div>
							</div>
						</li>
						);
				   })
				} 
			   </ul>
			</section>
		</main>
	);
}

export default Home;