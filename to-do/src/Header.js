import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div
            className="header"
            id="header">
                <h1 className="title" id="title">doStuff</h1>
                <p className="subtitle" id="subtitle">get your shit together.</p>
            </div>
        )
    }
}

export default Header;