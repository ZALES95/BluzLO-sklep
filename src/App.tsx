import { Routes, Route, Outlet, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Product from "./pages/Product/Product"
import Blog from "./pages/Blog/Blog"
import Cart from "./pages/Cart/Cart"
import Pricing from "./pages/Pricing/Pricing"
import Contact from "./pages/Contact/Contact"
import BlogArticle from "./pages/BlogArticle/BlogArticle"
import { useEffect } from "react"

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}

function App() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/shop/:productId' element={<Product />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/blog/:articleName' element={<BlogArticle />} />
					<Route path='/cennik' element={<Pricing />} />
					<Route path='/koszyk' element={<Cart />} />
					<Route path='/kontakt' element={<Contact />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
