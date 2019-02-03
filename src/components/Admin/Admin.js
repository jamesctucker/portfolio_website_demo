import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';

class Admin extends Component {
    render() {
        return (
            <div>
                <header id='admin-header'>
                    <h1>Admin</h1>
                </header>
                <p>This is the admin page.</p>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(Admin);