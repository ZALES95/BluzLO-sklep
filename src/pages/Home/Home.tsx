import Header from "../../components/Header/Header"
import OurProducts from "../../components/OurProducts/OurProducts"
import Offer from "../../components/Offer/Offer"
import RealizationProcess from "../../components/RealizationProcess/RealizationProcess"
import OurRealizations from "../../components/OurRealizations/OurRealizations"
import Opinions from "../../components/Opinions/Opinions"
import Aboutus from "../../components/Aboutus/Aboutus"
import Cooperation from "../../components/Cooperation/Cooperation"
import FAQ from "../../components/FAQ/FAQ"
import BlogSection from "../../components/BlogSection/BlogSection"
import QuickMsg from "../../components/QuickMsg/QuickMsg"
// import EneEducation from "../../components/EneEducation/EneEducation"
import { useEffect } from "react"

const Home = () => {
	useEffect(() => {
		document.title = "BluzLO - Merch dla szkół, uczelni oraz firm"
	}, [])
	return (
		<>
			<Header />
			<main className='main'>
				<OurProducts />
				<Aboutus />
				<Offer />
				<RealizationProcess />
				<OurRealizations />
				<Opinions />
				<Cooperation />
				<FAQ />
				{/* <EneEducation /> */}
				<BlogSection />
			</main>
			<QuickMsg />
		</>
	)
}

export default Home
