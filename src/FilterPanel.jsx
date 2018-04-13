import React from 'react';

import './css/FilterPanel.css';
import FilterButton from './FilterButton';

import {emptyMap} from './SearchContainer';

const filterContainer = {
  width: '50%',
  display: 'inline-block',
  float: 'left',
  height: '48px',
  textAlign: 'center',
};

const btn = {
  fontFamily: 'HanziPenSC-W5',
  fontSize: '14px',
  color: '#202D49',
  letterSpacing: '0.15px',
  lineHeight: '58px',
  top: '-10px',
};

const titleStyle = {
  fontFamily: 'PingFangSC-Medium',
  fontSize: '12px',
  color: '#484848',
  letterSpacing: '0.09px',
};

class FilterPanel extends React.Component {
  render() {
    const {
      filterName,
      title,
      filters,
      changeFilter,
      selectedValue,
    } = this.props;
    return (
      <div>
        <div className={"container"}>
        </div>
        <div className={"panel"}>
          <div style={titleStyle}>{title}</div>
          <div>
            <FilterButton
              title={'无所谓'}
              type={selectedValue === emptyMap[filterName] ? 'selected' : 'normal'}
              style={btn}
              onClick={() => {
                changeFilter(filterName, emptyMap[filterName]);
              }}
            />
          </div>
          <div style={{float: 'left',width: '100%',}}>
            {filters.map((filter) => {
              return (
                <div key={`${filterName}${filter}`} style={filterContainer}>
                  <FilterButton
                    title={filter}
                    type={selectedValue === filter ? 'selected' : 'normal'}
                    style={btn}
                    onClick={() => {
                      changeFilter(filterName, filter);
                    }}
                  />
                </div>);
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FilterPanel;
