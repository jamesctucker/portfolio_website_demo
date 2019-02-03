import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
    avatar: {
        margin: 20,
    },
    bigAvatar: {
        margin: 20,
        width: 150,
        height: 150,
    },
};

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <Grid container justify="center" alignItems="center">
            <Avatar alt="James Tucker" src="./../images/headshot.jpeg" className={classes.bigAvatar} />
        </Grid>
    );
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
