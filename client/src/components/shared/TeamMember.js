import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import FlexColumn from "./FlexColumn";

const TeamMember = ({ imgUrl, name, title, ghUsername }) => {
    const ghLink = "https://www.github.com/" + ghUsername;

    const handleClick = () => {};
    const Container = styled(FlexColumn)`
        margin: 28px;
    `;

    const Name = styled(Typography)`
        color: #fff;
        font-weight: 700;
        font-family: Cabin;
    `;

    const Avatar = styled.div`
        background-image: url(${imgUrl});
        background-size: cover;
        display: flex;
        height: 200px;
        width: 200px;

        border-radius: 8px;
        border: solid #fff 4px;
        margin: 0px 0px 18px 0px; ;;;;;;;;
    `;

    const Title = styled(Typography)`
        color: #333;
        font-family: Cabin;
        margin: 0px 0px 8px 0px;
    `;

    const GithubLink = styled(Typography)`
        color: #505050;
        font-family: Cabin;
        font-style: italic;
        text-decoration: underline;
        margin: 0px 0px 12px 0px;
        &:hover {
            font-weight: 700;
            cursor: pointer;
        }
    `;

    return (
        <Container>
            <Avatar />
            <Name variant={"h5"}>{name}</Name>
            <Title variant="h6">{title}</Title>
            <GithubLink onClick={() => (window.location.href = ghLink)}>
                github
            </GithubLink>
        </Container>
    );
};

export default TeamMember;
