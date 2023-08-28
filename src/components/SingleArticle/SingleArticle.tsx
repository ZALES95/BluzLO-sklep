import Styles from "./SingleArticle.module.scss"
import { SingleRealizationType } from "../../interfaces/SingleRealization"
import { Link } from "react-router-dom"

const SingleArticle: React.FC<SingleRealizationType> = ({
	title,
	img,
	alt,
	url,
}) => {
	return (
		<Link to={`/blog/${url}`} className={Styles.post}>
			<img src={img} alt={alt} className={Styles.img} />
			<h3 className={`normalText ${Styles.title}`}>{title}</h3>
			<button className={`mainBtn mainBtn--small ${Styles.btn}`}>
				Czytaj Więcej
			</button>
		</Link>
	)
}

export default SingleArticle
