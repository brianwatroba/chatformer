import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: "#F374C6",
            dark: "#be4295",
            light: "#ffa6f9",
            contrastText: "#fff",
        },
        secondary: { main: "#333333" },
        twitch: { main: "#9347FF", dark: "#5b0ecb", light: "#ca78ff" },
        text: { primary: "#333333", contrastText: "#fff" },
    },
    typography: {
        fontFamily: "'Source Code Pro', sans-serif",
    },
});

theme = responsiveFontSizes(theme);

export default theme;
