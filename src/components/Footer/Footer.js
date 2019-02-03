import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <footer id='app-footer'>
                <div id='footer-container'>
                    <h1 id='footer-text'>footer</h1>
                </div>
            </footer>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(Footer);