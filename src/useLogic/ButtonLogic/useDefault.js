// useLogic.js
import { useState } from 'react';

const useLogic = () => {
	const actionToDefaultAction = () => {
		// window.open("https://www.google.com", "_blank");
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
