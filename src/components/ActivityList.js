import React from 'react';
import ActivityCard from './ActivityCard';

const ActivityList = props => {
    const headers = props.headers.map(header => {
        const { title, id } = header;
        return (
            <th key={id} header={header}>{title}</th>
        );
    });

    const activities = props.activities.map(activity => {
        return <ActivityCard key={activity.activityId} activity={activity} />
    });

    return (
        <div className="ui container">
            <h1 id='name'>Activity Table</h1>
            <table className="ui celled table" id='activities'>
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {activities}
                </tbody>
            </table>
        </div>
    )
};

export default ActivityList;