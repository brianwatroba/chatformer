import React from "react";
import styled from "@emotion/styled";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FeatureItems = ({ children }) => {
    const isMedium = useMediaQuery("(max-width:1200px)");

    const GridContainer = styled.div`
        display: flex;
        flex-direction: ${isMedium ? "column" : "row"};
        justify-content: center;
        align-items: center;
    `;

    return <GridContainer>{children}</GridContainer>;
};

export default FeatureItems;
