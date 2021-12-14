import React from "react";
import styled from "@emotion/styled";

import assetMapping from "../../utils/assetMapping";

const Clouds = () => {
    const { cloud1, cloud2, cloud3 } = assetMapping;

    const Container = styled.div`
        height: 100%;
        width: 100%;
        position: absolute;
    `;

    const Cloud = styled.img`
        content: url(${(props) => props.src});
        height: ${(props) => props.height};
        position: absolute;
        top: ${(props) => props.top};
        bottom: ${(props) => props.bottom};
        left: ${(props) => props.left};
        right: ${(props) => props.right};
    `;

    return (
        <Container>
            <Cloud src={cloud1} height={200} right={"90%"} top={"0%"} />
            <Cloud src={cloud2} height={200} left={"85%"} top={"5%"} />
            <Cloud src={cloud3} height={250} left={"80%"} top={"30%"} />
            <Cloud src={cloud2} height={300} right={"75%"} top={"50%"} />
            <Cloud src={cloud2} height={200} left={"80%"} top={"50%"} />
            <Cloud src={cloud1} height={200} left={"70%"} top={"20%"} />
            <Cloud src={cloud3} height={200} right={"80%"} top={"30%"} />
        </Container>
    );
};

export default Clouds;
