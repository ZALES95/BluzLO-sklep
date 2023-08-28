import Styles from "./SingleStage.module.scss"

type SingleStage = {
	iconClass: string
	stageNumber: string
	stageTitle: string
	stageDesc: string
}

const SingleStage: React.FC<SingleStage> = ({
	iconClass,
	stageNumber,
	stageTitle,
	stageDesc,
}) => {
	return (
		<>
			<div className={Styles.stage}>
				<div className={Styles.iconBox}>
					<i className={`${iconClass} ${Styles.icon}`}></i>
					<span className={Styles.stageNumber}>{stageNumber}</span>
				</div>
				<p className={`normalText ${Styles.title}`}>{stageTitle}</p>
				<p className={`smallText ${Styles.desc}`}>{stageDesc}</p>
			</div>
			<div className={Styles.plainDiv}></div>
		</>
	)
}

export default SingleStage
