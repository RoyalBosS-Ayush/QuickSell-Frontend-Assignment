import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import { GET_TICKETS_URL } from './constants';
import { groupTicketsByPriority, groupTicketsByStatus, groupTicketsByUserId, mapUsersByUserId } from './utils';
import { Ticket, User } from './interfaces';

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [userData, setUserData] = useState<Record<string, User>>({});
  const [gridData, setGridData] = useState<Record<string, Ticket[]>>({});

  useEffect(() => {
    fetch(GET_TICKETS_URL).then(resp => resp.json()).then(res => {
      const { tickets, users } = res;
      setTickets(tickets);
      setUserData(mapUsersByUserId(users));
      // setGridData(groupTicketsByStatus(tickets));
      // setGridData(groupTicketsByPriority(tickets));
      setGridData(groupTicketsByUserId(tickets));
    }).catch(err => { });
  }, [])

  return (
    <div className="App">
      <Header />
      {/* <Grid gridData={gridData} grouping={"status"} userIdToData={userData} /> */}
      {/* <Grid gridData={gridData} grouping={"priority"} userIdToData={userData} /> */}
      <Grid gridData={gridData} grouping={"user"} userIdToData={userData} />
    </div>
  );
}

export default App;
