import Styles from "./EneEducation.module.scss"

const EneEducation = () => {
	return (
		<section className={Styles.eneEducation} id='EneEdukacja'>
			<div className='white-block white-block-right'></div>
			<div className={Styles.heroImg}>
				<div className='heroShadow'></div>
				<div className='heroText heroText--section'>
					<h2 className={`sectionHeading ${Styles.title}`}>
						Współpraca z ENE Edukacja
					</h2>
					<p className={`smallText ${Styles.info}`}>
						Jeżeli zależy Ci na jak najwyższych wynikach z egzaminów to ENE Edukacja jest idealnym miejscem dla Ciebie. Zapraszamy do zapoznania się z usługami i dowiedzenia się więcej na ten temat!
					</p>
					<div className={Styles.buttons}>
						<a href='tel:+48728907218'>
							<button className='mainBtn mainBtn--section'>
								Skontaktuj się
							</button>
						</a>
						<a href='https://ene.edu.pl' target='_blank'>
							<button className='mainBtn mainBtn--outlined mainBtn--section'>
								ENE Edukacja
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className='white-block white-block-left'></div>
		</section>
	)
}

export default EneEducation
