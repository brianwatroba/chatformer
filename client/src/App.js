import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from "./components/Game";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
