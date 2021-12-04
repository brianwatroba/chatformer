import React from "react";
import styled from "@emotion/styled";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

import assetMapping from "../../utils/assetMapping";
import FeatureItem from "./FeatureItem";
import FeatureItems from "./FeatureItems";
import FlexColumn from "../shared/FlexColumn";
import Clouds from "../shared/Clouds";
import SectionTitle from "../shared/SectionTitle";

const HowItWorks = () => {
    const theme = useTheme();
    const { yellowArrow, highScoreGuy, chestWithCoins, sampleWords } =
        assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

    const YellowArrow = styled.img`
        content: url(${yellowArrow});
        height: ${isMobile ? "4vh" : "7vh"};
        padding: 10% 0%;
    `;

    return (
        <FlexColumn>
            <Clouds />
            <FlexColumn>
                <SectionTitle>TIRED OF "JUST CHATTING"?</SectionTitle>
                <Typography variant={"h4"}>
                    play a game with your viewers instead
                </Typography>
                <YellowArrow />
            </FlexColumn>
            <SectionTitle>HOW IT WORKS</SectionTitle>
            <FeatureItems>
                <FeatureItem
                    imgUrl={sampleWords}
                    imgHeight={"150px"}
                    title={"jump on chat messages"}
                    subtitle={
                        "they form platforms for you to jump and bounce on"
                    }
                />
                <FeatureItem
                    imgUrl={highScoreGuy}
                    imgHeight={"150px"}
                    title={"get a high score"}
                    subtitle={"the higher you jump, the higher your score"}
                />
                <FeatureItem
                    imgUrl={chestWithCoins}
                    imgHeight={"150px"}
                    title={"earn rewards"}
                    subtitle={"earn NFT-based rewards for you and your chat"}
                />
            </FeatureItems>
        </FlexColumn>
    );
};

export default HowItWorks;
