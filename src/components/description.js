import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import Data from "./data/HOME_DATA.json";


function Description () {
    
	const { idParams } = useParams(); //get id url
	const getID = parseInt(idParams); //convert string idParams to number
	const item = Data.find(item => item.id === getID);

	const detail_img = {
		width: "100%",
		height: "auto",
		borderRadius: "10px",
		marginBottom: "20px"
	}
	//loading
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const loadData = async () => {
		  await new Promise((r) => setTimeout(r, 500));
		  setLoading((loading) => !loading);
		};
		return(loadData());
	}, []);

	if (loading) {
        return (<div className="loading">
					<img src={`${process.env.PUBLIC_URL}/assets/images/loading.gif`} alt="gif" className="loading-gif" />
					<p className="loading-text">Loading...</p>
				</div>
			)	
    }
	return (
		<main className="content" >
			<section className="content__tab">
				<div key={item.id} style={{marginBottom: "5rem"}}>
					<h2>{item.name}</h2>
					<h4>{item.price}</h4>
					<h4>{item.decs}</h4>
					{item.img.map((imgs, key) =>(
						<img src={imgs} key={key} alt={key} style={detail_img} />
					))
					}
				</div>
			</section>
			<Link to="/" className="back">Back</Link> 
		</main>
	);
}

export default Description;