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
        <Grid>

        </Grid>


        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(PortfolioPage);