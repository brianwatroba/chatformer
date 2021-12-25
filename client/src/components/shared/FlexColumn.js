import React from "react";
import styled from "@emotion/styled";

const FlexColumn = ({
    children,
    className,
    style,
    minHeight,
    justify,
    align,
}) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: ${align || "center"};
        justify-content: ${justify};
        overflow: hidden;
        position: relative;
        width: 100%;
        min-height: ${minHeight};
    `;
    return (
        <Container className={className} style={style}>
            {children}
        </Container>
    );
};

export default FlexColumn;
