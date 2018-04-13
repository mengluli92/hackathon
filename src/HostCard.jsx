import PropTypes from 'prop-types';
import React from 'react';

import hostMask from './images/host-mask.png';
import viewProfileButton from './images/view-profile-button.svg';

const GUEST_NUMBER_RIGHT = 36;
const GUEST_NUMBER_TOP = 290;
const FIVE_STAR_LEFT = 258;
const HOST_AVATAR_TOP = 90;
const HOST_PANEL_LEFT = 44;
const HOST_PANEL_TOP = 378;
const HOST_PHOTO_SIZE = 268;
const LISTING_AND_FIVE_STAR_TOP = 60;
const LISTING_NUMBER_RIGHT = 270;
const PROFILE_URL_PREFIX = 'https://www.airbnbchina.cn/users/show/';
const VIEW_PROFILE_BUTTON_HEIGHT = 35;
const VIEW_PROFILE_BUTTON_WIDTH = 82;

const hostAvatarStyle = {
  height: HOST_PHOTO_SIZE,
  left: '50%',
  position: 'relative',
  textAlign: 'center',
  top: HOST_AVATAR_TOP,
  transform: 'translateX(-50%)',
  width: HOST_PHOTO_SIZE,
};
const hostMaskStyle = {
  height: HOST_PHOTO_SIZE,
  left: 0,
  position: 'absolute',
  top: 0,
  width: HOST_PHOTO_SIZE,
};
const hostPhotoStyle = {
  ...hostMaskStyle,
  objectFit: 'cover',
};

const listingNumberContainerStyle = {
  color: 'white',
  position: 'absolute',
  right: LISTING_NUMBER_RIGHT,
  textAlign: 'right',
  top: LISTING_AND_FIVE_STAR_TOP,
};
const listingNumberTitleStyle = {
  fontFamily: `PingFang SC`,
  fontSize: 12,
  fontWeight: 300,
};
const listingNumberStyle = {
  fontFamily: `Circular Air Pro`,
  fontSize: 40,
  fontWeight: 600,
};

const fiveStarContainerStyle = {
  color: 'white',
  position: 'absolute',
  left : FIVE_STAR_LEFT,
  textAlign: 'left',
  top: LISTING_AND_FIVE_STAR_TOP,
};
const fiveStarTitleStyle = {
  fontFamily: `PingFang SC`,
  fontSize: 12,
  fontWeight: 300,
};
const fiveStarNumberStyle = {
  fontFamily: `Circular Air Pro`,
  fontSize: 40,
  fontWeight: 600,
};

const guestNumberContainerStyle = {
  color: 'white',
  position: 'absolute',
  right : GUEST_NUMBER_RIGHT,
  textAlign: 'right',
  top: GUEST_NUMBER_TOP,
};
const guestNumberTitleStyle = {
  fontFamily: `PingFang SC`,
  fontSize: 12,
  fontWeight: 300,
};
const guestNumberStyle = {
  fontFamily: `Circular Air Pro`,
  fontSize: 60,
  fontWeight: 600,
};

const hostPanelStyle = {
  color: '#E1E9F1',
  fontFamily: `PingFang SC`,
  left: HOST_PANEL_LEFT,
  position: 'absolute',
  textAlign: 'left',
  top: HOST_PANEL_TOP,
};
const hostNameStyle = {
  fontSize: 24,
  fontWeight: 500,
  letterSpacing: 1,
  marginBottom: 4,
};
const hostTagStyle = {
  fontSize: 14,
  fontWeight: 300,
  letterSpacing: -0.91,
  marginTop: 4,
};

const viewProfileContainerStyle = {
  height: VIEW_PROFILE_BUTTON_HEIGHT,
  position: 'relative',
  textAlign: 'center',
  top: 20,
  width: VIEW_PROFILE_BUTTON_WIDTH,
};
const viewProfileBgStyle = {
  height: VIEW_PROFILE_BUTTON_HEIGHT,
  left: 0,
  position: 'absolute',
  top: 0,
  width: VIEW_PROFILE_BUTTON_WIDTH,
};
const viewProfileTextStyle = {
  color: 'white',
  fontFamily: `HanziPen SC`,
  fontSize: 14,
  height: VIEW_PROFILE_BUTTON_HEIGHT,
  left: 0,
  position: 'absolute',
  textAlign: 'center',
  width: VIEW_PROFILE_BUTTON_WIDTH,
};

const propTypes = {
  fiveStar: PropTypes.number,
  generation: PropTypes.string,
  guestNumber: PropTypes.number,
  hobby: PropTypes.string,
  id: PropTypes.string,
  listingNumber: PropTypes.number,
  name: PropTypes.string,
  occupation: PropTypes.string,
};

const defaultProps = {
  fiveStar: 100,
  generation: '00后',
  guestNumber: 103,
  hobby: '巧克力和草莓牛奶',
  id: '25971475',
  image: './images/host-avatar.jpg',
  listingNumber: 2,
  name: '陈立农',
  occupation: '爱豆',
};

function HostCard({
  fiveStar,
  generation,
  guestNumber,
  hobby,
  id: hostId,
  image: hostAvatar,
  listingNumber,
  name: hostName,
  occupation,
}) {
  const hobbyCopy = `喜欢${hobby}`;
  const profileUrl = PROFILE_URL_PREFIX + hostId;

  return (
    <div style={{ height: '100vh', position: 'relative', width: '100%' }}>
      <div style={hostAvatarStyle}>
        <img alt="hostPhoto" src={hostAvatar} style={hostPhotoStyle} />
        <img alt="hostMask" src={hostMask} style={hostMaskStyle} />
      </div>
      <div style={listingNumberContainerStyle}>
        <div style={listingNumberTitleStyle}> 拥有房源 </div>
        <div style={listingNumberStyle}>{listingNumber}</div>
      </div>
      <div style={fiveStarContainerStyle}>
        <div style={fiveStarTitleStyle}> 收到过五星好评 </div>
        <div style={fiveStarNumberStyle}>{fiveStar}</div>
      </div>
      <div style={guestNumberContainerStyle}>
        <div style={guestNumberTitleStyle}> 接待过房客 </div>
        <div style={guestNumberStyle}>{guestNumber}</div>
      </div>
      <div style={hostPanelStyle}>
        <div style={hostNameStyle}> {hostName} </div>
        <div style={hostTagStyle}>
          <span>{generation}</span>
          <span>{occupation}</span>
        </div>
        <div style={hostTagStyle}>{hobbyCopy}</div>
        <div style={viewProfileContainerStyle}>
          <img
            alt="viewProfileBg"
            src={viewProfileButton}
            style={viewProfileBgStyle}
          />
          <button
            onClick={() => window.open(profileUrl, '_blank')}
            style={viewProfileTextStyle}
          >
            查看主页
          </button>
        </div>
      </div>
    </div>
  );
}

HostCard.propTypes = propTypes;
HostCard.defaultProps = defaultProps;

export default HostCard;
