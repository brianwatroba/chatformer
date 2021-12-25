import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import assetMapping from "../utils/assetMapping";
import Clouds from "./shared/Clouds";
import FlexColumn from "./shared/FlexColumn";
import SectionTitle from "./shared/SectionTitle";
import QuoteCard from "./shared/QuoteCard";
import TeamMember from "./shared/TeamMember";
import FlexRow from "./shared/FlexRow";

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { star, coins, chest, mascot, brian, hong, lawrence } = assetMapping;

    return (
        <>
            <FlexColumn>
                <Clouds />
                <Section>
                    <SectionTitle>our mission</SectionTitle>
                    <QuoteCard
                        quote={
                            "help gaming creators engage more deeply with their communities"
                        }
                        maxWidth="500px"
                    />
                </Section>
                <Section>
                    <SectionTitle>challenges</SectionTitle>
                    <SubItem>
                        <Image imgUrl={star} height={"55px"} />
                        <Subtitle variant={"h4"} component="div">
                            viewers want to engage
                        </Subtitle>
                        <Subtext variant="h6" component="div">
                            they’re interested in new, deeper ways to connect
                            with their favorite streamers beyond passive
                            viewership
                        </Subtext>
                    </SubItem>
                    <SubItem>
                        <Image imgUrl={coins} height={"100px"} />
                        <Subtitle variant={"h4"} component="div">
                            monetization is hard
                        </Subtitle>
                        <Subtext variant="h6" component="div">
                            despite loyal and engaged followings, on-platform
                            monetization tools are limited to subscriptions,
                            donations, and ads
                        </Subtext>
                    </SubItem>
                    <SubItem>
                        <Image imgUrl={chest} height={"65px"} />
                        <Subtitle variant={"h4"} component="div">
                            rewards aren’t shared
                        </Subtitle>
                        <Subtext variant="h6" component="div">
                            these monetization tools don't give back much to
                            viewers. There is room to make stream rewards more
                            valuable and shared
                        </Subtext>
                    </SubItem>
                </Section>
                <Section>
                    <SectionTitle>games can help</SectionTitle>
                    <SubItem>
                        <Image imgUrl={mascot} height={"65px"} />
                        <Subtext
                            variant="h6"
                            component="div"
                            style={{ margin: "18px 0px" }}
                        >
                            Streamer followings are tight-knit, loyal, and{" "}
                            <b>magical</b>.
                        </Subtext>
                        <Subtext
                            variant="h6"
                            component="div"
                            style={{ margin: "18px 0px" }}
                        >
                            We believe that{" "}
                            <b>more native gaming experiences</b>--designed
                            specifically for how streamers and viewers can
                            connect on-stream--will better serve that magic.
                        </Subtext>
                        <Subtext
                            variant="h6"
                            component="div"
                            style={{ margin: "18px 0px" }}
                        >
                            <b>Chat Jump</b> is our first prototype in a suite
                            of new games to bring streamers and viewers closer
                            together.
                        </Subtext>
                    </SubItem>
                </Section>
                <Section>
                    <SectionTitle>team</SectionTitle>
                    <FlexRowWrap>
                        <TeamMember
                            imgUrl={lawrence}
                            name={"Lawrence Rogers"}
                            title={"eng, product"}
                            ghUsername={"lxrogers"}
                        />
                        <TeamMember
                            imgUrl={brian}
                            name={"Brian Watroba"}
                            title={"eng, design"}
                            ghUsername={"brianwatroba"}
                        />
                        <TeamMember
                            imgUrl={hong}
                            name={"Hong Jeon"}
                            title={"eng, dev ops"}
                            ghUsername={"hongj77"}
                        />
                    </FlexRowWrap>
                </Section>
                <Section>
                    <SectionTitle>contribute</SectionTitle>
                    <SubItem>
                        <Subtext
                            variant="h6"
                            component="div"
                            style={{ margin: "18px 0px" }}
                        >
                            Chat Jump is open source. We’re always looking for
                            new contributors and ideas.
                        </Subtext>
                        <Subtext
                            variant="h6"
                            component="div"
                            style={{ margin: "18px 0px" }}
                        >
                            If you’re interested in collaborating, please check
                            our roadmap and open issues on our{" "}
                            <u>
                                <a href="https://github.com/brianwatroba/chatformer">
                                    <b>Github</b>
                                </a>
                            </u>
                            .
                        </Subtext>
                    </SubItem>
                </Section>
            </FlexColumn>
        </>
    );
};

const Section = styled(FlexColumn)`
    padding: 48px 0px;
    margin: 24px% 0px;
`;

const SubItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    max-width: 500px;
`;

const Image = styled.img`
    content: url(${(props) => props.imgUrl});
    height: ${(props) => props.height};
    width: auto;
`;

const Subtitle = styled(Typography)`
    color: #fff;
    font-weight: 700;
    font-family: cabin;
    padding: 18px 0px 8px 0px;
    text-align: center;
`;

const Subtext = styled(Typography)`
    color: #505050;
    text-align: center;
    font-family: cabin;
`;

const FlexRowWrap = styled(FlexRow)`
    flex-wrap: wrap;
    width: 100%;
`;

export default NotFound;
