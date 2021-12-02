import React from "react";
import styled from "styled-components";

const colors = {
    primary: "#F374C6",
    skyBlue: "72B9D8",
    headings: "#ffffff",
    text: "#333333",
    navbar: "#ffffff",
};

const images = {
    mainLogo: process.env.PUBLIC_URL + "/assets/Logo.png",
};

console.log(images.mainLogo);

const Landing = () => {
    return (
        <Container>
            <Navbar>
                <Logo />
            </Navbar>
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

const Navbar = styled.div`
    width: 100%;
    height: 4vh;
    padding: 12px;
    display: flex;
    flex-direction: row;
    background-color: ${colors.navbar};
`;

const NavLink = styled.a`
    color: ${colors.text};
    padding: 0px 4px;
`;

const Logo = styled.img.attrs({ src: images.mainLogo })`
    height: 100%;
`;

export default Landing;
