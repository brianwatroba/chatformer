import React from "react";
import styled from "@emotion/styled";

const FlexColumn = ({ children, className, style }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        position: relative;
    `;
    return (
        <Container className={className} style={style}>
            {children}
        </Container>
    );
};

export default FlexColumn;
