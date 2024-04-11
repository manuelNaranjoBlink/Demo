// useLogic.js
'use client'
import { useState } from 'react';

const useLogic = () => {
	const actionToDefaultAction = () => {
        alert("useLogic default onClic");
	}

	const [defaultAction, setDefaultAction] = useState(() => actionToDefaultAction);

	const performDefaultAction = () => {
		defaultAction();
	};

	const updateDefaultAction = (action) => {
		setDefaultAction(() => action);
	};

	return { performDefaultAction, updateDefaultAction };
};

export default useLogic;
