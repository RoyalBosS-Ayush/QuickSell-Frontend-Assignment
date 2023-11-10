import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import { GET_TICKETS_URL } from './constants';
import { loadGrid, mapUsersByUserId } from './utils';
import { Ticket, User } from './interfaces';
import Loader from './components/Loader';

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [userData, setUserData] = useState<Record<string, User>>({});
  const [gridData, setGridData] = useState<Record<string, Ticket[]>>({});
  const [grouping, setGrouping] = useState<string>("status");
  const [ordering, setOrdering] = useState<string>("priority");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(GET_TICKETS_URL).then(resp => resp.json()).then(res => {
      const { tickets, users } = res;
      setTickets(tickets);
      setUserData(mapUsersByUserId(users));
    }).catch(err => { });
  }, [])

  useEffect(() => {
    setGridData(loadGrid(tickets, grouping, ordering));
    setLoading(false);
  }, [grouping, ordering, tickets])

  const onSetGrouping = useCallback((value: string) => {
    setLoading(true);
    setGrouping(value);
  }, []);

  const onSetOrdering = useCallback((value: string) => {
    setLoading(true);
    setOrdering(value);
  }, []);

  return (
    <div className="App">
      <Header grouping={grouping} setGrouping={onSetGrouping} ordering={ordering} setOrdering={onSetOrdering} />
      {loading ? <Loader /> :
        <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />
      }
    </div>
  );
}

export default App;
