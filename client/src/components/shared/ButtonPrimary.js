import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import FlexRow from "./FlexRow";

const ButtonPrimary = ({
    children,
    className,
    style,
    onClick,
    iconLeft,
    isLive,
    disabled,
    color,
    size,
}) => {
    const isMobile = useMediaQuery("(max-width:768px)");

    const Elem = styled((props) => (
        <Button
            {...props}
            variant="contained"
            color={color || "primary"}
            size={size || "large"}
            onClick={onClick}
            disabled={disabled}
            type="type"
        />
    ))`
        border-radius: 6px;
        color: #ffffff;
        font-family: Ubuntu;
        font-weight: 700;
        font-size: ${isMobile ? "20px" : "24px"};
        margin-bottom: 8px;
    `;

    const Icon = styled.img`
        content: url(${iconLeft});
        height: 25px;
        margin-right: 12px;
    `;

    const IsLive = styled(FlexRow)`
        font-size: 8px;
        color: "#fff";
        font-weight: 700;
        font-family: cabin;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-left: 12px;
    `;

    const RedDot = styled.div`
        height: 8px;
        width: 8px;
        border-radius: 100%;
        background-color: ${isLive ? "#ff596e" : "#949494"};
        border: 1px solid #fff;
        margin-right: 3px;
    `;

    return (
        <Elem className={className} style={style}>
            {iconLeft && <Icon />}
            {children}
            {isLive !== undefined && (
                <IsLive>
                    <RedDot />
                    {isLive ? "LIVE" : "NOT LIVE"}
                </IsLive>
            )}
        </Elem>
    );
};

export default ButtonPrimary;
