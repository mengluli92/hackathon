import React, { Component } from 'react';

const lineContainer = {
  display: 'inline-block',
  height: '3px',
  width: '30px',
  background: '#FFFFFF',
  opacity: '0.2',
  marginBottom: '1.5px',
};

const pointContainer = {
  display: 'inline-block',
  height: '6px',
  width: '6px',
  opacity: '0.7',
  borderRadius: '3px',
  background: '#FFFFFF',
  boxShadow: '0 2px 16px 0',
};

const pointSelectedOuter = {
  display: 'inline-block',
  opacity: '0.2',
  background: '#FDAF40',
  boxShadow: '0 2px 16px 0 rgba(255,255,255,0.50)',
  height: '32px',
  width: '32px',
  borderRadius: '16px',
  marginBottom: '-13px',
  zIndex: '1',
  position: 'relative',
};

const pointSelected = {
  height: '10px',
  width: '10px',
  borderRadius: '5px',
  background: '#FDAF40',
  boxShadow: '0 2px 16px 0',
  opacity: '0.56',
  zIndex: '2',
  top: '11px',
  left: '11px',
  position: 'absolute',
};

const pointSelectedContainer = {
  display: 'inline-block',
  position: 'relative',
};

const pointSeletecLeft = {
  marginLeft: '-16px',
};

const pointSeletecRight = {
  marginRight: '-16px',
};

class DotPager extends Component {
  render() {
    const {
      index,
      length,
    } = this.props;
    const points = [];
    for (let i = 0; i < length; i++) {
      if (i === index) {
        let c = pointSelectedContainer;
        c = {
          ...c,
          ...pointSeletecLeft,
          ...pointSeletecRight,
        }
        points.push((
          <div style={c}>
            <div style={pointSelectedOuter} />
            <div style={{ ...pointContainer, ...pointSelected, }} />
          </div>))
      } else {
        points.push(<div style={pointContainer} />);
      }
      if (i !== length - 1) {
        points.push(<div style={lineContainer} />);
      }
    }
    return (
      <div>
        {points}
      </div>
    );

  }
}

export default DotPager;
