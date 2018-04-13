import React from 'react';

import './css/SearchContainer.css';
import refreshImg from './image/refresh.png';

import FilterButton from './FilterButton';
import FilterPanel from './FilterPanel';

import { filter } from './ApiUtil';

const searchContainerStyle = {
  height: '92vh',
  textAlign: 'center',
  fontFamily: 'HanziPenSC-W3',
  fontSize: '21px',
  color: '#E1E9F1',
  lineHeight: '58px',
  letterSpacing: '6px',
};

const firstLine = {
  marginTop: '8vh',
};

const textStyle = {
  display: 'inline-block',
};

const icon1 = {
  width: '10px',
};

const btn1 = {
  fontFamily: 'PingFangSC-Medium',
  fontSize: '14px',
  color: '#EFB056',
  letterSpacing: '0.4px',
};

const btn2 = {
  fontFamily: 'PingFangSC-Semibold',
  fontSize: '19px',
  color: '#FFFFFF',
  letterSpacing: '1px',
  border: 'hidden',
  background: 'transparent',
};

const nameMap = {
  constellation: "房东星座",
  city: "房东所在城市",
  generation: "房东年龄",
  character: "房东性格",
  pets: "房东宠物",
  occupation: "房东职业",
  hobby: "房东爱好",
  gender: "房东性别",
  marital: "房东婚姻状况",
};

const emptyList = ["任意星座", "任何城市", "任意年龄", "任意性格", "任意宠物室友", "任意职业", "很多事情", "任意性别", "神秘"];
const emptyMap = {
  constellation: "任意星座",
  city: "任何城市",
  generation: "任意年龄",
  character: "任意性格",
  pets: "任意宠物室友",
  occupation: "任意职业",
  hobby: "很多事情",
  gender: "任意性别",
  marital: "神秘",
};

