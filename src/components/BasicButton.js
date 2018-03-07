import React from 'react';
import PropTypes from 'prop-types';
import {Color} from './Color';

const style=({
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    textAlign:'center',
});

const onHoverStyle=({
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    textAlign:'center',
    background:Color.orange,
    cursor: 'pointer',
});

export class BasicButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hovered:false,
        }
        this.handleMouseEnter=this.handleMouseEnter.bind(this);
        this.handleMouseLeave=this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(){
        this.setState({ hovered:true});
    }

    handleMouseLeave(){
        this.setState({hovered:false});
    }

    render(){
        const currentStyle = this.state.hovered ? onHoverStyle : style;
        return <div style={currentStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            {this.props.label}
        </div>;
    }
}

BasicButton.PropTypes = {
    label: PropTypes.string.isRequired
};