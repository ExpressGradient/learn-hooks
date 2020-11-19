import {UseStateAndEffectExample} from "./hooks_at_glance";
import UseStateHook from "./UseStateHook";
import UseEffectHook from "./UseEffectHook";
import useCustomHook from "./UseCustomHook";
import UseReducerHook from "./UseReducerHook";
import {useMemo, useState, useCallback, useContext, createContext} from "react";

function bigFunction(inputNum) {
	let i = 0;
	while(i < 100000) {
		i++
	}
	return inputNum ** 2;
}

const usernameContext = createContext({username: "discoding"});

function ContextConsumer() {
	const context = useContext(usernameContext);

	return <h1>Username: {context.username}</h1>
}

export default function App() {
	const name = useCustomHook("discoding")[0];

	const [bigNum, setBigNum] = useState(2);
	// Returns a memoized value
	const memoBigNum = useMemo(() => bigFunction(bigNum), [bigNum]);
	// Returns a memoized callback
	const memoBigFunction = useCallback(() => bigFunction(bigNum), [bigNum]);

	return <>
		<UseStateAndEffectExample />
		<UseStateHook />
		<UseEffectHook />
		<h1>Login: {name}</h1>
		<UseReducerHook />
		<h1>Big Num: {memoBigNum}</h1>
		<button onClick={() => setBigNum(bigNum + 1)}>Increment</button>
		<button onClick={() => setBigNum(bigNum - 1)}>Decrement</button>
		<ContextConsumer />
	</>
}
