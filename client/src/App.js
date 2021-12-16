import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GameState from "./context/game/GameState";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Navbar from "./components/shared/Navbar";
import About from "./components/About";
import Auth from "./components/Auth";
// import Game from "./components/Game";
const Game = React.lazy(() => import("./components/Game"));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GameState>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route
                            exact
                            path="/game"
                            element={
                                <Suspense fallback={<></>}>
                                    <Game />
                                </Suspense>
                            }
                        />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/auth" element={<Auth />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </GameState>
        </ThemeProvider>
    );
}

export default App;
