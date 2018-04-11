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
  paddingLeft: 8,
};

export default function ScrollUpContent({
  text,
}) {
  return (
    <span>
      <img alt="arrowup" style={arrowUpStyle} src={arrowUp} />
      <span style={textStyle}>{text}</span>
    </span>
  );
}
