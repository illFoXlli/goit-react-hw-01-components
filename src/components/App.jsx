import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
 return (
  <div
   style={{
    height: '100vh',
    display: 'flex',
    gap: 20,
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
   <FriendList friends={friends} />
   <TransactionHistory items={transactions} />
  </div>
 );
};
