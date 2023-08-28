import LogoImg from "../../assets/logo.webp"
import Styles from "./Footer.module.scss"
import { Link } from "react-router-dom"
import Policy from "../../assets/PolitykaPrywatności.pdf"

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<footer className={Styles.footer}>
			<div className={Styles.topBorder}>
				<div className={`${Styles.top} wrapper`}>
					<div className={Styles.left}>
						<Link to='/' className={Styles.link}>
							<img
								src={LogoImg}
								alt='Logo firmy BluzLo'
								className={`${Styles.img} ${Styles.link}`}
							/>
						</Link>
						<a
							href='tel:+48730118620'
							className={`${Styles.phone} ${Styles.link} normalText`}>
							+48 730 118 620
						</a>
						<a
							href='mailto:bok@bluzlo.pl'
							className={`${Styles.mail} ${Styles.link} normalText`}>
							bok@bluzlo.pl
						</a>
						<div className={Styles.icons}>
							<a
								href='https://www.facebook.com/bluzlo'
								target='_blank'
								aria-label="Link do Facebook'a">
								<i
									className={`fa-brands fa-facebook ${Styles.link} normalText`}></i>
							</a>
							<a
								href='https://www.instagram.com/bluzlo/'
								target='_blank'
								aria-label="Link do Instagram'a">
								<i
									className={`fa-brands fa-instagram ${Styles.link} normalText`}></i>
							</a>
							<a
								href='https://www.youtube.com/channel/UC4B79-1Sw8SWFY4CaAIMWtw'
								target='_blank'
								aria-label="Link do Youtube'a">
								<i
									className={`fa-brands fa-youtube ${Styles.link} normalText`}></i>
							</a>
							<a
								href='https://www.tiktok.com/@bluzlo_'
								target='_blank'
								aria-label="Link do Tiktok'a">
								<i
									className={`fa-brands fa-tiktok ${Styles.link} normalText`}></i>
							</a>
							<a
								href='https://www.linkedin.com/company/bluzlo/about/_'
								target='_blank'
								aria-label="Link do LinkedIn'a">
								<i
									className={`fa-brands fa-linkedin-in ${Styles.link} normalText`}></i>
							</a>
						</div>
					</div>
					<div className={Styles.right}>
						<div className={Styles.linksSection}>
							<p className={`${Styles.title} smallText`}>produkt</p>
							<ul className={Styles.list}>
								<li>
									<a
										href='#nasze-produkty'
										className={`${Styles.link} smallText`}>
										nasze produkty
									</a>
								</li>
								<li>
									<a href='#oferta' className={`${Styles.link} smallText`}>
										oferta
									</a>
								</li>
								<li>
									<a
										href='#etapy-realizacji'
										className={`${Styles.link} smallText`}>
										etapy realizacji
									</a>
								</li>
								<li>
									<a
										href='#nasze-realizacje'
										className={`${Styles.link} smallText`}>
										nasze realizacje
									</a>
								</li>
							</ul>
						</div>
						<div className={Styles.linksSection}>
							<p className={`${Styles.title} smallText`}>bluzlo</p>
							<ul className={Styles.list}>
								<li>
									<a href='#o-nas' className={`${Styles.link} smallText`}>
										dlaczego my
									</a>
								</li>
								<li>
									<a href='#wspolpraca' className={`${Styles.link} smallText`}>
										współpraca
									</a>
								</li>
								<li>
									<a href='#opinie' className={`${Styles.link} smallText`}>
										opinie
									</a>
								</li>
								<li>
									<Link to='/blog' className={`${Styles.link} smallText`}>
										blog
									</Link>
								</li>
							</ul>
						</div>
						<div className={Styles.linksSection}>
							<p className={`${Styles.title} smallText`}>pomoc</p>
							<ul className={Styles.list}>
								<li>
									<Link to='/cennik' className={`${Styles.link} smallText`}>
										wycena
									</Link>
								</li>
								<li>
									<Link to='/kontakt' className={`${Styles.link} smallText`}>
										kontakt
									</Link>
								</li>

								<li>
									<a href='#faq' className={`${Styles.link} smallText`}>
										FAQ
									</a>
								</li>
								<li>
									<a
										href={Policy}
										className={`${Styles.link} smallText`}
										target='_blank'>
										polityka prywatności
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<p className={`${Styles.bottom} wrapper smallText`}>
				&copy;{currentYear} - BluzLo | Wszystkie prawa zastrzeżone
			</p>
		</footer>
	)
}

export default Footer
