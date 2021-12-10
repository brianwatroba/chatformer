import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LinksTo from "./LinksTo";

const NavLink = ({ children, className, linkColor, href, active }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:768px)");

    const Elem = styled.div`
        color: ${linkColor || theme.palette.text.primary};
        font-family: Cabin;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 12px;
        font-size: ${isMobile ? "14px" : "18px"};
        &:hover {
            font-weight: 700;
            cursor: pointer;
        }
        font-weight: ${active ? "700" : "500"};
    `;

    return (
        <LinksTo to={href}>
            <Elem className={className}>{children}</Elem>
        </LinksTo>
    );
};

export default NavLink;
