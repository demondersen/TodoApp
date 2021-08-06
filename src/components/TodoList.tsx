import React, { useContext } from 'react';
import { MainContext } from '../context/Context';
import Todo from './Todo';

const TodoList = () => {
	const { todos } = useContext(MainContext);

	return (
		<div className='bg-yellow-300'>
			{todos.map((todo) => (
				<Todo todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
