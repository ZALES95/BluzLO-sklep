import React, { useRef, useState, useEffect } from "react"
import Styles from "./Pricing.module.scss"
import { products } from "../../DataFetch/fetchOurProducts"
import emailjs from "@emailjs/browser"
import Policy from "../../assets/PolitykaPrywatności.pdf"

const Pricing = () => {
     useEffect(() => {
		document.title = 'Bezpłatna wycena merchu z logiem szkoły, uczelni oraz firmy'
	}, [])

	const form = useRef(null)
	const pageRefs = useRef<React.MutableRefObject<HTMLElement | null>[]>([])
	const initialFormValue = {
		products: [],
		productsNumber: "1",
		schoolName: "",
		email: "",
		phoneNumber: "",
		message: "",
	}
	const [pricingform, setPricingForm] = useState<{
		products: string[]
		productsNumber: string
		schoolName?: string
		email: string
		phoneNumber: string
		message?: string
	}>(initialFormValue)

	const [errorMsg, setErrorMsg] = useState<string>("")
	const [policyChecked, setPolicyChecked] = useState<boolean>(false)

	const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
	const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID2
	const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

	const isValidEmail = (email: string) => {
		const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
		return emailRegex.test(email)
	}

	const isValidPhoneNumber = (phoneNumber: string) => {
		const phoneRegex = /^(\+48)?[0-9]{9}$/

		return phoneRegex.test(phoneNumber)
	}

	const setRef = (index: number, ref: HTMLElement | null) => {
		if (!pageRefs.current[index]) {
			pageRefs.current[index] = React.createRef()
		}
		pageRefs.current[index].current = ref
	}

	const previousPage = (index: number) => {
		if (pageRefs.current[index] && pageRefs.current[index].current) {
			// eslint-disable-next-line
			;(pageRefs.current[index].current as HTMLElement).style.display = "none"
			;(pageRefs.current[index - 1].current as HTMLElement).style.display =
				"flex"
		}
	}
	const nextPage = (index: number) => {
		if (pageRefs.current[index] && pageRefs.current[index].current) {
			if (index === 1 && pricingform.products.length === 0) {
				setErrorMsg("Musisz zanznaczyć chociaż 1 produkt!")
			} else if (
				index === 2 &&
				(parseInt(pricingform.productsNumber) <= 0 ||
					isNaN(parseInt(pricingform.productsNumber)))
			) {
				setErrorMsg("Musisz podać liczbę większą od 0!")
			} else if (index === 5 && !isValidEmail(pricingform.email)) {
				setErrorMsg("Musisz podać prawidłowy email!")
			} else if (index === 6 && !isValidPhoneNumber(pricingform.phoneNumber)) {
				setErrorMsg("Musisz podać prawidłowy numer telefonu!")
			} else {
				// eslint-disable-next-line
				;(pageRefs.current[index].current as HTMLElement).style.display = "none"
				;(pageRefs.current[index + 1].current as HTMLElement).style.display =
					"flex"
				setErrorMsg("")
			}
		}
	}

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target

		setPricingForm(prevForm => {
			return {
				...prevForm,
				[name]: value,
			}
		})
	}

	const addProductsToForm = (name: string) => {
		setPricingForm(prevForm => {
			if (prevForm.products.find(el => el === name)) {
				return {
					...prevForm,
					products: prevForm.products.filter(el => el !== name),
				}
			} else {
				return { ...prevForm, products: [...prevForm.products, name] }
			}
		})
	}

	const formSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (policyChecked) {
			if (form.current) {
				emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
					() => {
						setErrorMsg(
							"Wiadmość wysłana! Odezwiemy się do Ciebie w ciągu 24h."
						)
						;(e.target as HTMLFormElement).reset()
					},
					error => {
						setErrorMsg(
							`Coś poszło nie tak... Spróbuj ponownie. Błąd: ${error.text}`
						)
					}
				)
				setErrorMsg("")
			}
		} else {
			setErrorMsg("Musisz zaakceptować politykę prywatności!")
		}
	}

	return (
		<div className={`wrapper ${Styles.pricing}`}>
			<form className={Styles.form} onSubmit={formSubmit} ref={form}>
				<div
					className={`${Styles.page} ${Styles.mainPage}`}
					ref={ref => setRef(0, ref)}>
					<div className={Styles.mainImg}></div>
					<div className={Styles.pageBody}>
						<p className={`${Styles.title}`}>
							Uzupełnij formularz i otrzymaj bezpłatną wycenę w ciągu 24h!
						</p>
						<div className={Styles.bottom}>
							<p className={`smallText ${Styles.shortInfo}`}>
								<i className={`fa-solid fa-clock ${Styles.iconTime}`}></i>
								Zajmuje 2 minuty
							</p>
							<button
								type='button'
								className='mainBtn mainBtn--small mainBtn--pricing'
								onClick={() => nextPage(0)}>
								Rozpocznij
							</button>
						</div>
					</div>
				</div>
				<div
					className={`${Styles.page} ${Styles.normalPage}`}
					ref={ref => setRef(1, ref)}>
					<div className={Styles.pageBody}>
						<p className={`${Styles.title}`}>
							1. Zaznacz, które produkty Cię interesują
						</p>
						<div className={Styles.bottom}>
							<p className={`normalText ${Styles.shortInfo}`}>
								Wybierz tyle, ile potrzebujesz
							</p>

							<div className={Styles.productsBox}>
								{products?.map((el, index) => (
									<div
										key={index}
										className={Styles.product}
										onClick={() => addProductsToForm(el.title)}
										style={{
											border: pricingform.products.find(
												product => product === el.title
											)
												? "2px solid white"
												: "",
										}}>
										<img src={el.img} alt={el.alt} className={Styles.image} />
										<div className={`${Styles.name} normalText`}>
											{el.title}
										</div>
										{pricingform.products.find(
											product => product === el.title
										) && (
											<div className={Styles.productChecked}>
												<i className={`fa-solid fa-check ${Styles.icon}`}></i>
											</div>
										)}
									</div>
								))}
							</div>

							<p className={`normalText ${Styles.shortInfo}`}>{errorMsg}</p>

							<div className={`${Styles.buttons} ${Styles.btnEnd}`}>
								<input
									value={pricingform.products}
									style={{ visibility: "hidden" }}
									name='products'
									onChange={handleFormChange}
								/>
								<button
									type='button'
									className={`mainBtn mainBtn--small mainBtn--pricing`}
									onClick={() => nextPage(1)}>
									<i className='fa-solid fa-chevron-right'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`${Styles.page} ${Styles.normalPage}`}
					ref={ref => setRef(2, ref)}>
					<div className={Styles.pageBody}>
						<p className={`${Styles.title}`}>
							2. Ile sztuk produktu potrzebujesz?
						</p>
						<div className={Styles.bottom}>
							<p className={`normalText ${Styles.shortInfo}`}>
								Podaj przybliżoną wartość
							</p>

							<input
								type='number'
								required
								min='0'
								className={Styles.input}
								name='productsNumber'
								value={pricingform.productsNumber}
								onChange={handleFormChange}
							/>

							<p className={`normalText ${Styles.shortInfo}`}>{errorMsg}</p>

							<div className={Styles.buttons}>
								<button
									type='button'
									className='mainBtn mainBtn--small mainBtn--pricing'
									onClick={() => previousPage(2)}>
									<i className='fa-solid fa-chevron-left'></i>
								</button>

								<button
									type='button'
									className={`mainBtn mainBtn--small mainBtn--pricing`}
									onClick={() => nextPage(2)}>
									<i className='fa-solid fa-chevron-right'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`${Styles.page} ${Styles.normalPage}`}
					ref={ref => setRef(3, ref)}>
					<div className={Styles.pageBody}>
						<p className={`${Styles.title}`}>3. Podaj nazwę Twojej placówki</p>
						<div className={Styles.bottom}>
							<input
								type='text'
								className={Styles.input}
								name='schoolName'
								value={pricingform.schoolName}
								onChange={handleFormChange}
							/>

							<p className={`normalText ${Styles.shortInfo}`}>{errorMsg}</p>

							<div className={Styles.buttons}>
								<button
									type='button'
									className='mainBtn mainBtn--small mainBtn--pricing'
									onClick={() => previousPage(3)}>
									<i className='fa-solid fa-chevron-left'></i>
								</button>

								<button
									type='button'
									className={`mainBtn mainBtn--small mainBtn--pricing`}
									onClick={() => nextPage(3)}>
									<i className='fa-solid fa-chevron-right'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`${Styles.page} ${Styles.normalPage}`}
					ref={ref => setRef(4, ref)}>
					<div className={Styles.pageBody}>
						<p className={`${Styles.title}`}>
							4. Czy masz jakieś dodatkowe uwagi lub pytania dotyczące naszych
							usług i produktów?
						</p>
						<div className={Styles.bottom}>
							<textarea
								name='message'
								value={pricingform.message}
								onChange={handleFormChange}
								className={Styles.input}
								placeholder='Wpisz swoją odpowiedź'></textarea>

							<p className={`normalText ${Styles.shortInfo}`}>{errorMsg}</p>

							<div className={Styles.buttons}>
								<button
									type='button'
									className='mainBtn mainBtn--small mainBtn--pricing'
									onClick={() => previousPage(4)}>
									<i className='fa-solid fa-chevron-left'></i>
								</button>

								<button
									type='button'
									className={`mainBtn mainBtn--small mainBtn--pricing`}
									onClick={() => nextPage(4)}>
									<i className='fa-solid fa-chevron-right'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`${Styles.page} ${Styles.normalPage}`}
					ref={ref => setRef(5, ref)}>
					<div className={Styles.pageBody}>
						<p className={`${Styles.title}`}>5. Podaj Twój adres e-mail*</p>
						<div className={Styles.bottom}>
							<input
								required
								type='email'
								className={Styles.input}
								name='email'
								value={pricingform.email}
								onChange={handleFormChange}
							/>

							<p className={`normalText ${Styles.shortInfo}`}>{errorMsg}</p>

							<div className={Styles.buttons}>
								<button
									type='button'
									className='mainBtn mainBtn--small mainBtn--pricing'
									onClick={() => previousPage(5)}>
									<i className='fa-solid fa-chevron-left'></i>
								</button>

								<button
									type='button'
									className={`mainBtn mainBtn--small mainBtn--pricing`}
									onClick={() => nextPage(5)}>
									<i className='fa-solid fa-chevron-right'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`${Styles.page} ${Styles.normalPage}`}
					ref={ref => setRef(6, ref)}>
					<div className={Styles.pageBody}>
						<p className={`${Styles.title}`}>6. Podaj Twój numer telefonu</p>
						<div className={Styles.bottom}>
							<input
								required
								type='tel'
								className={Styles.input}
								autoComplete='tel-national'
								name='phoneNumber'
								value={pricingform.phoneNumber}
								onChange={handleFormChange}
							/>

							<p className={`normalText ${Styles.shortInfo}`}>{errorMsg}</p>

							<div className={Styles.buttons}>
								<button
									type='button'
									className='mainBtn mainBtn--small mainBtn--pricing'
									onClick={() => previousPage(6)}>
									<i className='fa-solid fa-chevron-left'></i>
								</button>

								<button
									type='button'
									className={`mainBtn mainBtn--small mainBtn--pricing`}
									onClick={() => nextPage(6)}>
									<i className='fa-solid fa-chevron-right'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`${Styles.page} ${Styles.normalPage}`}
					ref={ref => setRef(7, ref)}>
					<div className={Styles.pageBody}>
						<p className={`${Styles.title}`}>
							7. Czy akceptujesz politykę prywatności firmy?*
						</p>
						<div className={Styles.bottom}>
							<p className={`normalText ${Styles.shortInfo}`}>
								Możesz zapoznać się z naszą politykę prywatności{" "}
								<a href={Policy} className={Styles.link} target='_blank'>
									tutaj.
								</a>{" "}
								Brak akceptacji oznacza brak możliwości kontaktu z naszej
								strony.
							</p>
							<label className={`normalText ${Styles.checkboxLabel}`}>
								Kliknij, aby zaakceptować
								<input
									type='checkbox'
									checked={policyChecked}
									className={Styles.checkbox}
									onChange={() => setPolicyChecked(prev => !prev)}
								/>
							</label>

							<p className={`normalText ${Styles.shortInfo}`}>{errorMsg}</p>

							<div className={Styles.buttons}>
								<button
									type='button'
									className='mainBtn mainBtn--small mainBtn--pricing'
									onClick={() => previousPage(7)}>
									<i className='fa-solid fa-chevron-left'></i>
								</button>

								<button className='mainBtn mainBtn--small mainBtn--pricing'>
									Wyślij
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Pricing
