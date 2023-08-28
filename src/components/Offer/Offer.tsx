import Styles from "./Offer.module.scss"
import { Link } from "react-router-dom"
import OfferPdf from "../../assets/Oferta-BluzLO.pdf"

const Offer = () => {
	return (
		<section className={Styles.offer} id='oferta'>
			<div className='white-block white-block-right'></div>
			<div className={Styles.heroImg}>
				<div className='heroShadow'></div>
				<div className='heroText heroText--section'>
					<h2 className={`sectionHeading ${Styles.title}`}>oferta</h2>
					<p className={`smallText ${Styles.info}`}>
						Pobierz naszą ofertę ze szczegółowymi informacjami w formacie PDF
						lub zamów indywidualną wycenę już teraz! Oferujemy szeroki wybór
						usług i produktów, które dopasujemy do Twoich potrzeb. Nasz opiekun
						odezwie się do Ciebie!
					</p>
					<div className={Styles.buttons}>
						<Link to='/cennik'>
							<button className='mainBtn mainBtn--section'>
								Bezpłatna Wycena
							</button>
						</Link>
						<a href={OfferPdf} target='_blank'>
							<button className='mainBtn mainBtn--outlined mainBtn--section'>
								PDF z Ofertą
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className='white-block white-block-left'></div>
		</section>
	)
}

export default Offer
