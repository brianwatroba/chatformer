import React from "react";
import styled from "@emotion/styled";

import { Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const BackButton = ({ onClick, style, top, left }) => {
    return (
        <Elem
            top={top}
            left={left}
            size="small"
            onClick={onClick}
            style={style}
        >
            <ArrowBackIosNewIcon />
        </Elem>
    );
};

const Elem = styled(Fab)`
    position: absolute;
    top: ${(props) => props.top || "12px"};
    left: ${(props) => props.left || "12px"};
`;

export default BackButton;
