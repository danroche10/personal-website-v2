import React from "react";
import { Link } from "react-router-dom";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";

const Blog = () => {
  document.title = "Blog";

  return (
    <div>
      <div className="pageTitle">
        {" "}
        <BorderColorOutlinedIcon className="icons" />
        <span> </span>
        Blog
      </div>
      <div className="Text1">
        I thought I’d start a blog to practice my writing and explore some
        topics that interest me. If anyone finds it useful then that’s a bonus.
        You can also find my blog on<span> </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://danroche.substack.com/"
          className="linky"
        >
          substack.
        </a>
        <br></br>
        <br></br>
        <ul>
          <li>
            <Link className="blogPost" to="/establishment">
              <div>Technology is Changing The Establishment</div>
            </Link>
          </li>
          <br></br>
          <li>
            <Link className="blogPost" to="/mayweather">
              Business Lessons from Floyd Mayweather
            </Link>
          </li>
          <br></br>
          <li>
            <Link className="blogPost" to="/meaning">
              The Meaning of Meaning
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
