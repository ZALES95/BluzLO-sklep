import Styles from "./QuickMsg.module.scss"
import { Link } from "react-router-dom"

const QuickMsg = () => {
	return (
		<>
			<a
				href='tel:+48730118620'
				className={`${Styles.iconBox} ${Styles.phone}`}
				aria-label='Link do Kontaktu'>
				<i className={`fa-solid fa-phone-volume ${Styles.icon}`}></i>
			</a>
			<Link
				to='/kontakt'
				className={`${Styles.iconBox} ${Styles.msg}`}
				aria-label='Link do Kontaktu'>
				<i className={`fa-regular fa-comment-dots ${Styles.icon}`}></i>
			</Link>
		</>
	)
}

export default QuickMsg
