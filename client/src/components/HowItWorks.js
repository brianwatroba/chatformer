import React from "react";
import styled from "@emotion/styled";
import assetMapping from "../assetMapping";

import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { yellow } from "@mui/material/colors";

const HowItWorks = () => {
    const theme = useTheme();
    const {
        cloud1,
        cloud2,
        cloud3,
        yellowArrow,
        highScoreGuy,
        chestWithCoins,
        sampleWords,
    } = assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 200vh;
        overflow: hidden;
        position: relative;
    `;

    const Clouds = styled.div`
        height: 100%;
        width: 100%;
    `;

    const Cloud = styled.img`
        content: url(${(props) => props.src});
        height: ${(props) => props.height};
        position: absolute;
        top: ${(props) => props.top};
        bottom: ${(props) => props.bottom};
        left: ${(props) => props.left};
        right: ${(props) => props.right};
    `;

    const Question = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: ${isMobile ? "24px 32px" : "36px 72px"};
    `;

    const Title = styled.div`
        text-align: center;
        color: #ffffff;
        padding: ${isMobile ? "0px 0px 12px 0px" : "0px 0px 18px 0px"};
        font-size: ${isMobile ? "32px" : "64px"};
        font-weight: 700;
        text-shadow: 1px 0px 0px #333, -1px 0px 0px #333, 0px 1px 0px #333,
            0px -1px 0px #333;
    `;

    const Subtitle = styled.div`
        text-align: center;
        color: ${theme.palette.text.primary};
        padding: 0% 20%;
        font-size: ${isMobile ? "14px" : "24px"};
    `;

    const YellowArrow = styled.img`
        content: url(${yellowArrow});
        height: ${isMobile ? "4vh" : "7vh"};
        padding: 10% 0%;
    `;

    const Details = styled.div`
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-gap: 5%;
        width: 100%;
    `;

    const Detail = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        flex-direction: column;
    `;

    const DetailTitle = styled.div`
        text-align: center;
        color: ${theme.palette.text.primary};
        padding: 8px 0px;
        font-size: ${isMobile ? "14px" : "28px"};
        font-weight: 700;
    `;

    const DetailSubtitle = styled.div`
        text-align: center;
        color: ${theme.palette.text.primary};
        padding: 8px 0px;
        font-size: ${isMobile ? "12px" : "18px"};
    `;

    const Image = styled.img`
        content: url(${(props) => props.src});
        height: ${(props) => props.height};
    `;

    return (
        <Container>
            <Cloud src={cloud1} height={200} right={"90%"} top={"10%"} />
            <Cloud src={cloud3} height={250} left={"80%"} top={"30%"} />
            <Cloud src={cloud2} height={300} right={"75%"} top={"50%"} />
            <Cloud src={cloud1} height={200} left={"80%"} top={"30%"} />
            <Cloud src={cloud1} height={200} left={"80%"} top={"30%"} />
            <Cloud src={cloud1} height={200} left={"80%"} top={"30%"} />
            <Question>
                <Title>TIRED OF "JUST CHATTING"?</Title>
                <Subtitle>play a game with your viewers instead</Subtitle>
                <YellowArrow />
            </Question>
            <Title>HOW IT WORKS</Title>
            <Details>
                <Detail>
                    <Image src={sampleWords} height={"150px"} />
                    <DetailTitle>jump on chat messages</DetailTitle>
                    <DetailSubtitle>
                        they form platforms for you to jump and bounce on
                    </DetailSubtitle>
                </Detail>
                <Detail>
                    <Image src={highScoreGuy} height={"150px"} />
                    <DetailTitle>get a high score</DetailTitle>
                    <DetailSubtitle>
                        they form platforms for you to jump and bounce on
                    </DetailSubtitle>
                </Detail>
                <Detail>
                    <Image src={chestWithCoins} height={"150px"} />
                    <DetailTitle>earn rewards</DetailTitle>

                    <DetailSubtitle>
                        earn NFT-based rewards for you and your chat
                    </DetailSubtitle>
                </Detail>
                <div />
            </Details>
        </Container>
    );
};

export default HowItWorks;
