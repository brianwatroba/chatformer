import React from "react";
import styled from "@emotion/styled";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

const FeatureItem = ({ title, subtitle, imgUrl, imgHeight }) => {
    const theme = useTheme();
    const isMedium = useMediaQuery("(max-width:1200px)");

    const Container = styled.div`
        display: flex;
        padding: ${isMedium ? "10% 7%" : "3%"};
        flex-direction: column;
        justify-content: center;
        width: ${isMedium ? "200px" : "225px"};
        background-color: #fff;
        margin: 24px;
        border-radius: 6px;
    `;

    const Title = styled(Typography)`
        text-align: center;
        padding: 8px 0px;
        font-weight: 700;
        font-family: Ubuntu;
    `;

    const Subtitle = styled(Typography)`
        text-align: center;
        font-family: Cabin;
        line-height: normal;
        padding: 0px 0px;
        color: #808080;
    `;

    const Image = styled.img`
        content: url(${(props) => props.imgUrl});
        height: ${(props) => props.height};
        width: auto;
    `;

    const ImageContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: ${isMedium ? "55px" : "75px"};
    `;

    return (
        <Container>
            <ImageContainer>
                <Image imgUrl={imgUrl} height={imgHeight} />
            </ImageContainer>
            <Title variant={"h3"} color={theme.palette.text.primary}>
                {title}
            </Title>
            <Subtitle variant={"h6"} color={theme.palette.text.primary}>
                {subtitle}
            </Subtitle>
        </Container>
    );
};

export default FeatureItem;
