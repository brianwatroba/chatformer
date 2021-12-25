import React from "react";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

import NavLink from "./NavLink";
import { links } from "../../utils/linkMapping";

const NavLinks = ({ className, linkColor }) => {
    const location = useLocation();
    const Elem = styled.div`
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `;

    return (
        <Elem className={className}>
            {links.map((link) => {
                let [title, href] = link;
                return (
                    <NavLink
                        active={location.pathname === href}
                        linkColor={linkColor}
                        key={title}
                        href={href}
                    >
                        {title}
                    </NavLink>
                );
            })}
        </Elem>
    );
};

export default NavLinks;
