import Styles from "./Cooperation.module.scss"
import { Link } from "react-router-dom"

const Cooperation = () => {
	return (
		<section className={Styles.cooperation} id='wspolpraca'>
			<div className='white-block white-block-right'></div>
			<div className={Styles.heroImg}>
				<div className='heroShadow'></div>
				<div className='heroText heroText--section'>
					<h2 className={`sectionHeading ${Styles.title}`}>
						nawiąż współpracę
					</h2>
					<p className={`smallText ${Styles.info}`}>
						Masz pomysł jak możemy ulepszyć nasze produkty i usługi? A może
						chcesz nawiązać z nami współpracę i zostać ambasadorem? Daj nam o
						tym koniecznie znać!
					</p>
					<div className={Styles.buttons}>
						<Link to='/kontakt'>
							<button className='mainBtn mainBtn--section'>
								Skontaktuj się
							</button>
						</Link>
						<Link to='/kontakt'>
							<button className='mainBtn mainBtn--outlined mainBtn--section'>
								Zostań Ambasadorem
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className='white-block white-block-left'></div>
		</section>
	)
}

export default Cooperation
