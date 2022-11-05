import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "About";
  return (
    <div className='Text1'>
      <div className='container'>
        <img
          className='profile'
          src='/profile.jpg'
          alt=''
          width='120'
          height='139'
        />

        <div className='intro'>
          <div className='title3'>Dan Roche</div>
          <div className='intro2'>
            <br></br>
            I'm a London-based software engineer always exploring new challenges
            and ways to grow. I'm currently working with C# / .NET and Python.
          </div>
        </div>
      </div>
      <br></br>
      Check out my<span> </span>
      <Link className='linky' to='/Contact'>
        contact
      </Link>
      <span> </span> page if you want to get in touch!
      <br></br>
      <br></br>
      <div className='try'>Interests</div>
      <br></br>Recently I've worked extensively on the{" "}
      <a
        className='linky'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/Capgemini/xrm-datamigration-xrmtoolbox'
      >
        Data Migration Xrm Toolbox{" "}
      </a>
      open source project. It's an Xrm toolbox plugin maintained by the Microsft
      C&CA team at Capgemini and has nearly 50k donwnloads.
      <br></br>
      <br></br>
      I've also built a{" "}
      <a
        className='linky'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/danroche10/chess-match'
      >
        chess game program{" "}
      </a>
      and{" "}
      <a
        className='linky'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/danroche10/court_booker'
      >
        tennis court booking bot{" "}
      </a>{" "}
      in python.
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;
