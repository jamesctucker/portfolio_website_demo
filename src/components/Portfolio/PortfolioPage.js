import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioList from './PortfolioList';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
            <Paper id='results-paper' elevation={3}>
                <Grid container spacing={24}>
                    {this.props.reduxStore.projects.map((results, i) => (
                        <PortfolioList key={i} results={results} />
                    ))}
                </Grid>
            </Paper>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(PortfolioPage);