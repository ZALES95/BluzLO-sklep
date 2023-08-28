import { useParams } from "react-router-dom"
import { blogPosts } from "../../DataFetch/fetchBlogPosts"
import Styles from "./BlogArticle.module.scss"
import SingleArticle from "../../components/SingleArticle/SingleArticle"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Blog = () => {
	const { articleName } = useParams()
	const currentArticle = blogPosts?.find(el => el.url === articleName)
	const blogPostsFiltered = blogPosts?.filter(el => el.url !== articleName)
	useEffect(() => {
		document.title = currentArticle?.title || 'BluzLO - Merch dla szkół, uczelni oraz firm'
	}, [])
	return (
		<article className={`wrapper ${Styles.singleBlogArticle}`}>
			<h1 className={Styles.heading}>{currentArticle?.title}</h1>
			<div className={Styles.postBody}>
				<div className={Styles.contentBox}>
					<img
						src={currentArticle?.img}
						alt={currentArticle?.alt}
						className={Styles.img}
					/>
					<p className={`${Styles.desc} smallText`}>
						{currentArticle?.mainDesc}
					</p>
				</div>
				{currentArticle?.section.map((el, i) => (
					<div key={i} className={Styles.contentBox}>
						<p className={`${Styles.smallHeader} normalText`}>{el.header}</p>

						<p className={`${Styles.desc} smallText`}>{el.desc}</p>
					</div>
				))}
			</div>
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
