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
        padding: ${isMedium ? "10% 3%" : "7.5% 5%"};
        flex-direction: column;
        justify-content: center;
        max-width: ${isMedium ? "60%" : "25%"};
    `;

    const Title = styled(Typography)`
        text-align: center;
        padding: 8px 0px;
        font-weight: 700;
    `;

    const Subtitle = styled(Typography)`
        text-align: center;
        padding: 0px 0px;
    `;

    const Image = styled.img`
        content: url(${(props) => props.imgUrl});
        height: ${(props) => props.height};
    `;

    return (
        <Container>
            <Image imgUrl={imgUrl} height={imgHeight} />
            <Title variant={"h5"} color={theme.palette.text.primary}>
                {title}
            </Title>
            <Subtitle variant={"subtitle1"} color={theme.palette.text.primary}>
                {subtitle}
            </Subtitle>
        </Container>
    );
};

export default FeatureItem;
