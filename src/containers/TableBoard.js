import React, { Component } from 'react';
import IdeaList from '../components/IdeaList';
import ToggleIdeaForm from '../components/ToggleIdeaForm';
import uuid from 'uuid';
import _ from 'lodash';

class TableBoard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ideas: [
                {
                    id: uuid.v4(),
                    title: 'Learn React',
                    project: 'Web Developing SPA'
                },
                {
                    id: uuid.v4(),
                    title: 'Redux',
                    project: 'Web Developing SPA with FLUX'
                },
                {
                    id: uuid.v4(),
                    title: 'Learn Lodash',
                    project: 'Make Life of developer easy'
                },
                {
                    id: uuid.v4(),
                    title: 'Node.js',
                    project: 'Server side store'
                },
                {
                    id: uuid.v4(),
                    title: 'Angular',
                    project: 'The best framework'
                }
            ]
        };
    }
    
    handleCreateFormSubmit = (idea) => {
        this.setState({
            ideas: [
                ...this.state.ideas,
                { id: uuid.v4(), title: idea.title, project: idea.project }
            ]
        });
    }

    handleEditFormSubmit = (inputVal) => {
        this.setState({
            ideas: this.state.ideas.map((idea) => {
                if (idea.id === inputVal.id) {
                    return {
                        ...idea,
                        title: inputVal.title,
                        project: inputVal.project,
                    }
                } else {
                    return idea;
                }
            })
        })
     }
    handleDeleteFormSubmit = (ideaId) => {
        this.setState({
            ideas: this.state.ideas.filter((idea) => {
                return idea.id !== ideaId
            })
        })
    }
    /*SORTING*/
    handleSortByTitle = () => {
        this.setState({
            ideas: _.sortBy(this.state.ideas, ['title'])
        })
    }
    handleSortByProject = () => {
        this.setState({
            ideas: _.sortBy(this.state.ideas, ['project'])
        })
    }
    /*FILTER*/
    handleSearch = e => {
        const value = e.target.value.toLowerCase();
        this.setState({
            ideas: this.state.ideas.filter(idea => {
                return idea.title.toLowerCase().includes(value);
            })
        })
    };


    render() {
        return (
            <div className='column'>
                <IdeaList
                    ideas={this.state.ideas}
                    onFormSubmit={this.handleEditFormSubmit}
                    onFormDelete={this.handleDeleteFormSubmit}
                    onSortTitle={this.handleSortByTitle}
                    onSortProject={this.handleSortByProject}
                    onSearch={this.handleSearch}
                />
                <ToggleIdeaForm
                    isOpen={false}
                    onFormSubmit={this.handleCreateFormSubmit}
                />
            </div>
        );
    }
}

export default TableBoard;
