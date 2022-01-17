import React from "react";

const CardSection = () => {
	return (
		<section className="cards">
			<div className="cards__wrapper">
				<div className="card__item">
					<img src="/assets/images/8309.png" alt="" />
					<h2>Dostava</h2>
					<a href="#">otvori</a>
				</div>
				<div className="card__item">
					<img src="/assets/images/2568.png" alt="" />
					<h2>Asortiman</h2>
					<a href="#">otvori</a>
				</div>
				<div className="card__item">
					<img src="/assets/images/6316.png" alt="" />
					<h2>O nama</h2>
					<a href="#">otvori</a>
				</div>
			</div>
		</section>
	);
};

export default CardSection;
