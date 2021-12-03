import React from "react";
import styled from "@emotion/styled";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../assetMapping";

import FlexRow from "../shared/FlexRow";

const QuoteCard = ({ quote, author, authorLogoUrl }) => {
    const theme = useTheme();
    const { day9Logo } = assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

    const Card = styled.div`
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

    const Quote = styled.div`
        display: flex;
        text-align: center;
        justify-content: center;
        color: ${theme.palette.text.primary};
        padding: ${isMobile ? "12px 0px 36px 0px" : "18px 0px 48px 0px"};
        font-size: ${isMobile ? "24px" : "48px"};
        font-style: italic;
    `;

    const Author = styled.div`
        font-size: 36px;
        font-weight: 700;
        color: #ffffff;
    `;

    const AuthorDescription = styled.div`
        text-align: center;
        font-size: 18px;
        font-style: italic;
        color: #${theme.palette.grey[500]};
    `;
    const AuthorLogo = styled.img`
        content: url(${authorLogoUrl});
        height: ${isMobile ? "5vh" : "7vh"};
        padding: 0px 12px 0px 0px;
    `;

    return (
        <Card>
            <Quote> {quote}</Quote>
            <FlexRow>
                <AuthorLogo />
                <Author>{author}</Author>
            </FlexRow>
            <AuthorDescription>famous twitch streamer</AuthorDescription>
        </Card>
    );
};

export default QuoteCard;
