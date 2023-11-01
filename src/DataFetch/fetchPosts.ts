import Article1 from "../components/BlogComponents/Article1"
import Blog1_1 from "../assets/Blog/bluzy do szkoły - Bluzlo.pl.png"
import Blog1_2 from "../assets/Blog/bluzy dla szkół - Bluzlo.pl.png"

import Article2 from "../components/BlogComponents/Article2"
import Blog2_1 from "../assets/Blog/Merch szkolny - Bluzlo.pl.webp"
import Blog2_2 from "../assets/Blog/Ubrania szkolne - Bluzlo.pl.webp"

import Article3 from "../components/BlogComponents/Article3"
import Blog3_1 from "../assets/Blog/Article3.png"

import Article4 from "../components/BlogComponents/Article4"
import Blog4_1 from "../assets/Blog/Article4img.png"

export const posts = [
	{
		id: 1,
		title: "Bluzy dla szkół - Poradnik",
		url: "bluzy-dla-szkol-poradnik",
		img: Blog1_1,
		img2: Blog1_2,
		alt: "Bluzy dla szkół - bluzlo.pl",
		alt2: "Bluzy do szkoły - bluzlo.pl",
		metaDesc:
			"Kompletny poradnik! Bluzy dla szkół - Co warto wiedzieć przed złożeniem zamówienia? Na co zwrócić uwagę? Chętnie Ci pomożemy!",
		component: Article1,
	},
	{
		id: 2,
		title: "Merch Szkolny - Dlaczego Twoja Szkoła Tego Potrzebuje?",
		url: "merch-dla-szkol-poradnik",
		img: Blog2_1,
		img2: Blog2_2,
		alt: "Merch szkolny - bluzlo.pl",
		alt2: "Ubrania szkolne - bluzlo.pl",
		metaDesc:
			"Kompletny poradnik! Bluzy dla szkół - Co warto wiedzieć przed złożeniem zamówienia? Na co zwrócić uwagę? Chętnie Ci pomożemy!",
		component: Article2,
	},
	{
		id: 3,
		title: "Bluzy dla uniwersytetów - najlepsze wybory dla studentów",
		url: "bluzy-dla-uniwersytetów",
		img: Blog3_1,
		alt: "Bluzy dla uniwersytetów - bluzlo.pl",
		metaDesc:
			"Odkryj naszą ekskluzywną kolekcję bluz dla uniwersytetów! 🎓 Zaprojektuj unikalne, spersonalizowane bluzy dla swojej uczelni lub grupy studenckiej.",
		component: Article3,
	},
	{
		id: 4,
		title: "Jak wykorzystać merch szkolny do promocji szkoły?",
		url: "jak-promowac-szkole",
		img: Blog4_1,
		alt: "Jak promować szkołę - bluzlo.pl",
		metaDesc:
			"Dowiedz się, jak wykorzystać merch szkolny jako narzędzie promocji dla szkoły. Artykuł przedstawi praktyczne wskazówki dotyczące skutecznego wykorzystania odzieży szkolnej do zwiększenia widoczności i prestiżu placówki edukacyjnej.",
		component: Article4,
	},
]
