import React from "react";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";

const Projects = () => {
  document.title = "Projects";
  return (
    <div>
      <div className='pageTitle'>
        {" "}
        <CodeOutlinedIcon className='icons' />
        <span> </span>
        Projects
      </div>

      <div className='Text2'>
        You can see three projects below - click on the github logo to view the
        repo.
        <br></br>
        <br></br>
        <div className='footer'></div>
        <div className='projectTitle'>Data Migration Xrm Toolbox</div>
        <br></br>
        <div className='container'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/Capgemini/xrm-datamigration-xrmtoolbox'
          >
            <img
              className='projectImage'
              src='/cds-migrator-image.png'
              alt=''
              width='497'
              height='394'
            />
          </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='projectDescription'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/Capgemini/xrm-datamigration-xrmtoolbox'
            >
              <img src='/GitHub-Mark-64px.png' alt='' width='50' height='50' />
            </a>
            <span></span>
            <br></br>
            <br></br>
            <div className='blackWriting'>
              <b>Overview</b>
            </div>
            <br></br>
            <ul>
              <li>
                Rewrote most of the C# codebase for the Data Migration Xrm
                Toolbox open source project which has 48.6K downloads. This gave
                me an in-depth understanding of the C# language and .NET
                framework. It also provided me with experience of tackling
                difficult programming challenges independently.
              </li>
            </ul>
            <br></br>
            <br></br>
          </div>
        </div>
        <div className='footer'></div>
        <div className='projectTitle'>Chess game</div>
        <br></br>
        <div className='container'>
          <br></br>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/danroche10/chess-match'
          >
            <video width='497' height='394' controls>
              <source src='chess-video.mp4' type='video/mp4' />
            </video>
          </a>
          <br></br>
          <br></br>
          <div className='projectDescription'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/danroche10/chess-match'
            >
              <img src='/GitHub-Mark-64px.png' alt='' width='50' height='50' />
            </a>
            <br></br>
            <br></br>
            <div className='blackWriting'>
              <b>Overview</b>
            </div>
            <br></br>
            <ul>
              <li>
                As an avid chess fan, I wanted to build a python program that
                enabled a game of chess to be played with all the rules in
                place.
              </li>
              <li>
                I found a pygame tutorial for a game of checkers which enabled
                me to get the initial idea up and running. From there I used my
                programming knowledge and logical reasoning to build the game up
                from just pawns to all pieces. Finally, I addressed all of the
                edge cases (castling, checkmate, pawn promotion), refactored and
                made the code more readable.
              </li>
              <li>
                I included tests to make the program more robu. Some possible
                enhancements include cloud deployment to enable matches between
                players on different machines, a backend that enables matches to
                be stored and a chat on the side of the board to make the games
                more entertaining.
              </li>
            </ul>
            <br></br>
            <br></br>
          </div>
        </div>
        <div className='footer'></div>
        <div className='projectTitle'>Tennis court booker</div>
        <br></br>
        <div className='container'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/danroche10/court_booker'
          >
            <img
              className='projectImage'
              src='/booking-bot.png'
              alt=''
              width='497'
              height='394'
            />
          </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='projectDescription'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/danroche10/court_booker'
            >
              <img src='/GitHub-Mark-64px.png' alt='' width='50' height='50' />
            </a>
            <span></span>
            <br></br>
            <br></br>
            <div className='blackWriting'>
              <b>Overview</b>
            </div>
            <br></br>
            <ul>
              <li>
                Having grown frustrated with not being able to book a tennis
                court in my local area, I decided to build a python bot (using
                selenium) that would automate the booking process, ensuring that
                I got a court each week at my preferred time
              </li>
              <li>
                Initially, the bot hit the website at the same time each week
                when the courts were released for booking. However, at this time
                there was no availability and I realised that there was a one
                week period before public release where paid members were able
                to book courts. Not wanting to get a paid membership, I changed
                the script to hit the website every 5 mins (using datetime
                library) from the public release time so that as soon as someone
                canceled their court, my bot would book it.
              </li>
              <li>
                Since going live, the bot has booked a court every week at my
                preferred time and tennis skills have vastly improved.
              </li>
            </ul>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
