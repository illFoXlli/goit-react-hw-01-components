import PropTypes from 'prop-types';
import classNames from 'classnames';
import foxAvatarImg from './foxAvatar.png';

import style from './Profile.module.css';

export function Profile(props) {
 const { username, tag, location, avatar, followers, views, likes } = props;
 return (
  <div className={style.boxContainer}>
   <div className={style.boxItem}>
    <div className={style.flipBox}>
     <div className={classNames(style.flipBoxFront, style.textCenter)}>
      <div className={classNames(style.inner, style.colorWhite)}>
       <img src={avatar} alt="" className={style.flipBoxImg} />
       <h3 className={style.flipBoxHeader}>{username}</h3>
       <p>{tag}</p>
       <p>{location}</p>
       <ul className={style.stats}>
        <li className={style.list}>
         <span className={style.label}>Followers</span>
         <span className={style.quantity}>{followers}</span>
        </li>
        <li className={style.list}>
         <span className={style.label}>Views</span>
         <span className={style.quantity}>{views}</span>
        </li>
        <li className={style.list}>
         <span className={style.label}>Likes</span>
         <span className={style.quantity}>{likes}</span>
        </li>
       </ul>
      </div>
     </div>
     <div className={classNames(style.flipBoxBack, style.textCenter)}>
      <div className={classNames(style.inner, style.colorWhite)}>
       <img src={foxAvatarImg} alt="" className={style.flipBoxImg} />
       <h3 className={style.flipBoxHeader}>Rud Denis</h3>
       <p>Development</p>
       <p>Ukraine from Kharkov</p>
       <ul className={style.stats}>
        <li className={style.list}>
         <span className={style.label}>Followers</span>
         <span className={style.quantity}>ထ</span>
        </li>
        <li className={style.list}>
         <span className={style.label}>Views</span>
         <span className={style.quantity}>ထ</span>
        </li>
        <li className={style.list}>
         <span className={style.label}>Likes</span>
         <span className={style.quantity}>ထ</span>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

Profile.propTypes = {
 username: PropTypes.string.isRequired,
 tag: PropTypes.string.isRequired,
 location: PropTypes.string.isRequired,
 avatar: PropTypes.string.isRequired,
 stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
