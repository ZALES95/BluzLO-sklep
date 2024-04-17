import { Link } from "react-router-dom"
import Styles from "./Header.module.scss"
import OfferPdf from "../../assets/Oferta-BluzLO-2024.pdf"

const Header = () => {
	return (
		<header className={Styles.header} id='home'>
			<div className={Styles.heroImg}>
				<div className='heroShadow'></div>
				<div className='heroText'>
					<h1 className={Styles.mainHeader}>
						<span className={Styles.heroName}>BluzLO</span> - Merch dla szkół,
						uczelni oraz firm
					</h1>
					<div className={Styles.buttons}>
						<Link to='/wycena'>
							<button className='mainBtn'>Bezpłatna Wycena</button>
						</Link>
						<a href={OfferPdf} target='_blank'>
							<button className='mainBtn mainBtn--outlined'>
								Nasza Oferta
							</button>
						</a>
					</div>
					{/* <Link to='/sklep' className={`${Styles.infoText} normalText`}>
						Przejdź do sklepu, aby złożyć zamówienie
					</Link> */}
					<p className={`${Styles.infoText} normalText`}>
						BluzLO - Gdzie wygoda spotyka się ze stylem
					</p>
					<div className={Styles.icons}>
						<a
							href='https://www.facebook.com/bluzlo'
							target='_blank'
							aria-label="Link do Facebook'a">
							<i className={`fa-brands fa-facebook ${Styles["fa-icon"]}`}></i>
						</a>
						<a
							href='https://www.instagram.com/bluzlo/'
							target='_blank'
							aria-label="Link do Instagram'a">
							<i className={`fa-brands fa-instagram ${Styles["fa-icon"]}`}></i>
						</a>
						{/* <a
							href='https://www.youtube.com/channel/UC4B79-1Sw8SWFY4CaAIMWtw'
							target='_blank' aria-label="Link do Youtube'a">
							<i className={`fa-brands fa-youtube ${Styles["fa-icon"]}`}></i>
						</a> */}
						<a
							href='https://www.tiktok.com/@bluzlo_'
							target='_blank'
							aria-label="Link do Tiktok'a">
							<i className={`fa-brands fa-tiktok ${Styles["fa-icon"]}`}></i>
						</a>
						<a
							href='https://www.linkedin.com/company/bluzlo/about/'
							target='_blank'
							aria-label="Link do LinkedIn'a">
							<i
								className={`fa-brands fa-linkedin-in ${Styles["fa-icon"]}`}></i>
						</a>
					</div>
				</div>
			</div>
			<div className={Styles.features}>
				<p className={Styles.feature}>
					<i className={`fa-solid fa-shirt ${Styles["fa-icon"]}`}></i> darmowe
					próbki
				</p>
				<p className={`${Styles.feature} ${Styles["feature--highlighted"]}`}>
					<i className={`fa-solid fa-award ${Styles["fa-icon"]}`}></i> jakość
					premium
				</p>
				<p className={Styles.feature}>
					<i className={`fa-solid fa-truck-fast ${Styles["fa-icon"]}`}></i>{" "}
					szybka realizacja
				</p>
			</div>
		</header>
	)
}

export default Header
