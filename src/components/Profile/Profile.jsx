import React from 'react';
import PropTypes from 'prop-types'
import css from './Profile.module.css';

const Profile = ({avatar, username, tag, location, stats}) => {
    return (
<div className={css.profile}>
   <div className={css.description}>
    <img
      src={avatar}
      alt={avatar}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className={css.label}>followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    );
};

Profile.propTypes = {
avatar: PropTypes.string.isRequired,
username: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
stats: PropTypes.object.isRequired,
}

export default Profile;

