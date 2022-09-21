/* eslint-disable react/display-name */
import { createUseSsrGlobalState } from "powerhooks/useSsrGlobalState";
import Head from "next/head";

export const { useIsDarkModeEnabled, withIsDarkModeEnabled } = createUseSsrGlobalState({
	"name": "isDarkModeEnabled",
	"getInitialStateServerSide": () => ({
		"doFallbackToGetInitialValueClientSide": true,
		"initialValue": false 
	}),
	"getInitialStateClientSide": () =>
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches,
	"Head": ({ isDarkModeEnabled }) =>
		<Head>
			<style>
				{`:root { color-scheme: ${isDarkModeEnabled ? "dark" : "light"} }`}
			</style>
		</Head>
});