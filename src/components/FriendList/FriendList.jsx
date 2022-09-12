import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './FriendList.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function FriendList(props) {
  const { friends } = props;
  return (
    <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li
            key={id}
            className={style.item}
            style={{
              backgroundColor: getRandomHexColor() + '',
            }}
          >
            <span
              className={
                classNames(style.status, style[isOnline]) &&
                classNames(style.status, style[isOnline])
                //  ? classNames(style.status, style.statusOn)
                //  : classNames(style.status, style.statusOff)
              }
            ></span>
            <img
              className={style.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={style.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
