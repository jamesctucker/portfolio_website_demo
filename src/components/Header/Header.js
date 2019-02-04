import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from './../Portfolio/Drawer';


class Header extends Component {
    render() {
        return (
            <header id='app-header'>
                <div id='header-container'>
                    <h1 id='header-text'>James Tucker</h1><Drawer />
                </div>
            </header>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(Header);