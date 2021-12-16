import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ButtonPrimary = ({
    children,
    className,
    style,
    onClick,
    icon,
    disabled,
}) => {
    const isMobile = useMediaQuery("(max-width:768px)");

    const Elem = styled((props) => (
        <Button
            {...props}
            variant="contained"
            color="primary"
            size={"large"}
            onClick={onClick}
            disabled={disabled}
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
        content: url(${icon});
        height: 25px;
        margin-right: 12px;
    `;

    return (
        <Elem className={className} style={style}>
            {icon && <Icon />}
            {children}
        </Elem>
    );
};

export default ButtonPrimary;
