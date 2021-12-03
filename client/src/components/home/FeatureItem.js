import React from "react";
import styled from "@emotion/styled";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FeatureItem = ({ title, subtitle, imgUrl, imgHeight }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:768px)");
    const isMedium = useMediaQuery("(max-width:1200px)");

    const Container = styled.div`
        display: flex;
        padding: ${isMedium ? "10% 3%" : "0% 3%"};
        flex-direction: column;
        justify-content: center;

        max-width: ${isMedium ? "80%" : "25%"};
    `;

    const Title = styled.div`
        text-align: center;
        color: ${theme.palette.text.primary};
        padding: 8px 0px;
        font-size: 28px;
        // font-size: ${isMobile ? "14px" : "28px"};
        font-weight: 700;
    `;

    const Subtitle = styled.div`
        text-align: center;
        color: ${theme.palette.text.primary};
        padding: 8px 0px;
        font-size: 18px;
        // font-size: ${isMobile ? "12px" : "18px"};
    `;

    const Image = styled.img`
        content: url(${(props) => props.imgUrl});
        height: ${(props) => props.height};
    `;

    return (
        <Container>
            <Image imgUrl={imgUrl} height={imgHeight} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    );
};

export default FeatureItem;
