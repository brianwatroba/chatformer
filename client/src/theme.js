import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: { main: "#F374C6" },
        secondary: { main: "#333333" },
        text: { primary: "#333333" },
    },
    typography: {
        fontFamily: "'Source Code Pro', sans-serif",
    },
});

theme = responsiveFontSizes(theme);

export default theme;
