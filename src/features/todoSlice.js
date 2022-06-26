import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: []
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addItem: (state, action) => {
			return { items: [...state.items, action.payload] }
		},
		removeItem: (state, action) => {
			let array = [...state.items]
			console.log(action.payload)
			array.splice(action.payload.index, 1)

			return { items: array}
		},
		clearItems: () => {
			return { items: [] }
		}
	}
})

export const { addItem, removeItem, clearItems } = todoSlice.actions

export default todoSlice.reducer