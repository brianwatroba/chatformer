import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import GameState from "./context/game/GameState";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ComingSoon from "./components/ComingSoon";
import Navbar from "./components/shared/Navbar";
import About from "./components/About";
import Auth from "./components/Auth";
import ScreenShell from "./components/shared/ScreenShell";
// import Game from "./components/Game";
const Game = React.lazy(() => import("./components/Game"));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GameState>
                <BrowserRouter basename="/">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/game"
                            element={
                                <Suspense
                                    fallback={
                                        <Container>
                                            <ScreenShell />
                                        </Container>
                                    }
                                >
                                    <Game />
                                </Suspense>
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/leaderboards" element={<ComingSoon />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </GameState>
        </ThemeProvider>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #333;
`;

export default App;
