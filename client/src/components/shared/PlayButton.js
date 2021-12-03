import React from "react";
import styled from "@emotion/styled";
import history from "../../utils/history";

import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const PlayButton = ({ children }) => {
    const isMobile = useMediaQuery("(max-width:768px)");

    const handleClick = () => {
        history.push("/game");
    };

    const PlayButton = styled((props) => (
        <Button
            {...props}
            variant="contained"
            color="primary"
            size={isMobile ? "medium" : "large"}
            onClick={handleClick}
        />
    ))`
        border-radius: 6px;
        color: #ffffff;
        font-family: Source Code Pro;
        font-weight: 700;
        font-size: ${isMobile ? "18px" : "28px"};
    `;

    return <PlayButton>{children}</PlayButton>;
};

export default PlayButton;
