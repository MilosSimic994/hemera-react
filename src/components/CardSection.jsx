import React from "react";

const CardSection = () => {
	return (
		<section className="cards">
			<div className="cards__wrapper">
				<div className="card__item">
					<img src="/assets/images/8309.png" alt="Dostava" />
					<h2>Dostava</h2>
					<a href="#">otvori</a>
				</div>
				<div className="card__item">
					<img src="/assets/images/2568.png" alt="Asortiman" />
					<h2>Asortiman</h2>
					<a href="#">otvori</a>
				</div>
				<div className="card__item">
					<img src="/assets/images/6316.png" alt="O nama" />
					<h2>O nama</h2>
					<a href="#">otvori</a>
				</div>
			</div>
		</section>
	);
};

export default CardSection;