export {emptyMap};

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      generation: null,
      constellation: null,
      character: null,
      pets: null,
      occupation: null,
      hobby: null,
      marital: null,
      gender: null,
      showPanel: false,
      filterName: '',
      buttonType: this.props.buttonType,
      filtersMap: {
        constellation: [],
        city: [],
        generation: [],
        character: [],
        pets: [],
        occupation: [],
        hobby: [],
        gender: [],
        marital: [],
      },
    };
    this.changeFilter = this.changeFilter.bind(this);
    this.openPanel = this.openPanel.bind(this);
    this.randomChoose = this.randomChoose.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    filter((data) => {
      if (data.code === 200) {
        this.setState({ filtersMap: data.data });
        this.randomChoose();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const { buttonType } = nextProps;
    if ( this.state.buttonType !== buttonType ) {
      this.setState({ buttonType });
    }
  }

  randomChoose() {
    const { filtersMap } = this.state;
    const constellationR = filtersMap.constellation.length;
    const cityR = filtersMap.city.length;
    const generationR = filtersMap.generation.length;
    const characterR = filtersMap.character.length;
    const petsR = filtersMap.pets.length;
    const occupationR = filtersMap.occupation.length;
    const hobbyR = filtersMap.hobby.length;
    const genderR = filtersMap.gender.length;
    const maritalR = filtersMap.marital.length;

    const constellationI = Math.floor(Math.random() * constellationR);
    const cityI = Math.floor(Math.random() * cityR);
    const generationI = Math.floor(Math.random() * generationR);
    const characterI = Math.floor(Math.random() * characterR);
    const petsI = Math.floor(Math.random() * petsR);
    const occupationI = Math.floor(Math.random() * occupationR);
    const hobbyI = Math.floor(Math.random() * hobbyR);
    const genderI = Math.floor(Math.random() * genderR);
    const maritalI = Math.floor(Math.random() * maritalR);

    const seed = Math.floor(Math.random() * 9);
    this.setState({
      constellation: seed === 0 ? filtersMap.constellation[constellationI] : "任意星座",
      city: seed === 0 ? filtersMap.city[cityI] : "任何城市",
      generation: seed === 0 ? filtersMap.generation[generationI] : "任意年龄",
      character: seed === 0 ? filtersMap.character[characterI] : "任意性格",
      pets: seed !== 0 ? filtersMap.pets[petsI] : "任意宠物室友",
      occupation: seed !== 0 ? filtersMap.occupation[occupationI] : "任意职业",
      hobby: seed === 0 ? filtersMap.hobby[hobbyI] : "很多事情",
      gender: seed !== 0 ? filtersMap.gender[genderI] : "任意性别",
      marital: seed === 0 ? filtersMap.marital[maritalI] : "神秘",
      buttonType: 'normal',
    });
  }

  changeFilter(filterName, value) {
    this.setState({
      [filterName]: value,
      showPanel: false,
      filterName: '',
    });
  }

  openPanel(filterName) {
    this.setState({
      showPanel: true,
      filterName,
    });
  }

  search() {
    const { handleSearch } = this.props;
    const {
      showPanel,
      filterName,
      filtersMap,
      buttonType,
      ...selectedFilter,
    } = this.state;
    Object.keys(selectedFilter).forEach((key) => {
      if (emptyList.includes(selectedFilter[key])) {
        delete selectedFilter[key];
      }
    });
    handleSearch(selectedFilter);
  }

  render() {
    const {
      city,
      generation,
      constellation,
      character,
      pets,
      occupation,
      hobby,
      marital,
      gender,
      showPanel,
      filterName,
      buttonType,
      filtersMap,
    } = this.state;

    return (
      <div style={searchContainerStyle}>
        {showPanel && (
          <FilterPanel
            filterName={filterName}
            title={nameMap[filterName]}
            filters={filtersMap[filterName]}
            selectedValue={this.state[filterName]}
            changeFilter={this.changeFilter}
          />
        )}
        <div style={firstLine}>
          <div style={textStyle}>我想在</div>
          <FilterButton
            title={city === null ? '地点' : city}
            type={buttonType}
            onClick={() => {
              this.openPanel('city')
            }}
          />
          <div style={textStyle}>寻找</div>
        </div>
        <div>
          <FilterButton
            title={generation === null ? '年代' : generation}
            type={buttonType}
            onClick={() => {
              this.openPanel('generation')
            }}
          />
          <FilterButton
            title={constellation === null ? '星座' : constellation}
            type={buttonType}
            onClick={() => {
              this.openPanel('constellation')
            }}
          />
        </div>
        <div>
          <FilterButton
            title={character === null ? '性格' : character}
            type={buttonType}
            onClick={() => {
              this.openPanel('character')
            }}
          />
          <FilterButton
            title={pets === null ? '宠物' : pets}
            type={buttonType}
            onClick={() => {
              this.openPanel('pets')
            }}
          />
        </div>
        <div>
          <div style={textStyle}>职业是</div>
          <FilterButton
            title={occupation === null ? '职业' : occupation}
            type={buttonType}
            onClick={() => {
              this.openPanel('occupation')
            }}
          />
        </div>
        <div>
          <div style={textStyle}>喜欢</div>
          <FilterButton
            title={hobby === null ? '爱好' : hobby}
            type={buttonType}
            onClick={() => {
              this.openPanel('hobby')
            }}
          />
        </div>
        <div>
          <div style={textStyle}>是</div>
          <FilterButton
            title={marital === null ? '婚姻状况' : marital}
            type={buttonType}
            onClick={() => {
              this.openPanel('marital')
            }}
          />
          <div style={textStyle}>的</div>
        </div>
        <div>
          <FilterButton
            title={gender === null ? '性别' : gender}
            type={buttonType}
            onClick={() => {
              this.openPanel('gender')
            }}
          />
          <div style={textStyle}>房东</div>
        </div>
        <div>
          <img alt="refreshicon" style={icon1} src={refreshImg}/>
          <button style={btn1} onClick={this.randomChoose}>换一批随机填充</button>
        </div>
        <div>
          <div className={"btn2"} onClick={this.search}>
            <div style={btn2}>寻找房东</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchContainer;
