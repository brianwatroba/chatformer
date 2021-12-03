import React from "react";
import styled from "@emotion/styled";

import { Button } from "@mui/material";

const PlayButtonSecondary = ({ children }) => {
    const PlayButton = styled((props) => (
        <Button
            {...props}
            variant="outlined"
            color="secondary"
            size="large"
            disableElevation
        />
    ))`
        font-family: Source Code Pro;
        font-weight: 700;
        font-size: 16px;
    `;

    return <PlayButton>{children}</PlayButton>;
};

export default PlayButtonSecondary;
