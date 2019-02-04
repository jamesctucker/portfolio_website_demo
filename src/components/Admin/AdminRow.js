import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class AdminRow extends Component {

    render() {
        return (
            <TableRow>
                <TableCell>{this.props.project.title}</TableCell>
            </TableRow>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(AdminRow);