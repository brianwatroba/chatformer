import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../utils/assetMapping";

const TwitchLoginButton = ({ children, className, style }) => {
    const isMobile = useMediaQuery("(max-width:768px)");
    const { twitchLogo } = assetMapping;
    const twitchLoginUrl =
        "https://id.twitch.tv/oauth2/authorize?client_id=qqyhhc7u3eda4x5rayg3n4e93m3r3g&redirect_uri=http://localhost:3000/game&response_type=code&scope=&force_verify=true";
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

    const TwitchLogo = styled.img`
        content: url(${twitchLogo});
        height: 25px;
        margin-right: 12px;
    `;

    return (
        <Elem className={className} style={style}>
            <TwitchLogo />
            LOG IN WITH TWITCH
        </Elem>
    );
};

export default TwitchLoginButton;

//
