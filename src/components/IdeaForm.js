import React from 'react';

class IdeaForm extends React.Component {
    state = {
        id: this.props.id || '',
        title: this.props.title || '',
        project: this.props.project || '',
        errors: {}
    };
    handleTitleValue = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleProjectValue = (e) => {
        this.setState({
            project: e.target.value
        })
    }

    handleSubmit = (e) => {
        const errors = this.validate(this.state.title, this.state.project);
        this.setState({errors});
        if (Object.keys(errors).length) return;
        this.props.onFormSubmit({
            id: this.state.id,
            title: this.state.title,
            project: this.state.project,
        });
    };

/*VALIDATION*/
    validate = (title, project) => {
        const errors = {};
        if (!title) errors.title = 'Title Required';
        if (!project) errors.project = 'Project Required';
        return errors;
    }

    render() {
        const btnText = this.props.id ? 'Update' : 'Create'
        return (
            <div className='form'>
                <div className='field'>
                    <label>Title</label>
                    <input className='form-control' onChange={this.handleTitleValue} type='text' value={this.state.title} />
                    <p style={{color: 'red'}} className='error'>{this.state.errors.title}</p>
                </div>
                <div className='field'>
                    <label>Project</label>
                    <input className='form-control' type='text' onChange={this.handleProjectValue} value={this.state.project} />
                    <p style={{color: 'red'}} className='error'>{this.state.errors.project}</p>
                </div>
                <div className='buttons'>
                    <button className='button'
                        onClick={this.handleSubmit}
                    >
                        {btnText}
                    </button>
                    <button className='button'
                        onClick={this.props.onFormClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}
export default IdeaForm;