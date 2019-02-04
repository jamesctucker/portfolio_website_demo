import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ImageAvatar from './../Portfolio/ImageAvatar';
import Typography from '@material-ui/core/Typography';
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
                <Divider variant='middle' />
                <Typography align='center' variant='h6'>
                    About James
                </Typography>
                <br />
                <Typography align='center' variant='body1'>
                    James loves whiskey.
                </Typography>
                <Divider variant='middle' />

            </div>
        );

        // const fullList = (
        //     <div className={classes.fullList}>
        //         <List>
        //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        //                 <ListItem button key={text}>
        //                     {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
        //                     <ListItemText primary={text} />
        //                 </ListItem>
        //             ))}
        //         </List>
        //         <Divider />
        //         <List>
        //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
        //                 <ListItem button key={text}>
        //                     {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
        //                     <ListItemText primary={text} />
        //                 </ListItem>
        //             ))}
        //         </List>
        //     </div>
        // );

        return (
            <div>
                <Button variant='contained' onClick={this.toggleDrawer('right', true)}>About Me</Button>
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
