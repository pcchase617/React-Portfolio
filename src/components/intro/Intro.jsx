import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './intro.scss';
//import profilePicture from "../../assets/myself_professional.jpg";

export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Engineer", "Content Creator"],
    });
  }, []);

  return (
    <div className='intro' id="intro">
      <div className='left'>
        <div className="imgContainer">
          <img src= "/assets/myself_professional.png" alt=''/>
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Chase Olshen</h1>
          <h3>Software <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <img src="assets/down.png" alt=""/>
        </a>
      </div>
    </div>
  );
}
