import React from "react";
import styled from "@emotion/styled";

const ScreenShell = ({ children, style, className }) => {
    const ScreenShell = styled.div`
        position: absolute;
        top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 12px solid #d8d8d8;
        border-radius: 12px;
        width: 800px;
        height: 600px;
        background-color: #72b9d8;
    `;

    return (
        <ScreenShell style={style} className={className}>
            {children}
        </ScreenShell>
    );
};

export default ScreenShell;
