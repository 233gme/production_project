// declare module '*.scss' {
// 	interface IClassNames {
// 		[className: string]: string
// 	}
// 	const classnames: IClassNames;
// 	export = classnames;
// }

declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}

declare const __IS_DEV__: boolean;
