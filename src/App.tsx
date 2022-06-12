import React from 'react';
import './App.css';

import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Calls from './Components/Calls/Calls';
import DatePicker from './Components/DatePicker/DatePicker';
import Filters from './Components/Filters/Filters';
import Balance from './Components/Balance/Balance';

function App() {
  return (<>
    <Sidebar/>
    <Header/>
    <DatePicker/>
    <Balance/>
    <Filters/>
    <Calls/>
    </>
  );
}

export default App;
