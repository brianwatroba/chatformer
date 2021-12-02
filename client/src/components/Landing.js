import React from "react";
import styled from "@emotion/styled";

import Navbar from "./Navbar";
import CallToAction from "./CallToAction";

const Landing = () => {
    return (
        // <Container>
        <>
            <Navbar />
            <CallToAction />
        </>
        // </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 320px;
    // width: 100%;
    // min-height: 100vh;
`;

export default Landing;
