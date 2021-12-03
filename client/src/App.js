import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import Game from "./components/Game";
import Home from "./components/Home";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home />

            {/* <Game /> */}
        </ThemeProvider>
    );
}

export default App;
