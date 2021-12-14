import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const TwitchLoginButton = ({ children, className, style }) => {
    const isMobile = useMediaQuery("(max-width:768px)");
    const twitchLoginUrl =
        "https://id.twitch.tv/oauth2/authorize?client_id=qqyhhc7u3eda4x5rayg3n4e93m3r3g&redirect_uri=http://localhost:3000/game&response_type=token&scope=";
    const handleClick = () => {
        window.location.href = twitchLoginUrl;
    };

    const Elem = styled((props) => (
        <Button
            {...props}
            variant="contained"
            color="primary"
            size={"large"}
            onClick={handleClick}
        />
    ))`
        border-radius: 6px;
        color: #ffffff;
        font-family: Ubuntu;
        font-weight: 700;
        font-size: ${isMobile ? "20px" : "24px"};
    `;

    return (
        <Elem className={className} style={style}>
            {children}
        </Elem>
    );
};

export default TwitchLoginButton;

//
