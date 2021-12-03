import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

const Link = ({ children }) => {
    const theme = useTheme();

    const handleClick = (e) => {
        console.log(e.target.innerText);
    };

    const Elem = styled.div`
        color: ${theme.palette.text.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 18px;
        font-size: 16px;
        &:hover {
            font-weight: 700;
            cursor: pointer;
        }
    `;

    return <Elem onClick={handleClick}>{children}</Elem>;
};

export default Link;
