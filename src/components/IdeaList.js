import React from 'react';
import Idea from './Idea';
import Sort from './Sort';
import Search from './Search';

const IdeaList = (props) => {
  
        const ideas = props.ideas.map(idea =>
            <Idea
                key={idea.id}
                id={idea.id}
                title={idea.title}
                project={idea.project}
                onFormSubmit={props.onFormSubmit}
                onFormDelete={props.onFormDelete}
            />
        )
        return (
            <div>
                <Search onSearch={props.onSearch} />
                <Sort onSortTitle={props.onSortTitle} onSortProject={props.onSortProject} />
                {ideas}
            </div>
        );
  
}
export default IdeaList;