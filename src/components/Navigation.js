import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Button } from "react-bootstrap";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import FaceIcon from "@material-ui/icons/Face";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="mobileNav">
        <Button
          className="navButton"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon className="menuIcon" />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            {" "}
            <FaceIcon className="icons" />{" "}
            <Link className="navLinks" to="/">
              ABOUT
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            {" "}
            <CodeOutlinedIcon className="icons" />
            <Link className="navLinks" to="/Projects">
              PROJECTS
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <ContactMailIcon className="icons" />
            <Link className="navLinks" to="/Contact">
              CONTACT
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <BorderColorOutlinedIcon className="icons" />
            <Link className="navLinks" to="/blog">
              {" "}
              BLOG
            </Link>
          </MenuItem>
        </Menu>
      </div>
      <div>
        <Row className="hello">
          <ul className="nav nav-pills pull-left">
            <li className="navButton">
              <Link className="navLinks" to="/">
                <FaceIcon className="icons" /> ABOUT
              </Link>
            </li>
            <li className="navButton">
              <Link className="navLinks" to="/Projects">
                <CodeOutlinedIcon className="icons" />
                PROJECTS
              </Link>
            </li>
            <li className="navButton">
              <Link className="navLinks" to="/Contact">
                <ContactMailIcon className="icons" />
                CONTACT
              </Link>
            </li>
            <li className="navButton">
              <Link className="navLinks" to="/blog">
                <BorderColorOutlinedIcon className="icons" /> BLOG
              </Link>
            </li>
          </ul>

          <ul className="nav nav-pills pull-right">
            <li className="navButton">
              <a
                className="linky"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/danroche10"
              >
                <img
                  className="greyImage"
                  src="/GitHub-Mark-64px.png"
                  alt=""
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li className="navButton">
              <a
                className="linky"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/DanRoche01"
              >
                <img
                  className="greyImage"
                  src="/twitter.png"
                  alt=""
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li className="navButton">
              <a
                className="linky"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dan-roche-3765214a/"
              >
                <img
                  className="greyImage"
                  src="/linkedin.png"
                  alt=""
                  width="20"
                  height="20"
                />
              </a>
            </li>
          </ul>
        </Row>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Navigation;

/*
  <ul className="nav nav-pills pull-left">
        <li className="hidey">
          <Link to="/">DR</Link>
        </li>
      </ul>


      */
