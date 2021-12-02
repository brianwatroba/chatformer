import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../assetMapping";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:768px)");
    const links = [
        ["play", "/"],
        ["how it works", "/"],
        ["leaderboards", "/"],
        ["team", "/"],
    ];

    const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: ${(props) =>
            props.isMobile ? "6px 12px 6px 6px" : "14px 24px 14px 14px"};
    `;

    const Logo = styled.img`
        content: url(${assetMapping.mainLogo});
        min-height: 40px;
        height: 3.5vh;
        &:hover {
            cursor: pointer;
        }
    `;

    const Links = styled.div`
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding-left: 36px;
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
    `;

    return (
        <Container isMobile={isMobile}>
            <Logo />
            {isMobile ? (
                <HamburgerMenu links={links} />
            ) : (
                <>
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
                    <PlayButton>PLAY NOW</PlayButton>
                </>
            )}
        </Container>
    );
};

export default Navbar;
