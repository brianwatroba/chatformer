import React from "react";
import styled from "@emotion/styled";

const SectionContainer = ({ children, className }) => {
    const Elem = styled.div`
        display: flex;
        flex-direction: column;
        // height: 100vh;
    `;

    return <Elem classname={className}>{children}</Elem>;
};

export default SectionContainer;
