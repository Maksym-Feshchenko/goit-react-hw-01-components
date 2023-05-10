import PropTypes from 'prop-types';
import React from 'react';
import css from './FriendList.module.css';

const FriendListItem = ({ friend }) => (
  <li className={css.item} key={friend.id}>
    <span className={friend.isOnline ? css.statusOnline : css.statusOfline}></span>
    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
    <p className={css.name}>{friend.name}</p>
  </li>
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

const FriendList = ({ friends }) => (
  <ul className={css.friend_list}>
    {friends.map(friend => (
    <FriendListItem friend={friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }),
    ),
  };

export default FriendList;