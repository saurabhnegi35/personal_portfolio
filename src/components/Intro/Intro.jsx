import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Web Developer', 'Full Stack Developer', 'Content Creator'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      {/* <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="pic" />
        </div>
      </div> */}
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Saurabh Negi</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <p>
            I am a Full Stack Developer with experience building websites and
            web applications. I specialize in JavaScript and have experience
            working with Programming Languages such as Python and JAVA. I also
            have experience working with Node.js, React.js, MongoDB, Express.js,
            jQuery, and Mongoose.
          </p>
        </div>
        <a href="#skills">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
