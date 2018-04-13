import React from 'react';

import './css/FilterButton.css';

import leftBtn from './image/left1.png';
import midBtn from './image/mid1.png';
import rightBtn from './image/right1.png';

import leftBtn1 from './image/left2.png';
import midBtn1 from './image/mid2.png';
import rightBtn1 from './image/right2.png';

import leftBtn2 from './image/left3.png';
import midBtn2 from './image/mid3.png';
import rightBtn2 from './image/right3.png';

import leftBtn3 from './image/left4.png';
import midBtn3 from './image/mid4.png';
import rightBtn3 from './image/right4.png';

class FilterButton extends React.Component {
  render() {
    const {
      title,
      type,
      onClick,
      style,
    } = this.props;
    let left = leftBtn;
    let mid = midBtn;
    let right = rightBtn;
    let leftClass = 'btn_left_img';
    let midClass = 'btn_mid';
    let rightClass = 'btn_right_img';
    if (type === 'loading') {
      left = leftBtn3;
      mid = midBtn3;
      right = rightBtn3;
      const annimationI = Math.floor(Math.random() * 9);
      leftClass = `btn_left_img animate-button${annimationI}`;
      midClass = `btn_mid animate-button${annimationI}`;
      rightClass = `btn_right_img animate-button${annimationI}`;
    } else if (type === 'selected') {
      left = leftBtn1;
      mid = midBtn1;
      right = rightBtn1;
    } else if (type === 'fill') {
      left = leftBtn2;
      mid = midBtn2;
      right = rightBtn2;
    }
    return (
      <div className={"btn_normal"} style={style} onClick={onClick}>
        <img alt="btnleft" src={left} className={leftClass}/>
        <img alt="btnmid" src={mid}  className={midClass}/>
        <img alt="btnright" src={right} className={rightClass}/>
        {title}
      </div>
    );
  }
}

export default FilterButton;
