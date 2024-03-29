import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../utils/assetMapping";
import FeatureItem from "../shared/FeatureItem";
import FeatureItems from "../shared/FeatureItems";
import FlexColumn from "../shared/FlexColumn";
import Clouds from "../shared/Clouds";
import SectionTitle from "../shared/SectionTitle";
import SectionSubtitle from "../shared/SectionSubtitle";

const HowItWorks = () => {
    const { coins, chest, singleJumper } = assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

    return (
        <FlexColumn>
            <Clouds lowestAltitude={40} count={7} />
            <FlexColumn justify="center" minHeight="100vh">
                <SectionTitle>tired of "just chatting"?</SectionTitle>
                <SectionSubtitle>
                    there's a better way to engage with your community
                </SectionSubtitle>
            </FlexColumn>
            <FlexColumn justify="space-around" minHeight="100vh">
                <FlexColumn>
                    <SectionTitle>play with your viewers</SectionTitle>
                    <SectionSubtitle>
                        Chat Jump is a new game that incorporates your Twitch
                        chat
                    </SectionSubtitle>
                </FlexColumn>
                <FlexColumn>
                    <SectionSubtitle color="#505050">
                        - how it works -
                    </SectionSubtitle>
                    <FeatureItems>
                        <FeatureItem
                            imgUrl={singleJumper}
                            imgHeight={isMobile ? "50px" : "65px"}
                            title={"jump"}
                            subtitle={
                                "on platforms made of your chat’s messages"
                            }
                        />
                        <FeatureItem
                            imgUrl={coins}
                            imgHeight={isMobile ? "60px" : "75px"}
                            title={"score"}
                            subtitle={"points by getting as high as you can"}
                        />
                        <FeatureItem
                            imgUrl={chest}
                            imgHeight={isMobile ? "47px" : "55px"}
                            title={"earn"}
                            subtitle={"NFTs together with your community"}
                        />
                    </FeatureItems>
                </FlexColumn>
            </FlexColumn>
        </FlexColumn>
    );
};

export default HowItWorks;
