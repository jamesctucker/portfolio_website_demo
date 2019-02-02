import React, { Component } from 'react';
import { connect } from 'react-redux';

class PortfolioPage extends Component {
    // component dispatches an action that requests projects from database
    componentDidMount() {
        this.getProjects();
    }


    getProjects = () => {
        const action = { type: 'FETCH_PROJECTS' };
        this.props.dispatch(action);
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(PortfolioPage);