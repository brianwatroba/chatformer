import React from "react";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

import assetMapping from "../../utils/assetMapping";
import FeatureItem from "../shared/FeatureItem";
import FeatureItems from "../shared/FeatureItems";
import FlexColumn from "../shared/FlexColumn";
import Clouds from "../shared/Clouds";
import SectionTitle from "../shared/SectionTitle";
import SectionContainer from "../shared/SectionContainer";

const HowItWorks = () => {
    const { yellowArrow, highScoreGuy, chestWithCoins, sampleWords } =
        assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

    const Subtitle = styled(Typography)`
        text-align: center;
        padding: 12px 24px;
        color: #333;
    `;

    const YellowArrow = styled.img`
        content: url(${yellowArrow});
        height: ${isMobile ? "3vh" : "6vh"};
        padding: 10% 0%;
    `;

    return (
        <FlexColumn>
            <Clouds />
            <FlexColumn style={{ height: "100vh", justifyContent: "center" }}>
                <SectionTitle>TIRED OF "JUST CHATTING"?</SectionTitle>
                <Subtitle variant={"h6"}>
                    play a game with your viewers instead
                </Subtitle>
                <YellowArrow />
            </FlexColumn>

            <SectionTitle>HOW IT WORKS</SectionTitle>
            <FeatureItems>
                <FeatureItem
                    imgUrl={sampleWords}
                    imgHeight={isMobile ? "120px" : "150px"}
                    title={"jump on chat messages"}
                    subtitle={
                        "they form platforms for you to jump and bounce on"
                    }
                />
                <FeatureItem
                    imgUrl={highScoreGuy}
                    imgHeight={isMobile ? "120px" : "150px"}
                    title={"get a high score"}
                    subtitle={"the higher you jump, the higher your score"}
                />
                <FeatureItem
                    imgUrl={chestWithCoins}
                    imgHeight={isMobile ? "120px" : "150px"}
                    title={"earn rewards"}
                    subtitle={"earn NFT rewards for you and your chat"}
                />
            </FeatureItems>
        </FlexColumn>
    );
};

export default HowItWorks;
