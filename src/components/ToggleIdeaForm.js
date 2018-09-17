import React from 'react';
import IdeaForm from './IdeaForm';

class ToggleIdeaForm extends React.Component {
    state = {
        isOpen: false,
    };
    handleFormOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    onFormClose = () => {
        this.setState({
            isOpen: false
        })
    }
    handleFormSubmit = (idea, id) => {
        this.props.onFormSubmit(idea, id);
        this.setState({ isOpen: false });
    };
    render() {
        if (this.state.isOpen) {
            return (
                <IdeaForm onFormSubmit={this.handleFormSubmit} onFormClose={this.onFormClose} />
            );
        } else {
            return (
                <div className='content'>
                    <button className='button toggle_btn'
                        onClick={this.handleFormOpen}
                    >
                        Toggle
                </button>
                </div>
            );
        }
    }
}
export default ToggleIdeaForm;