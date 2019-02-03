import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioList from './PortfolioList';
import Header from './../Header/Header';
import './PortfolioPage.css';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class PortfolioPage extends Component {
    // component dispatches an action that requests projects from database
    componentDidMount() {
        this.getProjects();
    }


    getProjects = () => {
        const action = { type: 'FETCH_PROJECTS' };
        this.props.dispatch(action);
    }


    render() {
        return (
            <div>
                <Header />
                <Paper id='project-paper' elevation={3}>
                    <Grid container spacing={8}>
                        {this.props.reduxStore.projects.map((results, i) => (
                            <PortfolioList key={i} results={results} />
                        ))}
                    </Grid>
                </Paper>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(PortfolioPage);