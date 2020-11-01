import React from 'react';
import './logo.css';
import logo from './../../../assets/toolbar-image.jpg';

class Logo extends React.Component {
    render() {
        return (
            <img src={logo} height="50px" width="50px" className="Logo" alt="logo"/>
        );
    }

}

export default Logo;