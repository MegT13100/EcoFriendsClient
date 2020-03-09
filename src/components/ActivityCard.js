import React from 'react';

class ActivityCard extends React.Component {
    render() {
        const { title, description, score } = this.props.activity;
        return (
            <tr>
                <td>{title}</td>
                <td>{description}</td>
                <td>{score}</td>
            </tr>
        )
    }
}

export default ActivityCard;