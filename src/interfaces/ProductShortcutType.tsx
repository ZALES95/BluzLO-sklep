export interface ProductShortcutType {
     id: number,
	schoolName: string
	title: string
	price: number
     discountPrice: number
	colors: { name: string; color: string }[]
	expirationDate: Date
	mainImg: string
}
