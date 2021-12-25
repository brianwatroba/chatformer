import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

import LinksTo from "./LinksTo";

const PlayButtonSecondary = ({ children }) => {
    const PlayButton = styled((props) => (
        <LinksTo to="/game">
            <Button
                {...props}
                variant="outlined"
                color="secondary"
                size="large"
                disableElevation
            />
        </LinksTo>
    ))`
        font-family: Ubuntu;
        font-weight: 700;
        font-size: 14px;
    `;

    return <PlayButton>{children}</PlayButton>;
};

export default PlayButtonSecondary;
