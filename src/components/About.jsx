import React from "react";
import {Link} from 'react-router-dom'

const About = () => {
	return (
		<section className="about" style={{ backgroundImage: "url(/assets/images/mainBgXXL.jpg)" }}>
			<div className="left">
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
			<div className="right">
				<p>
					Ako ste se pitali, gde i kako poručiti kozmetiku po veleprodajnim
					cenama upravo ste našli odgovor. Veleprodaja lične i kućne kozmetike
					Hemera, je tu za Vas da Vam pruzi sirok asortiman proizvoda iz oblasti
					kozmetičkih preparata. U našoj ponudi možete naći sve prepoznatljive
					brendove poput: Niva, Palmolive, Fa, Dermomed, Adidas, Colgate,
					Blendamed... i mnoge druge vodeće brendove u svetu kozmetike.
				</p>
				<p>
					U koliko posedujete maloprodajni objekat i u potrazi ste za širokim
					asortimanom kozmetike na pravom ste mestu. Velerodaja Hemera Vam
					omogućava da na jednostavan, brz i pouzdan način dođete do željenih
					proizvoda. Na Vama je da nas kontaktirate i odaberete proizvode koje
					želite, a mi ćemo ih brzo i bezbedno dopremiti do vaših rafova.
				</p>
			</div>
		</section>
	);
};

export default About;
