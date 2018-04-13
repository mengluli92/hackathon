import React from 'react';
import { PullToRefresh } from "react-js-pull-to-refresh";

import airbnbP1 from './images/airbnb-p1.png';
import P1PullDown from './P1PullDown';
import P2Container from './P2Container';
import './css/P1.css';

const MAX_PULL_DOWN_HEIGHT = 332;

class SecondFloorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showP2: false };
    this.handleGoBackClick = this.handleGoBackClick.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleGoBackClick() {
    this.setState({ showP2: false });
    window.scrollTo(0, 0);
  }

  handleRefresh() {
    return new Promise((resolve) => {
      this.setState({ showP2: true});
    });
  }

  render() {
    const { showP2 } = this.state;
    return (
      <div>
        {!showP2 && (
          <PullToRefresh
            pullDownContent={<P1PullDown />}
            releaseContent={<P1PullDown />}
            refreshContent={<P1PullDown />}
            pullDownThreshold={MAX_PULL_DOWN_HEIGHT}
            onRefresh={this.handleRefresh}
          >
            {!showP2 && (
              <div className="p1-body-container">
                <img alt="airbnbp1" className="p1-airbnb-p1" src={airbnbP1} />
              </div>
            )}
          </PullToRefresh>
        )}
        {showP2 && <P2Container onGoBackClick={this.handleGoBackClick} />}
      </div>
    );
  }
}

export default SecondFloorContainer;
