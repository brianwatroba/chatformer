import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const Landing = () => {
    return (
        <Container>
            <Navbar />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 320px;
    width: 100%;
    height: 100%;
`;

// const Navbar = styled.div`
//     width: 100%;
//     height: 4vh;
//     padding: 12px;
//     display: flex;
//     flex-direction: row;
//     background-color: ${colors.navbar};
// `;

// const NavLink = styled.a`
//     color: ${colors.text};
//     padding: 0px 4px;
// `;

export default Landing;
