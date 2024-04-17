import { useState } from "react"
import Styles from "./Navbar.module.scss"
import "../../scss/hamburger.scss"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.webp"
import NavLinks from "../NavLinks/NavLinks"
import { useSelector } from "react-redux"
import { CartProductType } from "../../interfaces/CartProductType"

const Navbar = () => {
	const [isActive, setIsActive] = useState<boolean>(false)
	const products = useSelector(
		(state: { cart: { products: CartProductType[] } }) => state.cart.products
	)

	const handleMobileNav = () => {
		setIsActive(prev => !prev)
	}

	return (
		<>
			<nav className={Styles.nav}>
				<div className={Styles.navMobile}>
					<button
						aria-label='Przycisk do nawigacji mobilnej'
						className={`hamburger hamburger--spin ${
							isActive ? "is-active" : ""
						}`}
						type='button'
						onClick={handleMobileNav}>
						<span className='hamburger-box'>
							<span className='hamburger-inner'></span>
						</span>
					</button>
					{isActive ? (
						<NavLinks handleMobileNav={handleMobileNav} mobile={true} />
					) : (
						<>
							<div className={Styles.top}>
								<div className={Styles.left}>
									<Link to='/' className={Styles.link}>
										<img src={Logo} alt='Logo BluzLo' className={Styles.logo} />
									</Link>
								</div>
								<div className={Styles.right}>
									<Link
										to='/koszyk'
										className={`${Styles.cartIconBox} ${Styles.link}`}>
										<i
											className={`fa-solid fa-cart-shopping ${Styles.cartIcon}`}></i>
										<span className={Styles.itemsNumber}>
											{products.length}
										</span>
									</Link>
								</div>
							</div>
							<div className={Styles.bottom}>
								<Link
									to='/kontakt'
									className={`${Styles.link} link-hover ${Styles.linkMail}`}>
									<i className='fa-solid fa-envelope'></i> bok@bluzlo.pl
								</Link>
								<Link
									to='/wycena'
									className={`${Styles.link} link-hover`}
									style={{ textAlign: "right" }}>
									Bezpłatna Wycena
								</Link>
							</div>
						</>
					)}
				</div>
				<div className={`${Styles.navDesktop} wrapper`}>
					<div className={Styles.left}>
						<Link to='/' className={Styles.link}>
							<img src={Logo} alt='Logo BluzLo' className={Styles.logo} />
						</Link>
					</div>
					{/* <div className={Styles.center}>
						
					</div> */}
					<div className={Styles.right}>
						<NavLinks mobile={false} />
						<Link
							to='/wycena'
							className={`mainBtn mainBtn--small mainBtn--alternative ${Styles.pricingBtn}`}>
							Bezpłatna Wycena
						</Link>

						<Link
							to='/koszyk'
							className={`${Styles.cartIconBox} ${Styles.link}`}>
							<i className={`fa-solid fa-cart-shopping ${Styles.cartIcon}`}></i>
							<span className={Styles.itemsNumber}>{products.length}</span>
						</Link>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
