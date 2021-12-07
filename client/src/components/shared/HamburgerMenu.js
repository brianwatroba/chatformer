import React, { useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { links } from "../../utils/linkMapping";

const HamburgerMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLinkClick = (e) => {
        setAnchorEl(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
        // include link functionality
    };

    return (
        <>
            <IconButton onClick={handleMenuClick}>
                <MenuIcon fontSize="large" color="secondary" />
            </IconButton>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {links.map((link) => {
                    let [title] = link;
                    return (
                        <MenuItem key={title} onClick={handleLinkClick}>
                            {title}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
};

export default HamburgerMenu;
