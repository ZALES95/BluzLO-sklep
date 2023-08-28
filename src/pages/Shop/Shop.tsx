import { useState, useEffect } from "react"
import Styles from "./Shop.module.scss"
import ProductShortcut from "../../components/ProductShortcut/ProductShortcut"
import { SingleProductType } from "../../interfaces/SingleProductType"
import useFetch from "../../hooks/useFetch"

const Shop = () => {
	const { data, loading, error } = useFetch("/products?populate=*")

	const [allSchools, setAllSchools] = useState<string[]>([])
	const [filteredProducts, setFilteredProducts] =
		useState<SingleProductType[]>(data)
	const [selectedSchool, setSelectedSchool] = useState<string>("all")
	const [isSingleOrder, setIsSingleOrder] = useState<boolean>(true)

	useEffect(() => {
		document.title = "Sklep internetowy BluzLO - merch z logiem szkoły"
	}, [])

	useEffect(() => {
		setFilteredProducts(data)
		for (const product of data) {
			setAllSchools(prevArr => {
				if (prevArr.indexOf(product?.attributes?.schoolName) === -1) {
					return [...prevArr, product?.attributes?.schoolName]
				} else {
					return prevArr
				}
			})
		}
	}, [data])

	const filterSchools = (name: string) => {
		if (name === "all") {
			setFilteredProducts(data)
		} else {
			setFilteredProducts(
				data?.filter(el => el?.attributes?.schoolName === name)
			)
		}
		setSelectedSchool(name)
	}

	const handleOrder = () => {
		setIsSingleOrder(prev => !prev)
	}

	return (
		<section className={`wrapper ${Styles.shop}`}>
			<div className={Styles.top}>
				<h2 className={Styles.heading}>aktualne produkty</h2>
				<button className='mainBtn mainBtn--shop' onClick={handleOrder}>
					{isSingleOrder ? "Zamów Grupowo" : "Zamów Pojedynczo"}
				</button>
			</div>

			{isSingleOrder ? (
				<>
					<div className={Styles.bottom}>
						<p className={`${Styles.catInfo} normalText`}>
							wybierz twoją szkołę
						</p>
						<div className={Styles.allButtons}>
							<button
								className={`mainBtn mainBtn--small ${
									selectedSchool === "all" ? "mainBtn--selected" : ""
								}`}
								onClick={() => filterSchools("all")}>
								Wszystkie Szkoły
							</button>
							{allSchools?.map((el, i) => (
								<button
									key={i}
									className={`mainBtn mainBtn--small ${
										selectedSchool === el ? "mainBtn--selected" : ""
									}`}
									onClick={() => filterSchools(el)}>
									{el}
								</button>
							))}
						</div>
					</div>

					<div className={Styles.allProducts}>
						{error ? (
							<p
								className={`${Styles.catInfo} normalText`}
								style={{ textTransform: "none" }}>
								Wystąpił błąd, spróbuj jeszcze raz!
							</p>
						) : loading ? (
							<p className={`${Styles.catInfo} normalText`}>Ładowanie...</p>
						) : (
							<>
								{filteredProducts?.map((el, index) => (
									<ProductShortcut
										key={index}
										id={el.id}
										schoolName={el.attributes?.schoolName}
										title={el.attributes?.title}
										price={el.attributes?.price}
										discountPrice={el.attributes?.discountPrice}
										colors={el.attributes?.colors}
										expirationDate={el.attributes?.expirationDate}
										mainImg={
											import.meta.env.VITE_UPLOAD_URL +
											el.attributes?.mainImg?.data?.attributes?.url
										}
									/>
								))}
							</>
						)}
					</div>
				</>
			) : (
				<div className={Styles.bottom} style={{ border: "none" }}>
					<p
						className={`${Styles.catInfo} normalText`}
						style={{ textTransform: "none" }}>
						Pobierz łatwą w obsłudze tabelę i odeślij nam ją na naszego maila
						bok@bluzlo.pl
					</p>
					<div className={`${Styles.allButtons}`}>
						{/* <a
							href='../../assets/zamowienieGrupowe.zip'
							download
							className='mainBtn mainBtn--small'>
							Pobierz Tabelę
						</a> */}
						<a
							href='https://docs.google.com/spreadsheets/d/1JdsoiWWNF1oSG4eXgCqcKf2Slrrv7aOq/edit?usp=sharing&ouid=103365036006834527304&rtpof=true&sd=true'
							target='_blank'
							className='mainBtn mainBtn--small'>
							Pobierz Tabelę
						</a>
					</div>
				</div>
			)}
		</section>
	)
}

export default Shop
