import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const Contact = () => {
  document.title = "Contact";
  return (
    <div>
      <div className="pageTitle">
        {" "}
        <ContactMailIcon className="icons" />
        <span> </span>
        Contact
      </div>
      <div className="Text3">
        Click on the icons to connect or send an e-mail to
        danielroche10@gmail.com!
        <br></br>
        <br></br>{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/danroche10"
        >
          <img
            className="contactImage"
            src="/GitHub-Mark-64px.png"
            alt=""
            width="50"
            height="50"
          />
        </a>{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/DanRoche01"
        >
          <img
            className="contactImage"
            src="/twitter.png"
            alt=""
            width="50"
            height="50"
          />
        </a>{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/dan-roche-3765214a/"
        >
          <img
            className="contactImage"
            src="/linkedin.png"
            alt=""
            width="50"
            height="50"
          />
        </a>{" "}
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Contact;
