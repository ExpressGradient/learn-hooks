import {useState, useEffect} from "react";

export default function UseEffectHook() {
	const [headingStatus, setHeadingStatus] = useState(false);

	// There are no dependencies, so the effect only runs onMount and onUnmount.
	useEffect(() => {
		console.log("ONMOUNT");
		return () => console.log("ONUNMOUNT");
	}, []);

	// Everything is a dependency.
	useEffect(() => {
		console.log("RENDER");
		return () => console.log("CLEANUP")
	});

	return <>
		<h1 className={headingStatus ? "heading" : ""}>Heading</h1>
		<button onClick={() => setHeadingStatus(!headingStatus)}>Toggle Heading Status</button>
	</>
}

// There are two kinds of side effects, those that doesn't require cleanup and those that do.
// Side effects without cleanup: effects we want to run after every render and immediately forget about them.
// Placing useEffect inside the component lets us access the state or any props.
// Hooks embrace JS closures and avoid introducing React specific APIs where JS already provides a solution.
// The effect passed to useEffect is going to be different on every render. This lets us read state inside the effect without worrying about it getting stale.
// Each effect belongs to a particular render.
// useEffect doesn't block the browser from updating the screen. The majority of effects don't happen synchronously.

// useEffect cleanup: React performs cleanup when the component unmounts. However effects run for every render and not just once. So React also cleans up effects from the previous render before running effects next time.

// useEffect tips:
// 1. Use multiple useEffects for separate concerns.
// 2. Skip some effects by using the dependency array. The effect will run only if the dependencies update.
