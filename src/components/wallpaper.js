import React, { useState } from "react";
import Image from "./data/IMAGE_DATA.json";
import { IoIosClose } from 'react-icons/io';

function Wallpaper() {
	
	const [model, setModel] = useState(false);
	const[tempimg, setTempImg] = useState('');
	const getImg = (photos)=>{
		setTempImg(photos);
		setModel(true);
	};
	
	return (
		<main className="content">
			<section className="content__tab">
			   <h2 className="content__heading">Image Favourite</h2>
			   <div className={model? "model open" : "model"}>
				   <img src={tempimg} alt="img"/>
				   <IoIosClose onClick={() => setModel(false)}/>
			   </div>
			   <div className="gallery">
				{
					Image.map((val, key) => {
					   return(
							<div className="gallery__item" key={key} onClick={() => getImg(val.photos)}>
								<img src={val.photos} className="img--cover" alt="img"/>
							</div>
						);
					})
				}
			   </div>
			</section>
		</main>
	);
}

export default Wallpaper;