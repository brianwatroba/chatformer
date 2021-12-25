import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import LinksTo from "./LinksTo";

const PlayButton = ({ children, className, style }) => {
    const isMobile = useMediaQuery("(max-width:768px)");

    const handleClick = () => {};

    const PlayButton = styled((props) => (
        <LinksTo to="/game">
            <Button
                {...props}
                variant="contained"
                color="primary"
                size={"large"}
                onClick={handleClick}
            />
        </LinksTo>
    ))`
        border-radius: 6px;
        color: #ffffff;
        font-family: Ubuntu;
        font-weight: 700;
        font-size: ${isMobile ? "20px" : "24px"};
    `;

    return (
        <PlayButton className={className} style={style}>
            {children}
        </PlayButton>
    );
};

export default PlayButton;
