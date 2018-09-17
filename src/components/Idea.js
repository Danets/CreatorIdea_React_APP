import React from 'react';
import IdeaForm from './IdeaForm';
import IdeaView from './IdeaView';

class Idea extends React.Component {
    state = {
        editFormOpen: false
    };

    handleEditClick = () => {
        this.openForm();
    }

    handleFormClose = () => {
        this.closeForm();
    }

    handleSubmit = (idea, id) => {
        this.props.onFormSubmit(idea, id);
        this.closeForm();
    }

    /*helpers*/
    openForm = () => {
        this.setState({ editFormOpen: true })
    }

    closeForm = () => {
        this.setState({ editFormOpen: false })
    }

    render() {
        if (this.state.editFormOpen) {
            return (
                <IdeaForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            )
        } else {
            return (
                <IdeaView
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onEditClick={this.handleEditClick}
                    onDeleteClick={this.props.onFormDelete}
                />
            )
        }
    }
}
export default Idea;