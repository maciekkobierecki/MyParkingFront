import React from 'react';
import { Color } from './Color';
import { BasicButton } from './BasicButton';

const style=({
    background:Color.white,
    marginLeft:10,
    marginRight:10,
    fontSize:20,
    padding:10,
    borderRadius:5,
    marginBottom:10,
});

const costStyle={
    marginRight:10,
    textAlign:'right',
}

const registrationNumberStyle={
    padding:10,
}

const activeFromStyle={
    textAlign:'left',
    marginLeft:10,
}

const uiRegistrationAndCostStyle={
}

export class CurrentParkingElement extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div style={style}>
            <div style={activeFromStyle}>
                Aktywny od: {this.props.startTime}
            </div>    
            <div style={uiRegistrationAndCostStyle}>
                <div style={registrationNumberStyle}>
                    Numer rejestracyjny: {this.props.carRegistrationNumber}
                </div>
                <div style={costStyle} >
                    Koszt: {this.props.cost}
                </div>
             </div>
            <BasicButton label="Zakończ" />
            
        </div>;
    }
}