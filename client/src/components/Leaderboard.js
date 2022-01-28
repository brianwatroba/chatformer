import React from "react";
import styled from "@emotion/styled";

import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

import assetMapping from "../utils/assetMapping";
import { FlexColumn, SectionTitle } from "./index";

const { ninjaAvatar } = assetMapping;

function createData(avatarImg, streamer, time, date) {
    return { avatarImg, streamer, time, date };
}

const rows = [
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/2/20"),
];

const Leaderboard = () => {
    return (
        <>
            <FlexColumn style={{ backgroundColor: "#333", minHeight: "100vh" }}>
                <SectionTitle>leaderboard</SectionTitle>
                <Typography variant="h6" sx={{ color: "#808080", marginBottom: "12px" }}>
                    fastest times for completing all levels
                </Typography>
                <TableContainer
                    sx={{
                        maxWidth: 700,
                        border: "20px solid #2B2D2F",
                        borderRadius: "12px",
                        backgroundColor: "#1E1E1E",
                    }}
                    component={Paper}
                >
                    <Table
                        aria-label="leaderboard table"
                        component="div"
                        sx={{ borderRadius: "24px", color: "#ffffff" }}
                    >
                        <TableHead>
                            <TableRow>
                                <Cell>
                                    <ColumnTitle variant="h6">STREAMER</ColumnTitle>
                                </Cell>
                                <Cell align="right">
                                    <ColumnTitle variant="h6">TIME</ColumnTitle>
                                </Cell>
                                <Cell align="right">
                                    <ColumnTitle variant="h6">DATE</ColumnTitle>
                                </Cell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.streamer}>
                                    <StreamerCell component="th" scope="row">
                                        <Avatar imgUrl={ninjaAvatar} />
                                        <StreamerText variant="h6" component="div">
                                            {row.streamer}
                                        </StreamerText>
                                    </StreamerCell>
                                    <Cell align="right">
                                        <TimeText variant="h6">{row.time}</TimeText>
                                    </Cell>
                                    <Cell align="right">
                                        <DateText variant="h6">{row.date}</DateText>
                                    </Cell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </FlexColumn>
        </>
    );
};

const Avatar = styled.div`
    background-image: url(${(props) => props.imgUrl});
    margin-right: 12px;
    background-size: contain;
    height: 35px;
    width: 35px;
    border-radius: 50px;
`;

const Cell = styled(TableCell)`
    padding: 16px 24px;
`;

const ColumnTitle = styled(Typography)`
    color: #fff;
    font-family: ubuntu;
    font-weight: 700;
`;

const StreamerCell = styled(Cell)`
    display: flex;
    flex-direction: row;
    color: #fff;
    font-size: 20px;
`;

const StreamerText = styled(Typography)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
`;

const TimeText = styled(Typography)`
    font-style: italic;
    color: #c1c1c1;
`;

const DateText = styled(Typography)`
    color: #c1c1c1;
`;

export default Leaderboard;
