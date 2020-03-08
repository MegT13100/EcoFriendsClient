import React from 'react';

class ActivityCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activites: [
                { id: 1, title: 'Recycling', description: 'Not trashing stuff' },
                { id: 2, title: 'CarPooling', description: 'Save gas and the planet' }
            ]
        }
    }

    renderTableData() {
        return this.state.activites.map((activity, index) => {
            const { title, description, id } = activity
            return (
                <tr key={id} style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid' }}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{description}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 id='name'>Activity Table</h1>
                <table className="ui celled structured table" style={{ width: "100%" }} id='activities'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ActivityCard;