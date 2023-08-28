import Styles from "./OurRealizations.module.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SingleRealization from "../SingleRealization/SingleRealization"
import { realizations } from "../../DataFetch/fetchRealizations"

const OurRealizations = () => {
	const settings = {
		dots: true,
		mobileFirst: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<section
			className={` ${Styles.ourRealizations} wrapper`}
			id='nasze-realizacje'>
			<h2 className='sectionHeading'>nasze realizacje</h2>
			<Slider {...settings}>
				{realizations?.map((el, index) => (
					<SingleRealization
						key={index}
						img={el.img}
						alt={el.alt}
						title={el.title}
						aspectRatio={true}
					/>
				))}
			</Slider>
		</section>
	)
}

export default OurRealizations
