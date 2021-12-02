import React, { useState, useRef } from "react";
import styled from "@emotion/styled";

import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const HamburgerMenu = ({ links }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const matches = useMediaQuery("(max-width:768px)");

    return (
        <>
            {matches && (
                <IconButton onClick={handleClick} size="large">
                    <MenuIcon fontSize="large" color="secondary" />
                </IconButton>
            )}
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {links.map((link) => {
                    let [title] = link;
                    return (
                        <MenuItem key={title} onClick={handleClose}>
                            {title}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
};

export default HamburgerMenu;
