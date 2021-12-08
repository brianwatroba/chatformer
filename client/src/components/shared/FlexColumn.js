import React from "react";
import styled from "@emotion/styled";

const FlexColumn = ({ children, className, style }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        position: relative;
        width: 100%;
    `;
    return (
        <Container className={className} style={style}>
            {children}
        </Container>
    );
};

export default FlexColumn;
