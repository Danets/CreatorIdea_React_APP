import React from 'react';

const Sort = (props) => {
        return (
            <div className='buttons'>
                <button className='button'
                    onClick={props.onSortTitle}
                >
                    Sort on title
                    </button>
                <button className='button'
                onClick={props.onSortProject}
                >
                    Sort on project
            </button>
            </div>
        );
}
export default Sort;