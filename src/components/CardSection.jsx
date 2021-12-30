import React from "react";

const CardSection = () => {
  return (
    <section className="cards">
			<div className="cards__wrapper">
      	<div className="card__item">
					<img src="/8309.jpg" alt="" />
					<h2>Dostava</h2>
					<a href="#">Otvori</a>
				</div>
      	<div className="card__item">
					<img src="/2568.jpg" alt="" />
					<h2>Asortiman</h2>
					<a href="#">Otvori</a>
				</div>
      	<div className="card__item">
					<img src="/6316.jpg" alt="" />
					<h2>O nama</h2>
					<a href="#">Otvori</a>
				</div>
			</div>
    </section>
  );
};

export default CardSection;
