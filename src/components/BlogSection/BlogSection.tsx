import Styles from "./BlogSection.module.scss"
import SingleArticle from "../SingleArticle/SingleArticle"
import { posts } from "../../DataFetch/fetchPosts"

const Blog = () => {
	const blogPostsReduced = posts?.slice(0, 3)
	return (
		<section className={`wrapper ${Styles.blogSection}`}>
			<h2 className='sectionHeading'>dowiedz się więcej!</h2>
			<div className={Styles.posts}>
				{blogPostsReduced?.map((el, index) => (
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
