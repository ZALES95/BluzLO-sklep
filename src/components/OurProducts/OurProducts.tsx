import Styles from "./OurProducts.module.scss"
// import { Link } from "react-router-dom"

import SingleRealization from "../SingleRealization/SingleRealization"
import { products } from "../../DataFetch/fetchOurProducts"

const OurProducts = () => {
	return (
		<section className='sectionPadding wrapper' id='nasze-produkty'>
			<h2 className='sectionHeading'>nasze produkty</h2>
			<div className={Styles.productsBox}>
				{products?.map((el, index) => (
					<SingleRealization
						key={index}
						img={el.img}
						alt={el.alt}
						title={el.title}
					/>
				))}
			</div>
			{/* <Link to='/sklep' className={`normalText ${Styles.link}`}>
				Sprawdź aktualne produkty u nas w sklepie
			</Link> */}
		</section>
	)
}

export default OurProducts
