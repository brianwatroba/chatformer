import React from "react";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../utils/assetMapping";
import SectionTitle from "../shared/SectionTitle";
import DirtBackground from "../shared/DirtBackground";
import FlexRow from "../shared/FlexRow";
import QuoteCard from "../shared/QuoteCard";

const SocialProof = () => {
    const { day9Logo, day9Video } = assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

    const Endorsement = styled(FlexRow)`
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        padding: 48px 0px 0px 0px;
    `;

    const StreamerVideo = styled(() => (
        <video
            src={day9Video}
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

    return (
        <DirtBackground>
            <SectionTitle>STREAMERS LOVE IT</SectionTitle>
            <Endorsement>
                <QuoteCard
                    author={"Day9tv"}
                    authorLogoUrl={day9Logo}
                    quote={
                        "omg I had no idea it worked like this. This is !%$#ing sick!"
                    }
                />
                <StreamerVideo />
            </Endorsement>
        </DirtBackground>
    );
};

export default SocialProof;
