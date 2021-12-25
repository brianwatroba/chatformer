import React, { useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import { links } from "../../utils/linkMapping";
import LinksTo from "./LinksTo";

const HamburgerMenu = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLinkClick = (e) => {
        setAnchorEl(null);
        const noSpaces = e.target.innerText.replace(/\s/g, "");
        console.log(noSpaces);
        navigate("/" + noSpaces);
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
                    let [title, url] = link;
                    return (
                        <LinksTo to={url} key={title}>
                            <MenuItem
                                onClick={handleLinkClick}
                                style={{
                                    fontFamily: "cabin",
                                    color: "#333",
                                }}
                            >
                                {title}
                            </MenuItem>
                        </LinksTo>
                    );
                })}
            </Menu>
        </>
    );
};

export default HamburgerMenu;
