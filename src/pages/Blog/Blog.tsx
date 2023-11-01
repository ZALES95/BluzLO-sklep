import { posts } from "../../DataFetch/fetchPosts"
import Styles from "./Blog.module.scss"
import SingleArticle from "../../components/SingleArticle/SingleArticle"
import { useEffect } from "react"

const Blog = () => {
	useEffect(() => {
		document.title = "Blog BluzLO - Merch dla szkół. uczelni oraz firm"
	}, [])
	return (
		<section className={`wrapper ${Styles.blog}`}>
			<h2 className={Styles.heading}>Dowiedz się więcej!</h2>
			<div className={Styles.posts}>
				{posts?.map((el, index) => (
					<SingleArticle
						key={index}
						img={el.img}
						title={el.title}
						alt={el.alt}
						url={el.url}
					/>
				))}
			</div>
		</section>
	)
}

export default Blog
