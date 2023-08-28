import React from "react"
import Styles from "./SingleRealization.module.scss"
import { SingleRealizationType } from "../../interfaces/SingleRealization"

const SingleRealization: React.FC<SingleRealizationType> = ({
	img,
	alt,
	title,
	aspectRatio,
}) => {
	return (
		<div
			className={Styles.product}
			style={{ aspectRatio: aspectRatio ? "auto" : "" }}>
			<img src={img} alt={alt} className={Styles.image} />
			<div className={`${Styles.name} normalText`}>{title}</div>
		</div>
	)
}

export default SingleRealization
