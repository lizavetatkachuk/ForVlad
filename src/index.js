import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './Title'
import Clock from './Clock'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'React Clock'
        }
    }
    render() {
        return (
            <div className="root">
                <Title title={this.state.title}/>
                <Clock />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

