import React from 'react';
import {CurrentParkingElement} from './CurrentParking';
import { Color } from './Color';

const style=({
    background:Color.white,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    borderRadius:5,
});

const costStyle=({
    marginLeft:10,
    fontSize:20,
    border: '1px solid'
});

const dateStyle=({
    marginLeft:10,
    border: '1px solid'
});

const registrationNumberStyle=({
    marginLeft:10,
    border: '1px solid'
});
export class ParkingHistoryElement extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div style={style}>
            <div style={dateStyle}>
                Data rozpoczęcia: {this.props.startTime} Data zakończenia: {this.props.endTime}
            </div>
            <span style={registrationNumberStyle}>
                Numer rejestracyjny:{this.props.carRegistrationNumber} 
            </span>
            <span style={costStyle}>
                Koszt: {this.props.cost}
            </span>          
        </div>;
    }
}