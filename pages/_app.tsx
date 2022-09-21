import Head from "next/head";
import type { AppProps } from "next/app";
import { withIsDarkModeEnabled } from "../useIsDarkModeEnabled";

export function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default withIsDarkModeEnabled(App);

