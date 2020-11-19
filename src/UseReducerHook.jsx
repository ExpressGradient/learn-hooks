import {useReducer} from "react";

export default function UseReducerHook() {
	const [state, dispatch] = useReducer((state, action) => {
		switch(action.type) {
			case "INCREMENT":
				return {count: state.count + 1}
			case "DECREMENT":
				return {count: state.count - 1}
			default:
				return {count: state.count}
		}
	}, {count: 0});

	return <>
		<h1>Count: {state.count}</h1>
		<button onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
		<button onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
	</>
}
