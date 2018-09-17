import React from 'react';

class IdeaView extends React.Component {
    handleDeleteClick = () => {
        this.props.onDeleteClick(this.props.id)
    }
    render() {
    return (
        <div className='container'>
            <p>{this.props.title}</p>
            <p>{this.props.project}{'\uD83D\uDC2C'}</p>
            <span onClick={this.props.onEditClick} className="span_icon"><i className="far fa-edit"></i></span>
            <span onClick={this.handleDeleteClick} className="span_icon"><i className="fas fa-trash-alt"></i></span>
        </div>
    )
}  
}
export default IdeaView;