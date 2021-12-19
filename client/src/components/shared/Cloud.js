import React from "react";
import styled from "@emotion/styled";

const Cloud = ({ src, height, right, left, top }) => {
    const Elem = styled.img`
        content: url(${src});
        height: ${height};
        position: absolute;
        top: ${top};
        left: ${left};
        right: ${right};
    `;

    return <Elem />;
};

export default Cloud;
