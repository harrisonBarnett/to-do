import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div
            className="header"
            id="header">
                <div className="title-container">
                    <h1 className="title" id="title">doStuff</h1>
                    <p className="subtitle" id="subtitle">get your shit together</p>
                </div>
            </div>
        )
    }
}

export default Header;