import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const ButtonSecondary = ({ children, onClick }) => {
    const Elem = styled(Button)`
        font-family: Ubuntu;
        font-weight: 700;
        font-size: 14px;
    `;

    return (
        <Elem
            variant="outlined"
            color="secondary"
            size="large"
            disableElevation
            onClick={onClick}
        >
            {children}
        </Elem>
    );
};

export default ButtonSecondary;
