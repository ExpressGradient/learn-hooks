import {useState} from "react";

export default function UseStateHook() {
	const [inputText, setInputText] = useState("");

	return <input type={"text"} value={inputText} onChange={event => setInputText(event.target.value)} />
}

// inputText is a state variable. Normally variables "disappear" when the function exits, but state variables are preserved by React.
// useState() takes in an argument which is the initial state.
// A component can use as many useState() Hooks it can.
// useState returns an array, current state and a function to update it.
// Instead of using useState[0] for current state value and useState[1] for the function, you can destructure them.
// Convention is that, if the state variable is something, name the function as setSomething.

// How does React know which state corresponds to which useState call?
// React relies on the order in which hooks are called.
// On every render, the order of hooks must be the same.
