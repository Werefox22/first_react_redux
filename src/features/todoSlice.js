import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: []
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addItem: (state, action) => {
			return { items: state.items.push(action.payload)}
		},
		removeItem: (state, action) => {
			return { items: state.items.splice(action.payload, 1)}
		},
		clearItems: (state) => {
			return { items: [] }
		}
	}
})