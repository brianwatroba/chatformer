import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Navbar from "./components/shared/Navbar";
import LoadingGame from "./components/shared/LoadingGame";
import About from "./components/About";
const Game = React.lazy(() => import("./components/Game"));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />

                    <Route
                        exact
                        path="/game"
                        element={
                            <Suspense fallback={<LoadingGame />}>
                                <Game />
                            </Suspense>
                        }
                    />
                    <Route exact path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
