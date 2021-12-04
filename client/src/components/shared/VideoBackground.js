import React from "react";
import styled from "@emotion/styled";
import assetMapping from "../../utils/assetMapping";
import useMediaQuery from "@mui/material/useMediaQuery";

const VideoBackground = ({ children }) => {
    const isMobile = useMediaQuery("(max-width:768px)");

    const VideoContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: start;
        position: relative;
        height: 90vh;
        overflow: hidden;
    `;

    const Video = styled(() => (
        <video
            src={assetMapping.gameplayVideo}
            playsinline="playsinline"
            autoplay="true"
            muted="true"
            loop="true"
            type="video/mp4"
            height={isMobile ? "85%" : "100%"}
        />
    ))``;

    return (
        <>
            <VideoContainer>
                <Video />
                {children}
            </VideoContainer>
        </>
    );
};

export default VideoBackground;
