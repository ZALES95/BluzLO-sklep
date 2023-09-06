export interface SingleProductType {
	id: number //changes for every new school (is the same for the same school)
	attributes: {
		schoolName: string //changes for every new school (is the same for the same school)
		expirationDate: Date //changes for every new school (is the same for the same school)
		mainImg: string //changes for every new school
		allVariousImages: string[] //changes for every new school
		allColorImages: { name: string; img: string }[] //changes for every new school
		title: string //constant for all products with the same name
		price: number //constant for all products with the same name
		discountPrice: number
		colors: { name: string; color: string }[] //constant for all products with the same name
		sizes: string[] //constant for all products with the same name
		parameters: { [key: string]: string } //constant for all products with the same name
		desc: string //constant for all products with the same name
		sizingImg: string //constant for all products with the same name
	}
}
