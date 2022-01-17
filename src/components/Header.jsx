import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import { MainNavigation } from "./export.js";

const Header = () => {
	const [counter, setCounter] = useState(0);
	const { images } = data;

	const [img, setImg] = useState(images[counter]);

	useEffect(() => {
		if (counter > images.length - 1) {
			setCounter(0);
		}
	}, [counter]);

	useEffect(() => {
		let slider = setInterval(() => {
			setCounter(counter + 1);
			setImg(images[counter]);
		}, 3000);
		return () => clearInterval(slider);
	}, [counter]);

	console.log(images);
	console.log(counter);
	return (
		<>
			<MainNavigation />
			<header
				className="header"
				style={{ backgroundImage: "url(/assets/images/mainBgXXL.jpg)" }}
			>
				<div className="header__wrapper">
					<article className="slider">
						<img src={img.img} alt={img.alt} />
					</article>
					<article className="introduction">
						<p>vaše mesto kupovine</p>
						<h1>Hemera</h1>
						<p>
							MEsto gde mozete naci sve popularne brendove koji nude sirok
							asortiman kozmetickih preparata
						</p>
						<button>
							<Link to="/contact">Kontaktiraj nas</Link>
						</button>
					</article>
				</div>
			</header>
		</>
	);
};

export default Header;
