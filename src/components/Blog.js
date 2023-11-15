import React from "react";
import { Link } from "react-router-dom";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";

const Blog = () => {
  document.title = "Blog";

  return (
    <div>
      <div className='pageTitle'>
        {" "}
        <BorderColorOutlinedIcon className='icons' />
        <span> </span>
        Blog
      </div>
      <div className='Text1'>
        Below are some posts I've written on topics that interest me:
        <br></br>
        <br></br>
        <ul>
          2023
          <br></br>
          <br></br>
          <li>
            <Link className='blogPost' to='/dotnet'>
              Notes for passing a .NET interview
            </Link>
          </li>
          <br></br>
          <li>
            <Link className='blogPost' to='/dsom'>
              ChatGPT's take on Pink Floyd's <i>Dark Side of the Moon</i>
            </Link>
          </li>
          <br></br>
          2022
          <br></br>
          <br></br>
          <li>
            <Link className='blogPost' to='/learnprogramming'>
              What I wish I knew each year programming
            </Link>
          </li>
          <br></br>
          2020
          <br></br>
          <br></br>
          <li>
            <Link className='blogPost' to='/establishment'>
              Technology is Changing The Establishment
            </Link>
          </li>
          <br></br>
          <li>
            <Link className='blogPost' to='/mayweather'>
              Business Lessons from Floyd Mayweather
            </Link>
          </li>
          <br></br>
          <li>
            <Link className='blogPost' to='/meaning'>
              The Meaning of Meaning
            </Link>
          </li>
        </ul>
        <br></br>
      </div>
    </div>
  );
};

export default Blog;
