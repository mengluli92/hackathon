import $ from 'jquery';
import PropTypes from 'prop-types';
import React from 'react';

import ScrollUpContent from './ScrollUpContent';
import './P2.css';

const DELAY_TIME = 500;
const SCROLL_DURATION = 2000;

const propTypes = {
  onGoBackClick: PropTypes.func.isRequired,
};

class P2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floor: -1,
    };
    this.scrollTop = 0;
    this.viewPortHeight = window.innerHeight;
    this.handleBackToEarth = this.handleBackToEarth.bind(this);
    this.handleBackToSearch = this.handleBackToSearch.bind(this);
    this.handleSearchPress = this.handleSearchPress.bind(this);
    // this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, this.viewPortHeight * 2);
    setTimeout(
      () => $('html, body').animate({ scrollTop: this.viewPortHeight }, SCROLL_DURATION),
      DELAY_TIME,
    );
    setTimeout(() => {
      this.setState({ floor: 2 });
      this.yOffset = this.viewPortHeight;
    }, SCROLL_DURATION + DELAY_TIME);
    // window.addEventListener('scroll', this.handleScroll);
  }

  handleBackToEarth() {
    const { onGoBackClick } = this.props;
    $('html, body').animate({ scrollTop: this.viewPortHeight * 2 }, SCROLL_DURATION);
    setTimeout(onGoBackClick, SCROLL_DURATION + DELAY_TIME);
  }

  handleBackToSearch() {
    $('html, body').animate({ scrollTop: this.viewPortHeight }, SCROLL_DURATION);
    setTimeout(() => this.setState({ floor: 2 }), SCROLL_DURATION + DELAY_TIME);
  }

  handleSearchPress() {
    $('html, body').animate({ scrollTop: 0 }, SCROLL_DURATION);
    setTimeout(() => this.setState({ floor: 3 }), SCROLL_DURATION + DELAY_TIME);
  }

  // hanldeScroll() {
  //   const y = window.scrollTop;
  // }


  render() {
    const { onGoBackClick } = this.props;
    const { floor } = this.state;
    return (
      <div className="p2-container">
        <button className="p2-third-floor" onClick={onGoBackClick} >
          三楼
        </button>
        {floor === 3 && (
          <button className="p2-third-floor-back" onClick={this.handleBackToSearch} >
            <ScrollUpContent
              onClick={this.handleBackToEarth}
              text="重新寻找 · 来自星星的房东"
            />
          </button>
        )}
        <button className="p2-second-floor" onClick={this.handleSearchPress} >
          寻找房东
        </button>
        {floor === 2 && (
          <button className="p2-second-floor-exit" onClick={this.handleBackToEarth} >
            <ScrollUpContent onClick={this.handleBackToEarth} text="上滑返回地球" />
          </button>
        )}
        <button className="p2-first-floor" onClick={onGoBackClick} >
          一楼
        </button>
      </div>
    );
  }
};

P2.propTypes = propTypes;

export default P2;
