import Styles from "./Opinions.module.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { opinionsData } from "../../DataFetch/fetchOpinions"

const Opinions = () => {
	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
	}

	return (
		<section className={Styles.opinions} id='opinie'>
			<div className='white-block white-block-right'></div>

			<h2 className='sectionHeading'>opinie klientów</h2>
			<div className={Styles.info}>
				<span className={Styles.rating}>5,0</span>
				<div className={Styles.stars}>
					<i className='fa-solid fa-star'></i>
					<i className='fa-solid fa-star'></i>
					<i className='fa-solid fa-star'></i>
					<i className='fa-solid fa-star'></i>
					<i className='fa-solid fa-star'></i>
				</div>
			</div>

			<div className={Styles.opinionsBox}>
				<Slider {...settings}>
					{opinionsData?.map((el, i) => (
						<div key={i} className={Styles.singleOpinion}>
							<p>
								<img
									src={el.img}
									alt='zdjęcie profilowe'
									className={Styles.img}
								/>
							</p>
							<p className={`normalText ${Styles.name}`}>{el.name}</p>
							<p className={`smallText ${Styles.desc}`}>{el.desc}</p>
						</div>
					))}
				</Slider>
			</div>

			<a
				href='https://www.google.com/search?q=bluzlo+opinie&oq=bluzlo+opinie&aqs=chrome.0.69i59.2007j0j7&sourceid=chrome&ie=UTF-8#lrd=0x47033f9c8603a387:0x574c6c5ba948d48b,1,,,,'
				className={`normalText ${Styles.link}`}
				target='_blank'>
				Kliknij, aby przeczytać więcej opinii Google
			</a>

			<div className='white-block white-block-left'></div>
		</section>
	)
}

export default Opinions
