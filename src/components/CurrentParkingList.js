import React from 'react';
import {CurrentParkingElement} from './CurrentParking';
import { Color } from './Color';

const style=({
    width:400,
    background: Color.grey,
    minHeight:1000,
    textAlign:'left',
});

const labelStyle=({
    marginLeft:10,
    fontSize:20,
});
export class CurrentParkingList extends React.Component {
    render(){
        var elements=this.props.elements;
        var obj=JSON.parse(elements);
        const ElementList= obj.map((element) => (
                    <CurrentParkingElement startTime={element.startTime} cost={element.cost} carRegistrationNumber={element.carRegistrationNumber}/>
                ));
            return <div style={style}>
            <span style={labelStyle}>Aktualnie zaparkowane auta: </span>
            {ElementList}
            </div>;
    }
}