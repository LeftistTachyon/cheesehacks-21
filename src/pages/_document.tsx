import Document, { Head, Html, Main, NextScript } from "next/document";

export default class TheDocument extends Document {
	render() {
		return (
			<Html lang="en-us">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
