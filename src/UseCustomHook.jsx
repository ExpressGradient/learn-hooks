import {useState, useEffect, useDebugValue} from "react";

export default function useCustomHook(initialState) {
	const [something, setSomething] = useState(initialState);

	useEffect(() => console.log(something));
	// useDebugValue: for displaying label for custom hooks in DevTools.
	useDebugValue("CustomHookValue: " + something);

	return [something, setSomething];
}
