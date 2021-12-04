import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const SectionTitle = ({ children }) => {
    const Elem = styled(Typography)`
        text-align: center;
        color: #ffffff;
        font-weight: 700;
        text-shadow: 1px 0px 0px #333, -1px 0px 0px #333, 0px 1px 0px #333,
            0px -1px 0px #333;
    `;

    return <Elem variant={"h2"}>{children}</Elem>;
};

export default SectionTitle;
