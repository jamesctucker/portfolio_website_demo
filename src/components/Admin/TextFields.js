import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


import './Admin.css';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    descriptionField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },

});

const tag = [
    {
        value: 1,
        label: 'React',
    },
    {
        value: 2,
        label: 'jQuery',
    },
    {
        value: 3,
        label: 'Node',
    },
    {
        value: 4,
        label: 'SQL',
    },
    {
        value: 5,
        label: 'Redux',
    },
    {
        value: 6,
        label: 'HTML',
    },
];

class TextFields extends Component {
    state = {
        name: 'Project Name',
        date: 'Date (YYYY/MM/DD)',
        tag: '',
        github: 'GitHub URL',
        website: 'Website URL (Optional)',
        description: 'Description',
    };

    handleNameChange = event => {
        this.setState({
            name: event.target.value,
        });
    };

    handleDateChange = event => {
        this.setState({
            date: event.target.value,
        });
    };

    handleTagChange = event => {
        this.setState({
            tag: event.target.value,
        });
    };

    handleGitHubChange = event => {
        this.setState({
            github: event.target.value,
        });
    };

    handleWebsiteChange = event => {
        this.setState({
            website: event.target.value,
        });
    };

    handleDescriptionChange = event => {
        this.setState({
            description: event.target.value,
        });
    };

    handleAddProject = event => {
        event.preventDefault();
        const action = ({ type: 'ADD_PROJECT', payload: this.state });
        this.props.dispatch(action);
        alert('You have successfully added a project!');
        this.setState({
            name: 'Project Name',
            date: 'Date (YYYY/MM/DD)',
            github: 'GitHub URL',
            tag: '',
            website: 'Website URL (Optional)',
            description: 'Description',
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper id='text-paper' elevation={3}>
                <Typography id='form-title' variant='h6'>
                    Add A Project
                    </Typography>
                <form id='input-form' className={classes.container} noValidate autoComplete="off">

                    <TextField
                        required
                        id="outlined-name"
                        label="Required"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-date"
                        label="Required"
                        className={classes.textField}
                        value={this.state.date}
                        onChange={this.handleDateChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-name"
                        select
                        label="Select a tag"
                        className={classes.textField}
                        value={this.state.tag}
                        onChange={this.handleTagChange}
                        variant='outlined'
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your tag"
                        margin="normal"
                    >
                        {tag.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>



                    <TextField
                        required
                        id="outlined-github"
                        label="Required"
                        className={classes.textField}
                        value={this.state.github}
                        onChange={this.handleGitHubChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-website"
                        label="Website URL (Optional)"
                        className={classes.textField}
                        value={this.state.website}
                        onChange={this.handleWebsiteChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-description"
                        label="Required"
                        className={classes.descriptionField}
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button className={classes.button} id='submit-btn'
                        onClick={this.handleAddProject} variant='contained'>Submit</Button>

                </form>
            </Paper>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(withStyles(styles)(TextFields));
