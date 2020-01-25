import React from 'react';
import './about.scss';
import { useLocation } from 'react-router-dom';

interface loca {
  state: {
    name: String
  }
}

const About: React.FC = () => {

  const location: loca = useLocation();
  return (
    <div className="About">
      <h1>게임을 시작하지</h1>
        <h1>{location.state ? location.state.name : null}</h1>
    </div>
  );
}

export default About;
