import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import Game from "./components/Game";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Landing />
            {/* <Navbar />
            <Game /> */}
        </ThemeProvider>
    );
}

export default App;
