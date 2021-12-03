import React from "react";
import styled from "@emotion/styled";

import Link from "./Link";
import { links } from "../../utils/linkMapping";

const Links = ({ className, linkColor }) => {
    const Elem = styled.div`
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding-left: 36px;
    `;

    return (
        <Elem className={className}>
            {links.map((link) => {
                let [title, url] = link;
                return (
                    <Link linkColor={linkColor} key={title} href={url}>
                        {title}
                    </Link>
                );
            })}
        </Elem>
    );
};

export default Links;
