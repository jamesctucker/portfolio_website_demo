import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Delete } from '@material-ui/icons';
import swal from 'sweetalert';



class AdminRow extends Component {

    getProjects = () => {
        const action = { type: 'FETCH_PROJECTS' };
        this.props.dispatch(action);
    }

    deleteProject = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover your data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your data has been deleted forever!", {
                        icon: "success",
                    });
                } else {
                    swal("Your data is safe!");
                }
            });
        const action = ({ type: 'DELETE_PROJECT', payload: this.props.project });
        this.props.dispatch(action);
        this.getProjects();
    }

    render() {
        return (
            <TableRow>
                <TableCell>{this.props.project.title}</TableCell>
                <TableCell><Button onClick={this.deleteProject} variant="contained"><Delete color='secondary' /></Button></TableCell>
            </TableRow>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(AdminRow);