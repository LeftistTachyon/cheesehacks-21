import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import theme from "@styles/theme";
import Head from "next/head";
import Header from "@components/header";
import Footer from "@components/footer";

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
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ChakraProvider>
		</>
	);
}
