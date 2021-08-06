import React, { SyntheticEvent, useContext, useRef } from 'react';
import TodoList from './components/TodoList';
import './styles/compiled.css';
import { MainContext } from './context/Context';

function App() {
	const { todos, setTodos } = useContext(MainContext);

	const inputRef = useRef<any>(null);

	const addTodo = (e: SyntheticEvent) => {
		e.preventDefault();
		setTodos([...todos, inputRef.current.value]);
		inputRef.current.value = null;
	};

	console.log(todos);

	return (
		<div className='App'>
			<div className='w-screen h-screen flex justify-center items-center '>
				<div className='flex flex-col w-1/3 h-1/3'>
					<div className='flex justify-around'>
						<input
							ref={inputRef}
							className='border py-2 px-3 text-grey-darkest md:ml-2'
							type='text'
							placeholder='Enter Todo'
						/>
						<button
							onClick={addTodo}
							className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
						>
							Add Todo
						</button>
					</div>
					<div className='mt-8'>
						<TodoList />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
