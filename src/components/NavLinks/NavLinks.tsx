import React from "react"
import Styles from "./NavLinks.module.scss"
import { Link } from "react-router-dom"
type NavLinksProps = {
	handleMobileNav?: () => void
	mobile: boolean
}

const NavLinks: React.FC<NavLinksProps> = ({ handleMobileNav, mobile }) => {
	return (
		<ul className={Styles.allLinks}>
			<li onClick={handleMobileNav}>
				<Link to='/shop' className={`${Styles.link} link-hover`}>
					sklep
				</Link>
			</li>
			{/* <li onClick={handleMobileNav}>
				<Link to='/cennik' className={`${Styles.link} link-hover`}>
					wycena
				</Link>
			</li> */}
			<li onClick={handleMobileNav}>
				<Link to='/kontakt' className={`${Styles.link} link-hover`}>
					kontakt
				</Link>
			</li>

			<li onClick={handleMobileNav}>
				<a href='/#oferta' className={`${Styles.link} link-hover`}>
					oferta
				</a>
			</li>

			<li onClick={handleMobileNav}>
				<a href='/#nasze-realizacje' className={`${Styles.link} link-hover`}>
					realizacje
				</a>
			</li>
			<li onClick={handleMobileNav}>
				<a href='/#opinie' className={`${Styles.link} link-hover`}>
					opinie
				</a>
			</li>

			{mobile && (
				<li onClick={handleMobileNav}>
					<Link to='/blog' className={`${Styles.link} link-hover`}>
						blog
					</Link>
				</li>
			)}
			{mobile && (
				<li onClick={handleMobileNav}>
					<a href='#o-nas' className={`${Styles.link} link-hover`}>
						dlaczego my
					</a>
				</li>
			)}
		</ul>
	)
}

export default NavLinks
