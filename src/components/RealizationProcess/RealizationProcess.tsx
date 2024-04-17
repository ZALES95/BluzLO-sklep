import Styles from "./RealizationProcess.module.scss"
import SingleStage from "../SingleStage/SingleStage"
import { singleStageData } from "../../DataFetch/fetchStages"

const RealizationProcess = () => {
	return (
		<section className='sectionPadding wrapper' id='etapy-realizacji'>
			<h2 className='sectionHeading'>Jak będzie przebiegać współpraca?</h2>
			<div className={Styles.stages}>
				{singleStageData?.map((el, i) => (
					<SingleStage
						key={i}
						iconClass={el.iconClass}
						stageNumber={el.stageNumber}
						stageTitle={el.stageTitle}
						stageDesc={el.stageDesc}
					/>
				))}
			</div>
			<div className={Styles.filmBox}>
				<a
					href='https://www.youtube.com/watch?v=i9DygmQr90E'
					target='_blank'
					aria-label='Link do filmiku z realizacją'
					className={`${Styles.link} ${Styles.iconLink}`}>
					<i className={`fa-solid fa-circle-play ${Styles.icon}`}></i>
				</a>
				<a
					className={`${Styles.link} smallText`}
					href='https://www.youtube.com/watch?v=i9DygmQr90E'
					target='_blank'
					aria-label='Link do filmiku z realizacją'>
					Zobacz film uczniów toruńskiego liceum, którzy podzielą się
					doświadczeniami z procesu tworzenia odzieży szkolnej BluzLO.
				</a>
			</div>
		</section>
	)
}

export default RealizationProcess
