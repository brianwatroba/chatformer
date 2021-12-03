import React from "react";
import styled from "@emotion/styled";

import Link from "./Link";
import { links } from "../../utils/linkMapping";

const Links = () => {
    const Links = styled.div`
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding-left: 36px;
    `;

    return (
        <Links>
            {links.map((link) => {
                let [title, url] = link;
                return (
                    <Link key={title} href={url}>
                        {title}
                    </Link>
                );
            })}
        </Links>
    );
};

export default Links;
