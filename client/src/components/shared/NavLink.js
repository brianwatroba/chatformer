import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import LinksTo from "./LinksTo";

const NavLink = ({ children, className, linkColor, href }) => {
    const theme = useTheme();

    const Elem = styled.div`
        color: ${linkColor || theme.palette.text.primary};
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

    return (
        <LinksTo to={href}>
            <Elem className={className}>{children}</Elem>
        </LinksTo>
    );
};

export default NavLink;
