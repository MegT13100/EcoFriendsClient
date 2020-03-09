import React from 'react';
import axios from 'axios';
import ActivityList from './ActivityList';

class App extends React.Component {
    state = {
        activites: [],
        headers: []
    };

    componentDidMount() {
        axios.get('http://localhost:10001/api/activities')
            .then(response => {
                const activites = response.data;
                this.setState({
                    headers: [
                        { id: 2, title: "Title" },
                        { id: 3, title: "Description" },
                        { id: 4, title: "Score" }
                    ],
                    activites: activites
                });
            })
    }

    render() {
        return (
            <div className="ui component">
                <ActivityList onChange={this.getData} activities={this.state.activites} headers={this.state.headers} />
            </div>
        );
    }
}
export default App;