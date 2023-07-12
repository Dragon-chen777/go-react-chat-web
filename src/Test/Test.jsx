import { useReducer, useState } from 'react'
import TaskList from './TaskList'
const initialTasks = [
	{ id: 0, text: 'a', done: true },
	{ id: 1, text: 'b', done: false },
	{ id: 2, text: 'c', done: false },
]
let curId = initialTasks.length
function tasksReducer(tasks, action) {
	if (action.type == 'add') {
					return [...tasks, action.data]
	}

	if (action.type == 'change') {
		return tasks.map((item) => (item.id === action.data.id ? action.data : item))
	}

	if (action.type == 'remove') {
		return tasks.filter((item) => item.id != action.data)
	}
}
export default function TaskApp() {
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
	const [text, setText] = useState('')
	function add(value) {
		setText('')
		dispatch({
			type: 'add',
			data: {
				id: curId,
				text: value,
				done: false,
			},
		})
	}
	function change(item) {
		dispatch({
			type: 'change',
			data: item,
		})
	}
	function remove(id) {
		dispatch({
			type: 'remove',
			data: id,
		})
	}
	return (
		<>
			<h1>Todo</h1>
			<input value={text} onChange={(e) => setText(e.target.value)}></input>
			<button onClick={add}>Add</button>
			<TaskList tasks={tasks} change={change} remove={remove}></TaskList>
		</>
	)
}
