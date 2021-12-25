import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const SectionSubtitle = ({ children, className, style, color }) => {
    const isMobile = useMediaQuery("(max-width:768px)");
    const Elem = styled(Typography)`
        text-align: center;
        font-family: Cabin;
        color: ${color || "#333"};
        padding: ${isMobile ? "12px 48px" : "12px 16px"};
    `;

    return (
        <Elem variant={"h5"} className={className} style={style}>
            {children}
        </Elem>
    );
};

export default SectionSubtitle;
