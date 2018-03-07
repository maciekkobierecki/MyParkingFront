import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CurrentParkingList } from './components/CurrentParkingList';
import { TopBar } from './components/TopBar';
import {ParkingHistoryList} from './components/ParkingHistoryList';

const currentParkingMock="[{\"cost\": \"1.30zł\",\"startTime\": \"14:30\", \"carRegistrationNumber\": \"WSC 1234\"},{\"cost\": \"1.30zł\",\"startTime\": \"14:30\", \"carRegistrationNumber\": \"WSC 12345\"}]";
const parkingHistoryMock="[{\"cost\": \"1.30zł\",\"startTime\": \"14:30\",\"endTime\": \"15:30\", \"carRegistrationNumber\": \"WSC 1234\"},{\"cost\": \"1.30zł\",\"startTime\": \"14:30\",\"endTime\": \"16:30\", \"carRegistrationNumber\": \"WSC 12345\"}]";

const contentStyle={
  display:'flex',
  width:800,
  marginLeft:'auto',
  marginRight:'auto',
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar label="My Parking" />
        <div style={contentStyle}>
        <CurrentParkingList elements={currentParkingMock}/>
        <ParkingHistoryList elements={parkingHistoryMock}/>
        </div>
      </div>
    );
  }
}

export default App;
