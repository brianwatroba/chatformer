import React, { useState } from "react";
import styled from "@emotion/styled";
import images from "../images";

import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
    const theme = useTheme();
    const links = [
        ["play", "/"],
        ["how it works", "/"],
        ["leaderboards", "/"],
        ["team", "/"],
    ];

    const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        padding: 12px 24px;
        @media (max-width: 768px) {
            justify-content: space-between;
        }
    `;

    const Logo = styled.img`
        content: url(${images.mainLogo});
        min-height: 45px;
        height: 3.5vh;
    `;

    const Links = styled.div`
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding-left: 36px;
        @media (max-width: 768px) {
            display: none;
        }
    `;

    const Link = styled.div`
        color: ${theme.palette.text.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 18px;
        font-size: 16px;
        &:hover {
            font-weight: 700;
            cursor: pointer;
        }
    `;

    const PlayButton = styled((props) => (
        <Button
            {...props}
            variant="outlined"
            color="secondary"
            size="large"
            disableElevation
        />
    ))`
        font-family: Source Code Pro;
        font-weight: 700;
        font-size: 16px;
        @media (max-width: 768px) {
            display: none;
        }
    `;

    return (
        <Container>
            <Logo />
            <Links>
                {links.map((link) => {
                    let [title, url] = link;
                    return (
                        <Link key={title} href={url}>
                            {title}
                        </Link>
                    );
                })}
            </Links>
            <HamburgerMenu links={links} />
            <PlayButton>PLAY NOW</PlayButton>
        </Container>
    );
};

export default Navbar;
