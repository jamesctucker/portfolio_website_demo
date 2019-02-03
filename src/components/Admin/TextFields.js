import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    // button: {
    //     width: 80,
    //     height: 50,
    //     marginLeft: theme.spacing.unit,
    //     marginRight: theme.spacing.unit,
    // }
});

const tag = [
    {
        value: 'React',
        label: 'React',
    },
    {
        value: 'jQuery',
        label: 'jQuery',
    },
    {
        value: 'Node',
        label: 'Node',
    },
    {
        value: 'SQL',
        label: 'SQL',
    },
    {
        value: 'Redux',
        label: 'Redux',
    },
    {
        value: 'HTML',
        label: 'HTML',
    },
];

class TextFields extends React.Component {
    state = {
        name: 'Project Name',
        date: 'Date (YYYY/MM/DD)',
        tag: 'Select a Tag',
        github: 'GitHub URL',
        website: 'Website URL (Optional)',
        description: 'Description',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    required
                    id="outlined-name"
                    label="Required"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-date"
                    label="Required"
                    className={classes.textField}
                    value={this.state.date}
                    onChange={this.handleChange('date')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-name"
                    select
                    label="Required"
                    className={classes.textField}
                    value={this.state.tag}
                    onChange={this.handleChange('tag')}
                    variant='outlined'
                    margin="normal"
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
                    onChange={this.handleChange('github')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-website"
                    label="Website URL (Optional)"
                    className={classes.textField}
                    value={this.state.website}
                    onChange={this.handleChange('website')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-description"
                    label="Required"
                    className={classes.descriptionField}
                    value={this.state.description}
                    onChange={this.handleChange('description')}
                    margin="normal"
                    variant="outlined"
                />
                <Button className={classes.button}
                    variant='contained'>Submit</Button>

            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
