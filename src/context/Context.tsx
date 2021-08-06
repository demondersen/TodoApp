import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

type MainContextType = {
	todos: string[];
	setTodos: Dispatch<SetStateAction<string[]>>;
};

type MainProviderProps = {
	children: React.ReactNode;
};

export const MainContext = createContext<MainContextType>({
	todos: [],
	setTodos: () => {},
});

const MainProvider = ({ children }: MainProviderProps) => {
	const [todos, setTodos] = useState<string[]>([]);

	return (
		<MainContext.Provider
			value={{
				todos,
				setTodos,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};

export default MainProvider;
