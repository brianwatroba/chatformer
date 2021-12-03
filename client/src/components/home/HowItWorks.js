import React from "react";
import styled from "@emotion/styled";

import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../assetMapping";
import FeatureItem from "./FeatureItem";
import FeatureItems from "./FeatureItems";
import FlexColumn from "../shared/FlexColumn";
import Clouds from "../shared/Clouds";
import SectionTitle from "../shared/SectionTitle";
import DirtBackground from "../shared/DirtBackground";

const HowItWorks = () => {
    const theme = useTheme();
    const {
        yellowArrow,
        highScoreGuy,
        chestWithCoins,
        sampleWords,
        day9Logo,
        mascot,
    } = assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

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

    const StreamerEndorsement = styled.div`
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    `;

    const Endorsement = styled.div`
        dispay: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.25);
        padding: ${isMobile ? "24px 60px" : "36px 72px"};
        border-radius: 4px;
        backdrop-filter: blur(8px);
        max-width: 35%;
    `;

    const EndorsementText = styled.div`
        display: flex;
        text-align: center;
        justify-content: center;
        color: ${theme.palette.text.primary};
        padding: ${isMobile ? "12px 0px 36px 0px" : "18px 0px 48px 0px"};
        font-size: ${isMobile ? "24px" : "48px"};
        font-style: italic;
    `;

    const StreamerNameDiv = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0px 0px 12px 0px;
    `;

    const StreamerName = styled.div`
        font-size: 36px;
        font-weight: 700;
        color: #ffffff;
    `;

    const StreamerDescription = styled.div`
        text-align: center;
        font-size: 18px;
        font-style: italic;
        color: #${theme.palette.grey[500]};
    `;
    const StreamerLogo = styled.img`
        content: url(${day9Logo});
        height: ${isMobile ? "5vh" : "7vh"};
        padding: 0px 12px 0px 0px;
    `;

    const StreamerVideo = styled(() => (
        <video
            src={assetMapping.day9Video}
            playsinline="playsinline"
            autoplay="true"
            muted="true"
            loop="true"
            type="video/mp4"
            width={isMobile ? "80%" : "35%"}
            style={{
                borderRadius: "12px",
            }}
        />
    ))``;

    const Footer = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
        background-color: #333333;
    `;

    const Mascot = styled.img`
        content: url(${mascot});
        height: ${isMobile ? "75px" : "125px"};
        padding: 24px;
    `;

    const PlayButton = styled((props) => (
        <Button
            {...props}
            variant="contained"
            color="primary"
            size={isMobile ? "medium" : "large"}
        />
    ))`
        border-radius: 6px;
        color: #ffffff;
        font-family: Source Code Pro;
        font-weight: 700;
        font-size: ${isMobile ? "18px" : "28px"};
    `;

    const Links = styled.div`
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: 65%;
        border-top: 1px solid #fff;
        margin: 96px 0px 24px 0px;
        padding: 24px 96px;
    `;

    const Link = styled.div`
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 18px;
        font-size: 20px;

        &:hover {
            font-weight: 700;
            cursor: pointer;
        }
    `;

    const Copyright = styled.div`
        color: #fff;
        font-size: 18px;
        text-align: center;
    `;

    return (
        <>
            <FlexColumn>
                <Clouds />
                <FlexColumn>
                    <SectionTitle>TIRED OF "JUST CHATTING"?</SectionTitle>
                    <Subtitle>play a game with your viewers instead</Subtitle>
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
                        subtitle={
                            "earn NFT-based rewards for you and your chat"
                        }
                    />
                </FeatureItems>
            </FlexColumn>

            <DirtBackground>
                <SectionTitle>STREAMERS LOVE IT</SectionTitle>
                <StreamerEndorsement>
                    <Endorsement>
                        <EndorsementText>
                            "omg I had no idea it worked like this. This is
                            !%$#ing sick!"
                        </EndorsementText>
                        <StreamerNameDiv>
                            <StreamerLogo />
                            <StreamerName>Day9tv</StreamerName>
                        </StreamerNameDiv>
                        <StreamerDescription>
                            famous twitch streamer
                        </StreamerDescription>
                    </Endorsement>
                    <StreamerVideo />
                </StreamerEndorsement>
            </DirtBackground>
            <Footer>
                <Mascot />
                <SectionTitle>TRY IT YOURSELF</SectionTitle>
                <PlayButton>PLAY NOW</PlayButton>
                <Links>
                    <Link>play</Link>
                    <Link>how it works</Link>
                    <Link>leaderboards</Link>
                    <Link>team</Link>
                </Links>
                <Copyright>© Chat Jump 2021</Copyright>
            </Footer>
        </>
    );
};

export default HowItWorks;
