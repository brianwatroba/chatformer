import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

import FlexRow from "../shared/FlexRow";
import assetMapping from "../../utils/assetMapping";

const QuoteCard = ({
    quote,
    author,
    authorLogoUrl,
    authorDescription,
    maxWidth,
}) => {
    const theme = useTheme();
    const { quoteMark } = assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

    const Card = styled.div`
        dispay: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        padding: ${isMobile ? "24px" : "36px"};
        margin: 24px;
        border-radius: 6px;
        max-width: ${maxWidth || "300px"};
        font-family: Source Sans Pro;
    `;

    const Quote = styled(Typography)`
        display: flex;
        text-align: center;
        justify-content: center;
        color: ${theme.palette.text.primary};
        padding: 0px 8px;
        color: #808080;
        font-family: Cabin;
    `;

    const Author = styled(Typography)`
        font-weight: 700;
        color: #333;
        font-family: Cabin;
    `;

    const AuthorAvatar = styled.img`
        content: url(${authorLogoUrl});
        height: 40px;
        margin-right: 8px;
        border-radius: 100%;
    `;

    const AuthorDescription = styled(Typography)`
        font-family: cabin;
        font-style: italic;
        color: #808080;
        text-align: center;
        margin-top: 8px;
    `;

    const QuotationMark = styled.img`
        content: url(${quoteMark});
        height: ${isMobile ? "30px" : "60px"};
        transform: rotate(
            ${(props) => (props.type === "open" ? "180deg" : "0deg")}
        );
    `;

    return (
        <Card>
            <FlexRow align={"start"}>
                <QuotationMark type="open" />
            </FlexRow>
            <Quote variant="h4">{quote}</Quote>
            <FlexRow align={"flex-end"}>
                <QuotationMark />
            </FlexRow>
            <FlexRow>
                {authorLogoUrl && <AuthorAvatar />}
                <Author variant="h4">{author}</Author>
            </FlexRow>
            {authorDescription && (
                <AuthorDescription>{authorDescription}</AuthorDescription>
            )}
        </Card>
    );
};

export default QuoteCard;
