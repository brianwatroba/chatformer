import React from "react";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../utils/assetMapping";
import SectionTitle from "../shared/SectionTitle";
import DirtBackground from "../shared/DirtBackground";
import FlexRow from "../shared/FlexRow";
import QuoteCard from "../shared/QuoteCard";
import SectionSubtitle from "../shared/SectionSubtitle";

const SocialProof = () => {
    const { day9Logo, day9Video } = assetMapping;
    const isMedium = useMediaQuery("(max-width:1200px)");

    const TitleContainer = styled(FlexRow)`
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding: 24px 0px;
        background-color: #b96e54;
    `;

    const Endorsement = styled.div`
        display: flex;
        flex-direction: ${isMedium ? "column" : "row"};
        width: 100%;
        justify-content: center;
        align-items: center;
        background-color: #b96e54;
    `;

    const StreamerVideo = styled(() => (
        <video
            src={day9Video}
            playsinline="playsinline"
            autoplay="true"
            muted="true"
            loop="true"
            type="video/mp4"
            width={isMedium ? "80%" : "50%"}
            style={{
                borderRadius: "12px",
            }}
        />
    ))``;

    return (
        <DirtBackground>
            <TitleContainer>
                <SectionTitle>streamers love it</SectionTitle>
                <SectionSubtitle>
                    deepens chat interaction, brings viewers closer
                </SectionSubtitle>
            </TitleContainer>
            <Endorsement>
                <StreamerVideo />
                <QuoteCard
                    author={"Day9tv"}
                    authorLogoUrl={day9Logo}
                    authorDescription={"famous streamer"}
                    quote={
                        "omg I had no idea it worked like this. This is !%$#ing sick!"
                    }
                />
            </Endorsement>
        </DirtBackground>
    );
};

export default SocialProof;
