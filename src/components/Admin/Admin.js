import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import Footer from './../Footer/Footer';
import AdminRow from './AdminRow';
import TextFields from './../Admin/TextFields';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Home } from '@material-ui/icons';



class Admin extends Component {

    componentDidMount = () => {
        this.getProjects();
    }

    getProjects = () => {
        const action = { type: 'FETCH_PROJECTS' };
        this.props.dispatch(action);
    }

    handleNavigate = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <header id='admin-header'>
                    <h1>Admin</h1>
                </header>
                <div>
                    <Button onClick={this.handleNavigate} variant='contained'><Home /></Button>
                    <TextFields />
                </div>
                <div>
                    <Paper id='admin-paper' elevation={3}>
                        <Typography variant='h6'>
                            Project List
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary={this.props.reduxStore.projects.map((project) => {
                                    return <AdminRow project={project} id={project.id} />
                                })} />
                            </ListItem>
                        </List>
                    </Paper>
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(Admin);