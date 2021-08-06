import React from 'react';

type TodoProps = {
	todo: string;
};

const Todo = ({ todo }: TodoProps) => {
	return (
		<div className='flex justify-around items-center'>
			<p>{todo}</p>
			<div>
				<button className='mr-4 uppercase text-xs bg-green-400 hover:bg-green-700 text-white py-1 px-4 rounded-full'>
					Done
				</button>
				<button className='ml-4 uppercase text-xs bg-red-400 hover:bg-red-700 text-white py-1 px-4 rounded-full'>
					Remove
				</button>
			</div>
		</div>
	);
};

export default Todo;
