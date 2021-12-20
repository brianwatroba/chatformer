import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

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
                <BrowserRouter basename="/">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route
                            exact
                            path="/game"
                            element={
                                <Suspense
                                    fallback={
                                        <>
                                            <Container>
                                                <ScreenShell />
                                            </Container>
                                        </>
                                    }
                                >
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #333;
`;

const ScreenShell = styled.div`
    position: absolute;
    top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 12px solid #d8d8d8;
    border-radius: 12px;
    width: 800px;
    height: 600px;
    background-color: #72b9d8;
`;

export default App;
