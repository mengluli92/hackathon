import React from 'react';

import arrowUp from './images/arrow-up.png';

const arrowUpStyle = {
  height: 12,
  width: 12,
};
const textStyle = {
  color: 'white',
  fontFamily: 'PingFang SC',
  fontSize: 14,
  letterSpacing: -0.19,
  opacity: 0.5,
  paddingLeft: 12,
};

export default function ScrollUpContent({
  text,
}) {
  return (
    <div>
      <img alt="arrowup" style={arrowUpStyle} src={arrowUp} />
      <span style={textStyle}>{text}</span>
    </div>
  );
}
