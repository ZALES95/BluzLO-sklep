import { useParams } from "react-router-dom"
// import { blogPosts } from "../../DataFetch/fetchBlogPosts"
import Styles from "./BlogArticle.module.scss"
import SingleArticle from "../../components/SingleArticle/SingleArticle"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { posts } from "../../DataFetch/fetchPosts"

const Blog = () => {
	const { articleName } = useParams()
	const currentArticle = posts?.find(el => el.url === articleName)
	const blogPostsFiltered = posts?.filter(el => el.url !== articleName)
	useEffect(() => {
		document.title =
			currentArticle?.title || "BluzLO - Merch dla szkół, uczelni oraz firm"
		const metaTag = document.createElement("meta")
		metaTag.name = "description"
		metaTag.content =
			currentArticle?.metaDesc ||
			"Szukasz jakościowego merchu z logiem twojej szkoły, uczelni lub firmy? W BluzLO znajdziesz szeroki wybór unikalnych produktów, które na pewno oddadzą ducha twojej instytucji."
		document.head.appendChild(metaTag)

		return () => {
			document.head.removeChild(metaTag)
		}
	}, [])

	return (
		<article className={`wrapper ${Styles.singleBlogArticle}`}>
			<h1 className={Styles.heading}>{currentArticle?.title}</h1>

			<img
				src={currentArticle?.img}
				alt={currentArticle?.alt}
				className={Styles.img}
			/>

			{currentArticle?.component && <currentArticle.component />}

			<img
				src={currentArticle?.img2}
				alt={currentArticle?.alt2}
				className={Styles.img}
			/>

			{blogPostsFiltered.length !== 0 && (
				<>
					<p className={`${Styles.smallHeader} normalText`}>
						Przeczytaj także...
					</p>
					<div className={Styles.posts}>
						{blogPostsFiltered?.map((el, index) => (
							<SingleArticle
								key={index}
								img={el.img}
								title={el.title}
								alt={el.alt}
								url={el.url}
							/>
						))}
					</div>
				</>
			)}
			<div className={Styles.links}>
				<Link to='/blog' className={`${Styles.link} normalText`}>
					Powrót...
				</Link>
				<Link to='/' className={`${Styles.link} normalText`}>
					Strona Główna...
				</Link>
			</div>
		</article>
	)
}

export default Blog
