import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DotPager from './DotPager';
import HostCard from './HostCard';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      profiles: [],
    };
    this.changeIndex = this.changeIndex.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ index: 0, profiles: nextProps.result });
  }

  changeIndex(index) {
    this.setState({ index });
  }

  render() {
    const {
      index,
      profiles,
    } = this.state;

    const settings = {
      dots: false,
      arrows: false,
      afterChange: this.changeIndex,
    };
    const showDotPager = profiles.length > 1;

    return (
      <div style={{top: 0}}>
        <div style={{textAlign: 'center', paddingTop: 20 }}>
          {showDotPager && (
            <DotPager
              index={index}
              length={profiles.length}
            />
          )}
        </div>
        <Slider {...settings}>
          {profiles.map(profile => (
            <HostCard {...profile} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default ProfileContainer;
