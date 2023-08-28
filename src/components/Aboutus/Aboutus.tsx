import Styles from "./Aboutus.module.scss"
import { aboutusData } from "../../DataFetch/fetchAboutus"

const Aboutus = () => {
	return (
		<section className='sectionPadding wrapper' id='o-nas'>
			<h2 className='sectionHeading'>Dlaczego BluzLO?</h2>
			{/* <p className={`${Styles.info} smallText`}>
				BluzLo to miejsce, gdzie znajdziesz unikalną odzież szkolną, która
				pozwoli Ci wyrazić swój styl i dumę z przynależności do swojej szkoły.
				Nasza firma oferuje szeroki wybór jakościowych produktów, które idealnie
				oddadzą ducha twojej placówki edukacyjnej.
			</p> */}
			<div className={Styles.stats}>
				{aboutusData?.map((el, i) => (
					<div className={Styles.singleStat} key={i}>
						<i className={`${el.icon} ${Styles.icon}`}></i>
						<div className={Styles.statContainer}>
							<p className={Styles.statNumber}>{el.title}</p>
							<p className={`normalText ${Styles.title}`}>{el.desc}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Aboutus
