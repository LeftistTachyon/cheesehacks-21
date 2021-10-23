import Document, { Head, Html, Main, NextScript } from "next/document";

export default class TheDocument extends Document {
	render() {
		return (
			<Html lang="en-us">
				<Head>
					<meta name="description" content="DESCRIPTION" />
					<meta name="author" content="Jed Wang" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
