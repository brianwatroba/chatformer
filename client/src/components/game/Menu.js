import React, { useContext } from "react";
import styled from "styled-components";

import GameContext from "../../context/game/gameContext";
import assetMapping from "../../utils/assetMapping";
import Clouds from "../shared/Clouds";
import Cloud from "../shared/Cloud";
import FlexColumn from "../shared/FlexColumn";
import LogIn from "./LogIn";
import SelectStream from "./SelectStream";
import InputStream from "./InputStream";

const Menu = () => {
    const gameContext = useContext(GameContext);
    const { isLoggedIn, streamType } = gameContext;
    const { mainLogo, ground, cloud1, cloud2, cloud3 } = assetMapping;

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
        top: 225px;
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

            <Logo />
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
