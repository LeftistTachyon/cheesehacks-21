import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Head } from "next/document";
import theme from "@styles/theme";

export default function TheApp({
	Component,
	pageProps,
}: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Default title</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}
