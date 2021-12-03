import React from "react";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../assetMapping";
import HamburgerMenu from "./HamburgerMenu";
import Links from "./Links";
import PlayButtonSecondary from "./PlayButtonSecondary";
import { Button } from "@mui/material";

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
            <Logo />
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
