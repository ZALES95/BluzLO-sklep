import Styles from "./CartPopup.module.scss"
import { Link } from "react-router-dom"

const CartPopup: React.FC<{
	additionalProducts: JSX.Element[]
	handleDisplay: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ additionalProducts, handleDisplay }) => {
	const handlePopupClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}
	return (
		<div className={`${Styles.cartPopup}`} onClick={handlePopupClick}>
			<i
				className={`${Styles.icon} fa-solid fa-xmark`}
				onClick={() => handleDisplay(false)}></i>
			<p className={Styles.title}>Dodałeś przedmiot do koszyka</p>
			<p className={`normalText ${Styles.info}`}>
				Więcej produktów z Twojej szkoły
			</p>
			<div
				className={Styles.additionalProductsBox}
				onClick={() => handleDisplay(false)}>
				{additionalProducts}
			</div>
			<div className={Styles.buttons}>
				<Link
					to='/sklep'
					className='mainBtn mainBtn--small'
					onClick={() => handleDisplay(false)}>
					Kontynuuj Zakupy
				</Link>

				<Link
					to='/koszyk'
					className='mainBtn mainBtn--small mainBtn--selected'
					onClick={() => handleDisplay(false)}>
					Idź do Koszyka
				</Link>
			</div>
		</div>
	)
}

export default CartPopup
