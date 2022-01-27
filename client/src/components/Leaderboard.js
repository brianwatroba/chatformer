import React from "react";
import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import assetMapping from "../utils/assetMapping";

import { FlexColumn, FlexRow, SectionTitle, SectionSubtitle } from "./index";
const { ninjaAvatar } = assetMapping;

function createData(avatarImg, streamer, time, date) {
    return { avatarImg, streamer, time, date };
}

const rows = [
    createData(ninjaAvatar, "Ninja", "24:49", "12/02/2020"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/02/2020"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/02/2020"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/02/2020"),
    createData(ninjaAvatar, "Ninja", "24:49", "12/02/2020"),
];

const Leaderboard = () => {
    const Avatar = styled.div`
        background-image: url(${(props) => props.imgUrl});
        background-size: contain;
        height: 35px;
        width: 35px;
        border-radius: 50px;
    `;

    return (
        <>
            <FlexColumn justify="center">
                <SectionTitle>leaderboard</SectionTitle>
                <SectionSubtitle color="#fff">
                    fastest times for completing all levels
                </SectionSubtitle>
            </FlexColumn>
            <TableContainer sx={{ maxWidth: 700 }} component={Paper}>
                <Table aria-label="leaderboard table">
                    <TableHead>
                        <TableRow>
                            <TableCell>STREAMER</TableCell>
                            <TableCell align="right">TIME</TableCell>
                            <TableCell align="right">DATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.streamer}>
                                <TableCell component="th" scope="row">
                                    <FlexRow align="left">
                                        <Avatar imgUrl={ninjaAvatar} />
                                        {row.streamer}
                                    </FlexRow>
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Leaderboard;
