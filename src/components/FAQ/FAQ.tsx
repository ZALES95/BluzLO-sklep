import Styles from "./FAQ.module.scss"
import { useState } from "react"
import { allQuestionsArr } from "../../DataFetch/fetchQuestions"

const FAQ = () => {
	const allQuestionsObj = allQuestionsArr.map((el, i) => {
		return {
			...el,
			display: false,
			id: i,
			iconClass: "fa-chevron-down",
		}
	})

	const [allQuestions, setAllQuestions] = useState<
		{
			question: string
			answer: string
			display: boolean
			id: number
			iconClass: string
		}[]
	>(allQuestionsObj)

	const handleAnswer = (id: number) => {
		setAllQuestions(prevQuestions =>
			prevQuestions.map(el => ({
				...el,
				display: el.id === id ? !el.display : el.display,
				iconClass:
					el.id === id
						? el.display
							? "fa-chevron-down"
							: "fa-chevron-up"
						: el.iconClass,
			}))
		)
	}

	return (
		<section className='sectionPadding wrapper' id='faq'>
			<h2 className='sectionHeading'>najczęściej zadawane pytania</h2>
			<div className={Styles.questions}>
				{allQuestions?.map((el, i) => (
					<div key={i}>
						<div
							className={Styles.question}
							onClick={() => handleAnswer(el.id)}>
							<p className={`normalText ${Styles.title}`}>{el.question}</p>
							<i className={`fa-solid ${el.iconClass} ${Styles.icon}`}></i>
						</div>
						{el.display && (
							<div className={Styles.answer}>
								<p className={`smallText ${Styles.title}`}>{el.answer}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	)
}

export default FAQ
