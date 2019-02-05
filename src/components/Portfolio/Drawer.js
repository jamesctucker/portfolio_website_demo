import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ImageAvatar from './../Portfolio/ImageAvatar';
import Typography from '@material-ui/core/Typography';
import './Drawer.css';
import { Face } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';




// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const styles = {
    list: {
        width: 250,
    },
};

class TemporaryDrawer extends React.Component {
    state = {
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.typography}>
                <ImageAvatar />
                <Card id='about-header'>
                    <Typography align='center' variant='h6'>
                        About James
                </Typography>
                </Card>
                <br />
                <Card id='about-body'>
                    <Typography inline='false' variant='body1'>
                        James is a software developer from Minnesota.
                        He likes to build cool things that make other people happy.
                        Sometimes he drinks a glass of Scotch from the Isle of Islay in honor of Ron Swanson.
                </Typography>
                </Card>
                <Link id='linkedin-btn' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/jtuckermn/'>
                    <Button variant='contained'>LinkedIn</Button>
                </Link>
            </div>
        );

        return (
            <div>
                <Tooltip title='Learn a little about James'>
                    <Button variant='contained' onClick={this.toggleDrawer('right', true)}><Face /></Button>
                </Tooltip>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
                <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
