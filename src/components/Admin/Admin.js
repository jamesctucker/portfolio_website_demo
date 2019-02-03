import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
    render() {
        return (
            <div>
                <header>
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