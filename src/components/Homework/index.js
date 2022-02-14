import React from "react";
import logo from '../../assets/img/test-image.png';

class Homework extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.text}</p>
                <img src={logo} alt="test image" />
            </div>
        );
    }
}

export default Homework;