import { useState, useEffect } from "react";

// Hooks let you use state and other React features without writing a class.
// Hooks are functions that let you "hook" into React state and lifecycle features from function components.
// React provides a few built-in Hooks like useState(). You can also create your own Hooks to reuse stateful behaviour between components.

export function UseStateAndEffectExample() {
	// useState is a Hook which adds local state to a function. This state is preserved between re-renders.
	// useState takes in only one argument which is the initial value of the state.
	// It returns an array of current state value and a function to update it.
	const [ count, setCount ] = useState(0);

	// useEffect Hook
	// Operations from component like data fetching, subscriptions, or manually changing the DOM are called side-effects(or "effects" for short), because they can affect other components and can't be done during rendering.
	// The Effect Hook, useEffect(), adds the ability to perform side effects from a function component.
	// It serves the same purpose as componentDidMount, componentDidUpdate and componentWillUnmount.
	// When you call useEffect, you're telling React to run "effect" function after flushing changes to the DOM.
	useEffect(() => {
		document.title = `You've clicked ${count} times`;
	});

	return <>
		<h1>Count: {count}</h1>
		<button onClick={() => setCount(count + 1)}>Increment</button>
	</>
}

// Hooks rules.
// Hooks are JS functions, but they impose two additional rules.
// 1. Only call Hooks at the top level. Do not call them inside conditionals, loops, or nested functions.
// 2. Only call Hooks from React Function Components. Don't call Hooks from regular JS functions. (There is just one other valid place to call Hooks, custom Hooks)

// Custom Hooks are more of a convention than a feature. If a function's name starts with "use" and it calls other Hooks, we say it is a custom Hook.

// There are other built-in Hooks like useContext() and useReducer().
