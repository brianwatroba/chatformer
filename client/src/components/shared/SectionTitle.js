import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const SectionTitle = ({ children, className, style }) => {
    const isMobile = useMediaQuery("(max-width:768px)");
    const Elem = styled(Typography)`
        text-align: center;
        font-family: ubuntu;
        color: #ffffff;
        font-weight: 700;
        text-shadow: 1px 0px 0px #333, -1px 0px 0px #333, 0px 1px 0px #333,
            0px -1px 0px #333;
        padding: ${isMobile ? "12px 16px" : "12px 16px"};
    `;

    return (
        <Elem
            variant={"h3"}
            component="div"
            className={className}
            style={style}
        >
            {children}
        </Elem>
    );
};

export default SectionTitle;
