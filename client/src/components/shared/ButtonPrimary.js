import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ButtonPrimary = ({
    children,
    className,
    style,
    onClick,
    iconLeft,
    iconRight,
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

    return (
        <Elem className={className} style={style}>
            {iconLeft && <Icon />}
            {children}
            {iconRight}
        </Elem>
    );
};

export default ButtonPrimary;
