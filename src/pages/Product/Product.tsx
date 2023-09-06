import React, { useState, useEffect } from "react"
import Styles from "./Product.module.scss"
import { useParams } from "react-router-dom"
import { getTimeLeft } from "../../Functions/GetTimeLeft"
import { CartProductType } from "../../interfaces/CartProductType"
import ProductShortcut from "../../components/ProductShortcut/ProductShortcut"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartReducer"
import CartPopup from "../../components/CartPopup/Cartpopup"
import { SingleProductType } from "../../interfaces/SingleProductType"
import useFetch from "../../hooks/useFetch"

const Product = () => {
	const { productId } = useParams()
	const { data, loading, error } = useFetch("/products")
	const [currentProduct, setCurrentProduct] = useState<SingleProductType>()
	const [currentMainImg, setCurrentMainImg] = useState<string | undefined>("")

	useEffect(() => {
		const metaTag = document.createElement("meta")
		metaTag.name = "robots"
		metaTag.content = "noindex"
		document.head.appendChild(metaTag)

		return () => {
			document.head.removeChild(metaTag)
		}
	}, [])

	const initialFormValue = {
		id: currentProduct?.id || 0,
		schoolName: currentProduct?.attributes?.schoolName || "",
		mainImg: "",
		title: currentProduct?.attributes?.title || "",
		price: currentProduct?.attributes?.price || 0,
		discountPrice: currentProduct?.attributes?.discountPrice || 0,
		quantity: 1,
		size: "",
		color: "",
	}
	const [productForm, setProductForm] =
		useState<CartProductType>(initialFormValue)

	const getProductId = (id: string) => {
		if (id) {
			return parseInt(id)
		}
	}

	useEffect(() => {
		const findCurrentProduct = data?.find(el => {
			if (productId) {
				return el.id === getProductId(productId)
			}
		})
		setCurrentProduct(findCurrentProduct)
	}, [data, productId])

	useEffect(() => {
		document.title =
			`${currentProduct?.attributes?.title} ${currentProduct?.attributes?.schoolName}` ||
			"BluzLO - Merch dla szkół, uczelni oraz firm"
		setCurrentMainImg(currentProduct?.attributes?.mainImg)
		setProductForm(initialFormValue)
	}, [currentProduct])

	const [errorMsg, setErrorMsg] = useState<string>("")
	const [isCartPopup, setIsCartPopup] = useState<boolean>(false)

	const dispatch = useDispatch()

	const additionalSchoolProducts = data?.filter(el => {
		return (
			el.attributes?.schoolName === currentProduct?.attributes?.schoolName &&
			el.attributes?.title !== currentProduct?.attributes?.title
		)
	})

	const handleCurrentImg = (imgUrl: string) => {
		setCurrentMainImg(imgUrl)
	}

	const handleProductForm = (
		e: React.MouseEvent<HTMLElement>,
		value: string
	) => {
		const dataName = (e.target as HTMLElement).getAttribute("data-name")
		let currentColorImg = ""

		if (dataName) {
			if (dataName === "color") {
				const currentColor = currentProduct?.attributes?.allColorImages?.find(
					el => el.name === value
				)
				currentColorImg =
					currentColor?.img || currentProduct?.attributes?.mainImg || ""
				setCurrentMainImg(currentColorImg)
			}
			setProductForm(prevForm => ({
				...prevForm,
				[dataName]: value,
				mainImg: dataName === "color" ? currentColorImg : prevForm.mainImg,
			}))
		}
	}

	const increaseQuantity = () => {
		setProductForm(prevForm => ({
			...prevForm,
			quantity: prevForm.quantity + 1,
		}))
	}
	const decreaseQuantity = () => {
		setProductForm(prevForm => ({
			...prevForm,
			quantity:
				prevForm.quantity >= 2 ? prevForm.quantity - 1 : prevForm.quantity,
		}))
	}

	const handleCartAdd = () => {
		const { price, schoolName, title, id, quantity, size, color } = productForm

		const isCorrectColor = currentProduct?.attributes?.colors.find(
			el => el.name === color
		)
		const isValidSize = currentProduct?.attributes?.sizes.indexOf(size) !== -1

		if (
			price === currentProduct?.attributes?.price &&
			schoolName === currentProduct?.attributes?.schoolName &&
			title === currentProduct?.attributes?.title &&
			id === currentProduct?.id &&
			quantity >= 1 &&
			isValidSize &&
			isCorrectColor
		) {
			dispatch(addToCart(productForm))
			setIsCartPopup(true)
			setErrorMsg("")
			setProductForm(initialFormValue)
		} else {
			if (!isCorrectColor) {
				setErrorMsg("Wybierz kolor!")
			} else if (!isValidSize) {
				setErrorMsg("Wybierz rozmiar!")
			} else {
				setErrorMsg("Musisz podać wszystkie informacje poprawnie!")
			}
		}
	}

	const additionalProductsToDisplay = additionalSchoolProducts?.map(
		(el, index) => (
			<ProductShortcut
				key={index}
				id={el.id}
				schoolName={el.attributes?.schoolName}
				title={el.attributes?.title}
				price={el.attributes?.price}
				discountPrice={el.attributes?.discountPrice}
				colors={el.attributes?.colors}
				expirationDate={el.attributes?.expirationDate}
				mainImg={el.attributes?.mainImg}
			/>
		)
	)

	return (
		<>
			{error ? (
				<p
					className={`${Styles.title} ${Styles.otherMsg}`}
					style={{ textTransform: "none" }}>
					Wystąpił błąd, spróbuj jeszcze raz!
				</p>
			) : (
				<>
					{loading ? (
						<p className={`${Styles.title} ${Styles.otherMsg}`}>Ładowanie...</p>
					) : (
						<>
							{currentProduct && (
								<div
									className={`wrapper ${Styles.product}`}
									onClick={e => {
										if (isCartPopup) {
											e.stopPropagation()
											setIsCartPopup(false)
										}
									}}>
									{isCartPopup && (
										<CartPopup
											additionalProducts={additionalProductsToDisplay}
											handleDisplay={setIsCartPopup}
										/>
									)}
									<div className={Styles.mainInfo}>
										<div className={Styles.gallery}>
											<div className={Styles.time}>
												Pozostało{" "}
												{currentProduct?.attributes?.expirationDate &&
													getTimeLeft(
														currentProduct?.attributes?.expirationDate
													)}
											</div>
											<div className={Styles.top}>
												<div className={Styles.diffrentImages}>
													{currentProduct?.attributes?.allVariousImages?.map(
														(el, i) => (
															<img
																key={i}
																src={el}
																alt='produkt BluzLo'
																className={Styles.img}
																onClick={() => handleCurrentImg(el)}
															/>
														)
													)}
												</div>
												<div className={Styles.mainImgBox}>
													<img
														className={Styles.mainImg}
														alt='produkt BluzLo'
														src={currentMainImg}
													/>
												</div>
											</div>
											<div className={Styles.bottom}>
												{currentProduct?.attributes?.allColorImages?.map(
													(el, i) => (
														<img
															key={i}
															src={el.img}
															alt='produkt BluzLo'
															className={`${Styles.img} ${Styles.colorImg}`}
															onClick={() => handleCurrentImg(el.img)}
														/>
													)
												)}
											</div>
										</div>
										<div
											className={`${Styles.introduction} ${Styles.firstInfo}`}>
											<p className={`normalText ${Styles.brandName}`}>
												Od BluzLO
											</p>
											<h3 className={Styles.title}>
												{currentProduct?.attributes?.title}{" "}
												{currentProduct?.attributes?.schoolName}
											</h3>
											<p className={`normalText ${Styles.price}`}>
												{currentProduct?.attributes?.discountPrice !==
												currentProduct?.attributes?.price ? (
													<>
														<span className={Styles.oldPrice}>
															{currentProduct?.attributes?.price} zł
														</span>
														<span className={Styles.newPrice}>
															{currentProduct?.attributes?.discountPrice} zł
														</span>
													</>
												) : (
													`${currentProduct?.attributes?.discountPrice} zł`
												)}
											</p>
										</div>
										<div className={Styles.panel}>
											<div
												className={`${Styles.importantInfo} ${Styles.firstInfo}`}>
												<p className={`normalText ${Styles.brandName}`}>
													Od BluzLO
												</p>
												<h3 className={Styles.title}>
													{currentProduct?.attributes?.title}{" "}
													{currentProduct?.attributes?.schoolName}
												</h3>
												<p className={`normalText ${Styles.price}`}>
													{currentProduct?.attributes?.discountPrice !==
													currentProduct?.attributes?.price ? (
														<>
															<span className={Styles.oldPrice}>
																{currentProduct?.attributes?.price} zł
															</span>
															<span className={Styles.newPrice}>
																{currentProduct?.attributes?.discountPrice} zł
															</span>
														</>
													) : (
														`${currentProduct?.attributes?.discountPrice} zł`
													)}
												</p>
											</div>
											<div className={Styles.allSelectBoxes}>
												<div className={Styles.selectBox}>
													<p className={`normalText ${Styles.selectTitle}`}>
														Wybierz kolor
													</p>
													<div className={Styles.colors}>
														{currentProduct?.attributes?.colors?.map(
															(el, i) => (
																<button
																	data-name='color'
																	className={Styles.color}
																	aria-label='kolor'
																	key={i}
																	style={{
																		backgroundColor: el.color,
																		border:
																			productForm.color === el.name
																				? "2px solid #051040"
																				: "",
																	}}
																	onClick={e =>
																		handleProductForm(e, el.name)
																	}></button>
															)
														)}
													</div>
												</div>
												<div className={Styles.selectBox}>
													<p className={`normalText ${Styles.selectTitle}`}>
														Wybierz rozmiar
													</p>
													<div className={Styles.sizes}>
														{currentProduct?.attributes?.sizes?.map((el, i) => (
															<button
																data-name='size'
																className={`${Styles.size} smallText`}
																aria-label='rozmiar'
																key={i}
																style={{
																	border:
																		productForm.size === el
																			? "2px solid #051040"
																			: "",
																}}
																onClick={e => handleProductForm(e, el)}>
																{el}
															</button>
														))}
													</div>
												</div>
												<div className={Styles.selectBox}>
													<p className={`normalText ${Styles.selectTitle}`}>
														Wybierz ilość
													</p>
													<div className={`${Styles.quantity} smallText`}>
														<button
															className={Styles.quantityBtn}
															onClick={decreaseQuantity}
															aria-label='minus'>
															<i className={`fa-solid fa-minus`}></i>
														</button>
														<span className={Styles.productsNumber}>
															{productForm.quantity}
														</span>
														<button
															className={Styles.quantityBtn}
															onClick={increaseQuantity}
															aria-label='plus'>
															<i className='fa-solid fa-plus'></i>
														</button>
													</div>
												</div>
											</div>

											<button
												className={`mainBtn mainBtn--shop mainBtn--withCart ${Styles.cartBtn}`}
												onClick={handleCartAdd}>
												<i
													className={`fa-solid fa-cart-shopping ${Styles.cartIcon}`}></i>{" "}
												Dodaj do Koszyka
											</button>
											<p
												className={`normalText ${Styles.title} ${Styles.errorMsg}`}>
												{errorMsg}
											</p>
										</div>
									</div>

									{additionalSchoolProducts.length !== 0 && (
										<div className={Styles.subSection}>
											<h2 className='sectionHeading sectionHeading--singleProduct'>
												skompletuj swój outfit!
											</h2>
											<div className={Styles.additionalProductsBox}>
												{additionalProductsToDisplay}
											</div>
										</div>
									)}

									{currentProduct?.attributes?.parameters && (
										<div className={Styles.subSection}>
											<h2 className='sectionHeading sectionHeading--singleProduct'>
												Parametry
											</h2>
											<ul className={Styles.parametersBox}>
												{Object.keys(
													currentProduct?.attributes?.parameters
												).map((key, i) => {
													return (
														<li
															className={`smallText ${Styles.singleParam}`}
															key={i}>
															<p className={Styles.paramName}>{key}</p>
															<p>
																{currentProduct?.attributes?.parameters[key]}
															</p>
														</li>
													)
												})}
											</ul>
										</div>
									)}

									{currentProduct?.attributes?.desc && (
										<div className={Styles.subSection}>
											<h2 className='sectionHeading sectionHeading--singleProduct'>
												Opis
											</h2>
											<div className={`smallText ${Styles.mainDesc}`}>
												{currentProduct?.attributes?.desc}
											</div>
										</div>
									)}

									{currentProduct?.attributes?.sizingImg && (
										<div className={Styles.subSection}>
											<h2 className='sectionHeading sectionHeading--singleProduct'>
												Tabela rozmiarów
											</h2>
											<img
												src={currentProduct?.attributes?.sizingImg}
												alt='Tabela rozmiarów bluzlo'
												className={Styles.mainImg}
											/>
										</div>
									)}

									<div className={Styles.subSection}>
										<h2 className='sectionHeading sectionHeading--singleProduct'>
											Wysyłka
										</h2>
										<div className={`smallText ${Styles.mainDesc}`}>
											Każdą zamówioną bluzę wysyłamy na nasz koszt do twojej
											szkoły. Dalszych informacji o odbiorze szukaj na stronie
											twojego liceum. Jeżeli jednak nie możesz odebrać bluzy w
											szkole, to możesz zamówić ją do domu. W razie problemów
											nasze dane kontaktowe są dostępne w zakładce Kontakt. 🙂
										</div>
									</div>
								</div>
							)}
						</>
					)}
				</>
			)}
		</>
	)
}

export default React.memo(Product)
