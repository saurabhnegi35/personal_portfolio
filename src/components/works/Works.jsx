import './Works.scss';
import { projects } from '../../data';
import { useState } from 'react';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < projects.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <h2 className="title">Works</h2>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {projects.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <div className="links">
                    <a
                      href={d.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live Project</span>
                    </a>
                    <a
                      href={d.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Github Link</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick('left')}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
