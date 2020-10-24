import logo from './../../../assets/toolbar-image.jpg';
import './logo.css';

function Logo () {
    return (
        <img src={logo} height="50px" width="50px" className="Logo" alt="logo"/>
    );
}

export default Logo;