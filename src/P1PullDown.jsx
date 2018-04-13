import React from 'react';

import arrowDown from './images/arrow-down.png';
import trailer from './images/trailer.png';
import './css/P1.css';

export default function P1PullDown() {
  return (
    <div className="p1-pulldown-container">
      <img alt="trailer" className="p1-pulldown-trailer" src={trailer} />
      <div className="p1-pulldown-arrowdown-container">
        <img alt="arrowdown" className="p1-pulldown-arrowdown" src={arrowDown} />
      </div>
      <div className="p1-pulldown-title">下拉寻找 · 来自星星的房东</div>
    </div>
  );
}
