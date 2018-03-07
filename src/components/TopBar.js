import React from 'react';
import PropTypes from 'prop-types';
import {Color} from './Color';

const style=({
    height:40,
    background: Color.orange,
    color: Color.white,
    fontFamily: "Roboto",
    fontSize: 23,
    paddingTop:5,
});

export class TopBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div style={style}>
            {this.props.label}
        </div>;
    }
}

TopBar.PropTypes = {
    label: PropTypes.string.isRequired
};