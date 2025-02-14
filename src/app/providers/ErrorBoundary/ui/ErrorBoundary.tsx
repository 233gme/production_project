import { Component, ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets';
import { Loader } from 'shared';

type Props = {
	children: ReactNode;
};

type State = {
	hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
	constructor (props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError (_error: Error) {
		return { hasError: true };
	}

	componentDidCatch (error: Error, info: ErrorInfo) {
		console.error(
			error,
			info.componentStack,
		);
	}

	render () {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			return (
				<Suspense fallback={<Loader/>}>
					<PageError/>
				</Suspense>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
