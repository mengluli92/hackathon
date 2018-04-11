import React from 'react';
import { PullToRefresh } from "react-js-pull-to-refresh";

import P1PullDown from './P1PullDown';
import P2 from './P2';

const MAX_PULL_DOWN_HEIGHT = 332;

const airbnbP1ContainerSylte = {
  height: '100vh',
  textAlign: 'center',
};

class SecondFloor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showP2: false };
    this.handleGoBackClick = this.handleGoBackClick.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleGoBackClick() {
    this.setState({ showP2: false });
  }

  handleRefresh() {
    return new Promise((resolve) => {
      // setTimeout(resolve, 500);
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
              <div style={airbnbP1ContainerSylte}>
                <div>Airbnb P1</div>
              </div>
            )}
          </PullToRefresh>
        )}
        {showP2 && <P2 onGoBackClick={this.handleGoBackClick} />}
      </div>
    );
  }
}

export default SecondFloor;
