import Styles from "./Cart.module.scss"
import { useSelector } from "react-redux"
import { CartProductType } from "../../interfaces/CartProductType"
import { useDispatch } from "react-redux"
import { resetCart } from "../../redux/cartReducer"
import { removeItem } from "../../redux/cartReducer"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
// import { makeRequest } from "../../makeRequest"

const Cart = () => {
	useEffect(() => {
		const metaTag = document.createElement("meta")
		metaTag.name = "robots"
		metaTag.content = "noindex"
		document.head.appendChild(metaTag)

		return () => {
			document.head.removeChild(metaTag)
		}
	}, [])

	useEffect(() => {
		document.title = "BluzLO - koszyk"
	}, [])

	const [errorMsg, setErrorMsg] = useState<string>("")

	const products = useSelector(
		(state: { cart: { products: CartProductType[] } }) => state.cart.products
	)
	const totalPrice = () => {
		let total = 0
		products.forEach(
			(item: CartProductType) => (total += item.quantity * item.price)
		)
		return total.toFixed(2)
	}
	const totalDiscountPrice = () => {
		let total = 0
		products.forEach(
			(item: CartProductType) => (total += item.quantity * item.discountPrice)
		)
		return total.toFixed(2)
	}
	const dispatch = useDispatch()

	const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

	const handlePayment = async () => {
		try {
			const stripe = await stripePromise

			const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(products),
			})
			const responseData = await response.json()

			await stripe?.redirectToCheckout({
				sessionId: responseData?.stripeSession?.id,
			})

			setErrorMsg("")
		} catch (err) {
			setErrorMsg("Wystąpił błąd... Spróbuj ponownie za chwilę!")
			console.log(err)
		}
	}

	return (
		<div className={`wrapper ${Styles.cartPage}`}>
			<div className={Styles.productsBox}>
				{products?.map((el, i) => (
					<div className={Styles.singleProduct} key={i}>
						<Link to={`/shop/${el.id}`} className={Styles.top}>
							<img
								src={el.mainImg}
								alt='produkt bluzlo'
								className={Styles.mainImg}
							/>
							<div className={Styles.titlesBox}>
								<p className={`${Styles.title} normalText`}>{el.title}</p>
								<p className={`${Styles.subTitle} smallText`}>
									{el.schoolName}
								</p>
							</div>
							<button
								className={`${Styles.removeMobile} ${Styles.removeBtn}`}
								onClick={() => dispatch(removeItem(el.id))}>
								<i className='fa-solid fa-xmark'></i>
							</button>
						</Link>
						<div className={Styles.bottom}>
							<div className={Styles.paramBox}>
								<p className={`smallText ${Styles.param}`}>
									Rozmiar: {el.size}
								</p>
								<p className={`smallText ${Styles.param}`}>Kolor: {el.color}</p>
								<p className={`smallText ${Styles.param}`}>
									Ilość: {el.quantity}
								</p>
							</div>
							<div className={Styles.sumBox}>
								<p className={`smallText ${Styles.price}`}>
									Łączna kwota:{" "}
									{el.price !== el.discountPrice ? (
										<>
											<span className={Styles.oldPrice}>
												{el.price * el.quantity} zł
											</span>
											<span className={Styles.newPrice}>
												{el.discountPrice * el.quantity} zł
											</span>
										</>
									) : (
										`${el.discountPrice * el.quantity} zł`
									)}
								</p>
							</div>
						</div>
						<button
							className={`${Styles.removeDesktop} ${Styles.removeBtn}`}
							onClick={() =>
								dispatch(
									removeItem({ id: el.id, color: el.color, size: el.size })
								)
							}>
							<i className='fa-solid fa-xmark'></i>
						</button>
					</div>
				))}
			</div>
			<button
				onClick={() => dispatch(resetCart())}
				className={`mainBtn mainBtn--small ${Styles.restartBtn}`}>
				Zresetuj Koszyk
			</button>
			<div className={Styles.checkoutBox}>
				<p className={`normalText ${Styles.title} ${Styles.totalPrice}`}>
					Do zapłaty:{" "}
					{totalPrice() !== totalDiscountPrice() ? (
						<>
							<span className={Styles.oldPrice}>{totalPrice()} zł</span>
							<span className={Styles.newPrice}>{totalDiscountPrice()} zł</span>
						</>
					) : (
						`${totalDiscountPrice()} zł`
					)}
				</p>
				<button
					className={`mainBtn mainBtn--shop ${Styles.checkoutBtn}`}
					onClick={handlePayment}>
					Przejdź do Płatności
				</button>
				{/* <p className={`smallText ${Styles.totalPrice}`}>lub</p>
				<p className={`normalText ${Styles.title} ${Styles.totalPrice}`}>
					Wykonaj przelew bankowy
				</p>
				{products.length > 0 && (
					<div className={`smallText ${Styles.totalPrice}`}>
						Prosimy o wpłatę bezpośrednio na nasze konto bankowe 02 2490 0005
						0000 4530 3004 8415 Alior Bank. Prosimy skopiować i podać jako tytuł
						płatności:{" "}
						<p className={Styles.infotextBox}>
							{"<Twój email, imię i nazwisko, numer telefonu> "}
							{products?.map((el, i) => (
								<span key={i}>
									{el.title} {el.schoolName} {el.color} {el.size} x{el.quantity}{" "}
								</span>
							))}
						</p>
						Twoje zamówienie zostanie zrealizowane po zaksięgowaniu wpłaty na
						naszym koncie.
					</div>
				)} */}
				<p className={`normalText ${Styles.title} ${Styles.totalPrice}`}>
					{errorMsg}
				</p>
			</div>
		</div>
	)
}

export default Cart
