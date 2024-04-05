// useLogic.js
import { useState } from 'react';

const useLogic = () => {
	const actionToDefaultAction = () => {
        alert("useLogic modified onClic");
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
