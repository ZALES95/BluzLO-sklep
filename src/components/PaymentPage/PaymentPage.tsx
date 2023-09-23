import Styles from "./PaymentPage.module.scss"
import { useEffect } from "react"

const PaymentPage: React.FC<{
	success: boolean
}> = ({ success }) => {
	useEffect(() => {
		const metaTag = document.createElement("meta")
		metaTag.name = "robots"
		metaTag.content = "noindex"
		document.head.appendChild(metaTag)

		return () => {
			document.head.removeChild(metaTag)
		}
	}, [])

	return (
		<div className={Styles.paymentPage}>
			<i
				style={success ? { color: "#22BB33" } : { color: "#bb2124" }}
				className={
					success
						? `${Styles.icon} fa-solid fa-circle-check`
						: `${Styles.icon} fa-solid fa-circle-xmark`
				}></i>
			<p className={`${Styles.title} normalText`}>
				{success
					? "Płatność zrealizowana pomyślnie"
					: "Płatność niezrealizowana pomyślnie"}
			</p>
			<p className={`smallText ${Styles.desc}`}>
				{success
					? "Realizacja płatności zakończona sukcesem. Wyślemy zamówienie na adres Twojej instytucji po zakończeniu okresu sprzedażowego."
					: "Wystąpił błąd w realizacji płatności. Nie martw się, Twoje konto bankowe nie zostało obciążone. W razie potrzeby napisz do nas na bok@bluzlo.pl."}
			</p>
		</div>
	)
}

export default PaymentPage
