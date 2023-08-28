import { SingleRealizationType } from "../interfaces/SingleRealization"
import Schuman from "../assets/Realizations/Schuman.webp"
import Poznan from "../assets/Realizations/Poznan5.webp"
import Lodz from "../assets/Realizations/3loschody.webp"
import Bielsko from "../assets/Realizations/5loBielsko.webp"
import Radmosko from "../assets/Realizations/2loRadomsko.webp"
import Skierniewice from "../assets/Realizations/Skierniewice.webp"

export const realizations: SingleRealizationType[] = [
	{
		img: Lodz,
		alt: "Realizacja III Lo Łódź",
		title: "III Lo Łódź",
	},
	{
		img: Bielsko,
		alt: "Realizacja V Lo Bielsko-Biała",
		title: "V Lo Bielsko-Biała",
	},
	{
		img: Schuman,
		alt: "Realizacja Schuman Warszawa",
		title: "Schuman Warszawa",
	},
	{
		img: Poznan,
		alt: "Realizacja V Lo Poznań",
		title: "V Lo Poznań",
	},
	{
		img: Skierniewice,
		alt: "Realizacja I Lo Skierniewice",
		title: "I Lo Skierniewice",
	},
	{
		img: Radmosko,
		alt: "Zdjęcie z",
		title: "I wiele więcej...",
	},
]
