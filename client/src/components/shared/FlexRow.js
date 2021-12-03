import React from "react";
import styled from "@emotion/styled";

const FlexRow = ({ children, className }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `;
    return <Container className={className}>{children}</Container>;
};

export default FlexRow;
