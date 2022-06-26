import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, clearItems } from './features/todoSlice'

function Todo() {
	const list = useSelector((state) => state.todo.items)
	const dispatch = useDispatch()
	const [input, setInput] = useState("")


	const submitItem = (e) => {
		e.preventDefault();
		dispatch(addItem(input))
	}
	
	const deleteItem = (e, index) => {
		e.preventDefault()
		dispatch(removeItem(index))
	}

	return (
		<div>
			<form onSubmit={(e) => submitItem(e)}>
				<input type='text' onChange={(e) => setInput(e.target.value)} />
				<button type='submit'>Submit</button>
			</form>

			<ul>
				{list.map((item, index) => {
					return (
						<li key={index}>
							{item} 
							<button onClick={(e) => deleteItem(e, {index})}>
								Delete
							</button>
						</li>
					)
				})}
			</ul>
			
			<button onClick={() => dispatch(clearItems())}>Clear</button>
		</div>
	)
}

export default Todo