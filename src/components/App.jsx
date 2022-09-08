import { Profile } from './Profile';
import { Statistics } from './Statistics';

import user from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
 return (
  <div
   style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101',
   }}
  >
   <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
   />
   <Statistics stats={data} />
  </div>
 );
};
