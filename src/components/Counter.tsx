import {useState} from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button className={classes.button} onClick={() => setCount(prev => prev + 1)}>
				Click me
			</button>
		</div>
	);
}

export default Counter;
