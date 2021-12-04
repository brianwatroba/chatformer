import React from "react";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

import assetMapping from "../../utils/assetMapping";
import HamburgerMenu from "./HamburgerMenu";
import Links from "./NavLinks";
import PlayButtonSecondary from "./PlayButtonSecondary";

const Navbar = () => {
    const isMobile = useMediaQuery("(max-width:768px)");
    const { mainLogo } = assetMapping;

    const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: ${isMobile ? "6px 12px 6px 6px" : "14px 24px 14px 14px"};
    `;

    const Logo = styled.img`
        content: url(${mainLogo});
        min-height: 40px;
        height: 3.5vh;
        &:hover {
            cursor: pointer;
        }
    `;

    return (
        <Container isMobile={isMobile}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Logo />
            </Link>
            {isMobile ? (
                <HamburgerMenu />
            ) : (
                <>
                    <Links />
                    <PlayButtonSecondary>PLAY NOW</PlayButtonSecondary>
                </>
            )}
        </Container>
    );
};

export default Navbar;
