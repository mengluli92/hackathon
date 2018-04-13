import $ from 'jquery';
import PropTypes from 'prop-types';
import React from 'react';

import ProfileContainer from './ProfileContainer';
import ScrollUpContent from './ScrollUpContent';
import SearchContainer from './SearchContainer';
import { search } from './ApiUtil';
import './css/P2.css';

const DELAY_TIME = 500;
const SEARCH_NO_RESULT_DELAY_TIME = 1200;
const SCROLL_DURATION = 2000;

const propTypes = {
  onGoBackClick: PropTypes.func.isRequired,
};

class P2Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floor: 1,
      searchButtonType: 'normal',
      searchResult: [],
    };

    this.viewPortHeight = window.innerHeight;
    this.handleBackToEarth = this.handleBackToEarth.bind(this);
    this.handleBackToSearch = this.handleBackToSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, this.viewPortHeight * 2);
    setTimeout(
      () => $('html, body').animate({ scrollTop: this.viewPortHeight }, SCROLL_DURATION),
      DELAY_TIME,
    );
    setTimeout(() => {
      this.setState({ floor: 2 });
    }, SCROLL_DURATION + DELAY_TIME);
    window.addEventListener('touchmove', this.handleTouchMove);
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
    window.removeEventListener('touchmove', this.handleTouchMove);
  }

  handleBackToEarth() {
    const { onGoBackClick } = this.props;
    $('html, body').animate({ scrollTop: this.viewPortHeight * 2 }, SCROLL_DURATION);
    setTimeout(() => {
        this.setState({ floor: 1 });
        onGoBackClick();
      }, SCROLL_DURATION + DELAY_TIME,
    );
  }

  handleBackToSearch() {
    $('html, body').animate({ scrollTop: this.viewPortHeight }, SCROLL_DURATION);
    setTimeout(() => this.setState({ floor: 2 }), SCROLL_DURATION + DELAY_TIME);
  }

  handleSearch(request) {
    search(request, (response) => {
      if (response.code === 200) {
        const searchResult = response.data;
        this.setState({
          searchButtonType: 'loading',
          searchResult,
        });
        if (searchResult.length > 0) {
          $('html, body').animate({ scrollTop: 0 }, SCROLL_DURATION);
          setTimeout(() => this.setState({ floor: 3, searchButtonType: 'normal' }),
            SCROLL_DURATION + DELAY_TIME);
        } else {
          setTimeout(() => this.setState({ searchButtonType: 'normal' }),
            SEARCH_NO_RESULT_DELAY_TIME);;
        }
      } else {
        setTimeout(() => this.setState({ searchButtonType: 'normal' }),
          SEARCH_NO_RESULT_DELAY_TIME);;
      }
    });
  }

  handleTouchMove(e) {
    const { floor } = this.state;
    if (floor === 2) {
       window.scrollTo(0, this.viewPortHeight);
    }
  }

  render() {
    const { floor, searchButtonType, searchResult } = this.state;
    return (
      <div className="p2-container">
        {searchResult.length > 0 && (
          <div className="p2-third-floor">
            <ProfileContainer result={searchResult} />
          </div>
        )}
        {floor === 3 && (
          <button className="p2-third-floor-back" onClick={this.handleBackToSearch} >
            <ScrollUpContent
              onClick={this.handleBackToEarth}
              text="重新寻找 · 来自星星的房东"
            />
          </button>
        )}
        {
        <div className="p2-second-floor">
          <SearchContainer handleSearch={this.handleSearch} buttonType={searchButtonType} />
        </div>
      }
        {floor === 2 && (
          <button className="p2-second-floor-exit" onClick={this.handleBackToEarth} >
            <ScrollUpContent onClick={this.handleBackToEarth} text="返回地球" />
          </button>
        )}
      </div>
    );
  }
};

P2Container.propTypes = propTypes;

export default P2Container;
