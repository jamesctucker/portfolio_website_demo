import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


class AdminRow extends Component {

    getProjects = () => {
        const action = { type: 'FETCH_PROJECTS' };
        this.props.dispatch(action);
    }

    deleteProject = () => {
        const action = ({ type: 'DELETE_PROJECT', payload: this.props.project});
        this.props.dispatch(action);
        this.getProjects();
    }

    render() {
        return (
            <TableRow>
                <TableCell>{this.props.project.title}</TableCell>
                <TableCell><Button onClick={this.deleteProject} variant="contained">Delete</Button></TableCell>
            </TableRow>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(AdminRow);