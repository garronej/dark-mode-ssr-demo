import { useIsDarkModeEnabled } from "../useIsDarkModeEnabled";

export default function Index() {

    const { isDarkModeEnabled, setIsDarkModeEnabled } = useIsDarkModeEnabled();

    return (
        <>
            <h1>isDarkModeEnabled: {isDarkModeEnabled ? "yes" : "false"}</h1>
            <button onClick={() => setIsDarkModeEnabled(!isDarkModeEnabled)}>Toggle dark mode 🌗!</button>
        </>
    );

}