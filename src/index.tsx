import ReactDOM from 'react-dom/client';
import {Counter} from "./components";

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<div>
		<Counter/>
	</div>,
);
