import { createSlice } from "@reduxjs/toolkit"
import { CartProductType } from "../interfaces/CartProductType"

const initialState: { products: CartProductType[] } = {
	products: [],
}

export const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		addToCart: (state, action) => {
			state.products.push(action.payload)
		},

		removeItem: (state, action) => {
			const { id, color, size } = action.payload
			state.products = state.products.filter((item: CartProductType) => {
				return item.id !== id || item.color !== color || item.size !== size
			})
		},
		resetCart: state => {
			state.products = []
		},
	},
})
export const { addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer
