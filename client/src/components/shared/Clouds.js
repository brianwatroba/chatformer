import React from "react";
import styled from "@emotion/styled";

import assetMapping from "../../utils/assetMapping";

const Clouds = ({ lowestAltitude, count }) => {
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

    let clouds = [];

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const getCloudType = (num) => {
        switch (num) {
            case 1:
                return cloud1;
            case 2:
                return cloud2;
            case 3:
                return cloud3;
            default:
                return cloud1;
        }
    };

    const generateClouds = () => {
        const increment = Math.floor((100 - lowestAltitude) / count);
        for (let i = 1; i <= count; i++) {
            let cloudType = getCloudType(getRandomInt(1, 4));
            let height = getRandomInt(150, 301);
            let side = i % 2 === 0 ? "right" : "left";
            let altitude = `${increment * i}%`;
            let fromSide = `${getRandomInt(65, 101)}%`;
            clouds.push([cloudType, height, side, fromSide, altitude]);
        }
    };

    generateClouds();

    return (
        <Container>
            <Cloud src={cloud1} height={"200px"} right={"70%"} top={"0%"} />
            <Cloud src={cloud2} height={"225px"} right={"80%"} top={"5%"} />
            <Cloud src={cloud3} height={"250px"} right={"80%"} top={"7%"} />
            <Cloud src={cloud3} height={"200px"} right={"90%"} top={"0%"} />
            {clouds.map((cloud) => (
                <Cloud
                    key={clouds.indexOf(cloud)}
                    src={cloud[0]}
                    height={cloud[1]}
                    right={cloud[2] === "right" ? cloud[3] : null}
                    left={cloud[2] === "left" ? cloud[3] : null}
                    top={cloud[4]}
                />
            ))}
        </Container>
    );
};

export default Clouds;
