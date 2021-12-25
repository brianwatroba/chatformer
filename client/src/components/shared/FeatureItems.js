import React from "react";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";

const FeatureItems = ({ children }) => {
    const isMedium = useMediaQuery("(max-width:1200px)");

    const Elem = styled.div`
        display: flex;
        flex-direction: ${isMedium ? "column" : "row"};
        justify-content: center;
        align-items: center;
        width: 100%;
    `;

    return <Elem>{children}</Elem>;
};

export default FeatureItems;
