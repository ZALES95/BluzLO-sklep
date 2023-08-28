import React from "react"
import Styles from "./ProductShortcut.module.scss"
import { ProductShortcutType } from "../../interfaces/ProductShortcutType"
import { Link } from "react-router-dom"
import { getTimeLeft } from "../../Functions/GetTimeLeft"

const ProductShortcut: React.FC<ProductShortcutType> = ({
	id,
	schoolName,
	title,
	price,
	discountPrice,
	colors,
	expirationDate,
	mainImg,
}) => {
	return (
		<Link to={`/sklep/${id.toString()}`} className={Styles.productShortcut}>
			<div className={Styles.time}>Pozostało {getTimeLeft(expirationDate)}</div>
			<img src={mainImg} alt='Zdjęcie Produktu Bluzlo' className={Styles.img} />
			<div className={Styles.desc}>
				<div className={Styles.price}>
					{discountPrice !== price ? (
						<>
							<span className={Styles.oldPrice}>{price} zł</span>
							<span className={Styles.newPrice}>{discountPrice} zł</span>
						</>
					) : (
						`${discountPrice} zł`
					)}
				</div>
				<p className={Styles.title}>
					{title} {schoolName}
				</p>
				<div className={Styles.colors}>
					{colors?.map((el, i) => (
						<span
							className={Styles.color}
							key={i}
							style={{ backgroundColor: el.color }}></span>
					))}
				</div>
			</div>
		</Link>
	)
}

export default ProductShortcut
