import React from 'react'
import Logo from './logo/logo'
import './toolbar.css'
import Name from './name/name'

function Toolbar() {
    return (
        <div className="Toolbar">
            <Name />
            <Logo />
        </div>
        
    );
}

export default Toolbar;