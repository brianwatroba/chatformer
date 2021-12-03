import React from "react";
import styled from "@emotion/styled";

const FlexColumn = ({ children }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: "center";
        overflow: hidden;
        position: relative;
    `;
    return <Container>{children}</Container>;
};

export default FlexColumn;
