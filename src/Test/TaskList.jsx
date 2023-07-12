import { useState } from 'react'

export default function TaskList({ tasks, change, remove }) {
	return (
		<ul>
			{tasks.map((item) => (
				<li key={item.id}>
					<Task task={item} change={change} remove={remove}></Task>
				</li>
			))}
		</ul>
	)
	function Task({ task, change, remove }) {
		const [isEdit, setIsEdit] = useState(false)
		let taskContent = (
			<>
				{task.text}
				<button onClick={() => setIsEdit(true)}>Edit</button>
			</>
		)
		if (isEdit) {
			taskContent = (
				<>
					<input
						value={task.text}
						onChange={(e) =>
							change({
								...task,
								text: e.target.value,
							})
						}
					/>
					<button onClick={() => setIsEdit(false)}>Save</button>
				</>
			)
		}

		return (
			<label>
				<input
					type="checkbox"
					checked={task.done}
					onChange={(e) => {
						change({
							...task,
							done: e.target.checked,
						})
					}}
				/>
				{taskContent}
				<button onClick={() => remove(task.id)}>Delete</button>
			</label>
		)
	}
}
