import React from "react";
import styled from "@emotion/styled";

const FlexRow = ({ children, className, align }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: row;
        align-items: ${align || "center"};
        justify-content: ${align || "center"};
        text-align: center;
    `;
    return <Container className={className}>{children}</Container>;
};

export default FlexRow;
