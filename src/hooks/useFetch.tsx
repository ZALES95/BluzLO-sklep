import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest"
import { SingleProductType } from "../interfaces/SingleProductType"

const useFetch = (url: string) => {
	const [data, setData] = useState<SingleProductType[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const res = await makeRequest.get(url)
				setData(res.data.data)
			} catch (err) {
				setError(true)
			}
			setLoading(false)
		}
		fetchData()
	}, [url])

	return { data, loading, error }
}

export default useFetch
