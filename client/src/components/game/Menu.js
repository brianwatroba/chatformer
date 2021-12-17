import React, { useContext } from "react";
import styled from "styled-components";

import { Typography, IconButton, Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import GameContext from "../../context/game/gameContext";
import assetMapping from "../../utils/assetMapping";
import Clouds from "../shared/Clouds";
import Cloud from "../shared/Cloud";
import FlexColumn from "../shared/FlexColumn";
import LogIn from "./LogIn";
import SelectStream from "./SelectStream";
import InputStream from "./InputStream";
import FlexRow from "../shared/FlexRow";
import BackButton from "../shared/BackButton";

const Menu = () => {
    const gameContext = useContext(GameContext);
    const {
        isLoggedIn,
        streamType,
        playerName,
        logOut,
        setStreamType,
        playerAvatar,
    } = gameContext;
    const { mainLogo, ground, cloud1, cloud2, cloud3, playerIcon, guest } =
        assetMapping;

    const handleBack = () => {
        if (streamType === null) {
            logOut();
        } else {
            if (playerAvatar === guest) {
                logOut();
            } else {
                setStreamType(null);
            }
        }
    };

    const Container = styled(FlexColumn)`
        display: relative;
        height: 100%;
        width: 100%;
    `;

    const Logo = styled.img`
        content: url(${mainLogo});
        width: 325px;
        position: absolute;
        top: 60px;
        left: 215px;
    `;

    const Ground = styled.div`
        background-image: url(${ground});
        background-repeat: repeat-x;
        background-size: contain;
        width: 100%;
        height: 65px;
        position: absolute;
        bottom: 0;
    `;

    const MenuOptions = styled(FlexColumn)`
        position: absolute;
        top: 250px;
    `;

    const CurrentPlayer = styled(FlexRow)`
        position: absolute;
        top: 165px;
        display: ${isLoggedIn ? "" : "none"};
        align-items: center;
        justify-content: center;
    `;

    const PlayerIcon = styled.img`
        content: url(${playerIcon});
        height: 12px;
        margin-right: 2px;
    `;

    const PlayerText = styled(Typography)`
        font-family: cabin;
    `;

    return (
        <Container>
            <Clouds lowestAltitude={99} count={8} />
            {/* <Cloud src={cloud2} height={"200px"} left={"75%"} top={"-50px"} />
            <Cloud src={cloud1} height={"200px"} left={"75%"} top={"0px"} />
            <Cloud src={cloud2} height={"200px"} right={"85%"} top={"50px"} />
            <Cloud src={cloud3} height={"75px"} right={"75%"} top={"25px"} />
            <Cloud src={cloud1} height={"75px"} right={"95%"} top={"50px"} />
            <Cloud src={cloud2} height={"50px"} right={"45%"} top={"25px"} /> */}
            {isLoggedIn && <BackButton onClick={handleBack} />}
            <Logo />
            <CurrentPlayer>
                <PlayerIcon />
                <PlayerText color="#505050">{":  " + playerName}</PlayerText>
            </CurrentPlayer>
            <MenuOptions>
                {isLoggedIn ? (
                    streamType === null ? (
                        <SelectStream />
                    ) : (
                        <InputStream />
                    )
                ) : (
                    <LogIn />
                )}
            </MenuOptions>
            <Ground />
        </Container>
    );
};

export default Menu;
