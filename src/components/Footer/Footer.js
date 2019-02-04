import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <footer id='app-footer'>
                <div id='footer-container'>
                    <p id='footer-text'>Copyright James C. Tucker 2019</p>
                </div>
            </footer>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(Footer);