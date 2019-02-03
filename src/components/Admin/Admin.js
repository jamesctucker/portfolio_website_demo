import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import Footer from './../Footer/Footer';
import TextFields from './../Admin/TextFields';
import Input from '@material-ui/core/Input';


class Admin extends Component {
    render() {
        return (
            <div>
                <header id='admin-header'>
                    <h1>Admin</h1>
                </header>
                <div>
                    <TextFields />
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(Admin);