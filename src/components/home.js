import React from "react";
import { Link } from "react-router-dom";
import Data from "./data/HOME_DATA.json";


function Home () {

	const to_slug = (str) => {
		// Chuyển hết sang chữ thường
		str = str.toLowerCase();     
	
		// xóa dấu
		str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
		str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
		str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
		str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
		str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
		str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
		str = str.replace(/(đ)/g, 'd');
	
		// Xóa ký tự đặc biệt
		str = str.replace(/([^0-9a-z-\s])/g, '');
	
		// Xóa khoảng trắng thay bằng ký tự -
		str = str.replace(/(\s+)/g, '-');
	
		// xóa phần dự - ở đầu
		str = str.replace(/^-+/g, '');
	
		// xóa phần dư - ở cuối
		str = str.replace(/-+$/g, '');
	
		// return
		return str;
	}

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
									<Link to={"mota/" + val.id + "/" + to_slug(val.name) + ".html"} className="btn">Chi tiết</Link>
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