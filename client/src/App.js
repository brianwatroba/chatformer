import React, { Suspense } from "react";
import styled from "styled-components";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GameState from "./context/game/GameState";
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";
import About from "./components/About";
import Auth from "./components/Auth";
import ScreenShell from "./components/shared/ScreenShell";
import Placeholder from "./components/Placeholder";
import FlexColumn from "./components/shared/FlexColumn";
const Game = React.lazy(() => import("./components/Game"));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GameState>
                <BrowserRouter>
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
                        <Route
                            path="/leaderboards"
                            element={
                                <Placeholder
                                    title="coming soon"
                                    subtitle="check back for new features"
                                />
                            }
                        />
                        <Route path="/auth" element={<Auth />} />
                        <Route
                            path="*"
                            element={
                                <Placeholder
                                    title="404: not found"
                                    subtitle="jump higher to find what you're looking for"
                                />
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </GameState>
        </ThemeProvider>
    );
}

const Container = styled(FlexColumn)`
    height: 100vh;
    background-color: #333;
`;

export default App;
