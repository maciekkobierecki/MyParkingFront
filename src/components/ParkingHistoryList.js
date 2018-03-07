import React from 'react';
import {ParkingHistoryElement} from './ParkingHistoryElement';
import { Color } from './Color';

const style=({
    width:400,
    background: Color.grey,
    minHeight:1000,
    textAlign:'left',
    borderLeft:"1px dotted "+Color.orange
});

const labelStyle=({
    marginLeft:10,
    fontSize:20,
});
export class ParkingHistoryList extends React.Component {
    render(){
        var elements=this.props.elements;
        var obj=JSON.parse(elements);
        const ElementList= obj.map((element) => (
                    <ParkingHistoryElement startTime={element.startTime} endTime={element.endTime} cost={element.cost} carRegistrationNumber={element.carRegistrationNumber}/>
                ));
            return <div style={style}>
            <span style={labelStyle}>Historia parkowania: </span>
            {ElementList}
            </div>;
    }
}