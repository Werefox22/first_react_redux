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
			return { items: state.items.splice(action.payload, 1)}
		},
		clearItems: () => {
			return { items: [] }
		}
	}
})

export const { addItem, removeItem, clearItems } = todoSlice.actions

export default todoSlice.reducer