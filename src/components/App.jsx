import React from 'react';


import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'grid',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   // color: '#010101'
      // }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
      <Statistics 
      key={data.id} 
      title="Upload stats" 
      stats={data}
      />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};
