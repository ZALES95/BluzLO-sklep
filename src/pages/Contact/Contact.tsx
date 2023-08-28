import React, { useEffect } from "react"
import Styles from "./Contact.module.scss"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
	useEffect(() => {
		document.title = "Kontakt BluzLO - Merch dla szkół, uczelni oraz firm"
	}, [])
	const form = useRef(null)
	const [errorMsg, setErrorMsg] = useState<string>("")

	const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
	const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
	const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (form.current) {
			emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
				() => {
					setErrorMsg("Wiadmość wysłana! Odezwiemy się do Ciebie w ciągu 24h.")
					;(e.target as HTMLFormElement).reset()
				},
				error => {
					setErrorMsg(
						`Coś poszło nie tak... Spróbuj ponownie. Błąd: ${error.text}`
					)
				}
			)
		}
	}

	return (
		<section className={`wrapper ${Styles.contact}`}>
			<h2 className={Styles.heading}>Skontaktuj się z Nami</h2>
			<form className={Styles.form} ref={form} onSubmit={e => sendEmail(e)}>
				<div className={Styles.singleInput}>
					<label htmlFor='user_name' className='smallText'>
						<i className={`fa-solid fa-user ${Styles.icon}`}></i> Imię i
						Nazwisko
					</label>
					<input
						name='user_name'
						className={Styles.input}
						required
						id='user_name'
					/>
				</div>
				<div className={Styles.singleInput}>
					<label htmlFor='email' className='smallText'>
						<i className={`fa-solid fa-envelope ${Styles.icon}`}></i> Email
					</label>
					<input
						type='email'
						name='email'
						className={Styles.input}
						required
						id='email'
					/>
				</div>
				<div className={Styles.singleInput}>
					<label htmlFor='schoolName' className='smallText'>
						<i className={`fa-solid fa-building ${Styles.icon}`}></i> Placówka
						(opcjonalne)
					</label>
					<input name='schoolName' className={Styles.input} id='schoolName' />
				</div>

				<div className={Styles.singleInput}>
					<label htmlFor='phoneNumber' className='smallText'>
						<i className={`fa-solid fa-phone ${Styles.icon}`}></i> Numer
						telefonu (opcjonalne)
					</label>
					<input
						type='tel'
						name='phoneNumber'
						className={Styles.input}
						id='phoneNumber'
					/>
				</div>
				<div className={Styles.singleInput}>
					<label htmlFor='message' className='smallText'>
						<i className={`fa-solid fa-message ${Styles.icon}`}></i> Wiadomość
					</label>
					<textarea
						name='message'
						required
						id='message'
						className={Styles.message}></textarea>
				</div>

				<button
					type='submit'
					className={`${Styles.submit} mainBtn mainBtn--small`}>
					Wyślij wiadomość
				</button>
				<p className={`normalText ${Styles.errorMsg}`}>{errorMsg}</p>
			</form>
		</section>
	)
}

export default Contact
