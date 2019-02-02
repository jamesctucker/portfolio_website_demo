
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class PortfolioList extends Component {

    render() {
        return (
            <Grid container spacing={24}>
                <Card className="project-card">
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            alt=''
                            className='card-media'
                            height='200'
                            image={this.props.results.thumbnail} // this is where the project image will go
                            title={this.props.results.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='h2'>
                                {this.props.results.name}
                                {/* this is where the project title will go */}
                            </Typography>
                            <Typography component="p">
                                {this.props.results.description}
                                {/* this is where the project description will go */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Github
                </Button>
                        <Button size="small" color="primary">
                            Website
                </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(PortfolioList);


