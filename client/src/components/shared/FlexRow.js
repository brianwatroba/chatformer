import React from "react";
import styled from "@emotion/styled";

const FlexRow = ({ children }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `;
    return <Container>{children}</Container>;
};

export default FlexRow;
