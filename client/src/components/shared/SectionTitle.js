import React from "react";
import styled from "@emotion/styled";

import useMediaQuery from "@mui/material/useMediaQuery";

const SectionTitle = ({ children }) => {
    const isMobile = useMediaQuery("(max-width:768px)");

    const Title = styled.div`
        text-align: center;
        color: #ffffff;
        padding: ${isMobile ? "0px 0px 12px 0px" : "0px 0px 18px 0px"};
        font-size: ${isMobile ? "32px" : "64px"};
        font-weight: 700;
        text-shadow: 1px 0px 0px #333, -1px 0px 0px #333, 0px 1px 0px #333,
            0px -1px 0px #333;
    `;

    return <Title>{children}</Title>;
};

export default SectionTitle;
