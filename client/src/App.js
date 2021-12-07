import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./utils/history";

import Game from "./components/Game";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Placeholder for 404!</p>
                            </main>
                        }
                    />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
