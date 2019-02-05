
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PortfolioList.css';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';



class PortfolioList extends Component {

    render() {
        return (
            <Grid item lg={3}>
                <Card id="project-card">
                    {/* {JSON.stringify(this.props.results.thumbnail)} */}
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            alt='test'
                            id='card-media'
                            image={this.props.results.thumbnail} // this is where the project image will go
                            title={this.props.results.name}
                        />
                        <CardContent>
                            <Typography id='project-name' variant='h6' >
                                {this.props.results.title}
                                {/* this is where the project title will go */}
                            </Typography>
                            <Typography id='project-description' component="p">
                                {this.props.results.description}
                                {/* this is where the project description will go */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {/* link will eventually be {this.props.results.github} */}
                        <Link target='_blank' rel='noopener noreferrer' href={this.props.results.github} variant='contained'>
                            <Button size="small" color="primary" id='github-btn'>
                                Github
                            </Button>
                        </Link>
                        {/* link will eventually be {this.props.results.website} */}
                        <Link target='_blank' rel='noopener noreferrer' href={this.props.results.website} variant='contained'>
                            <Button size="small" color="primary" id='website-btn'>
                                Website
                            </Button>
                        </Link>
                        <Tooltip title='The main technology used'>
                            <Chip

                                label={this.props.results.name}
                                variant='outlined'
                                id='tag-chip'
                            />
                        </Tooltip>
                    </CardActions>

                </Card>
            </Grid >
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(PortfolioList);


