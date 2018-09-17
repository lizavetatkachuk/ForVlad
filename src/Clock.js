import React from 'react';
import Panel from'./Panel'
import Display from './Display'
class Clock extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            time: new Date(),
            isDateVisible: true
        };
        this.toggleDate = this.toggleDate.bind(this);
    }
    componentDidMount()
    {
        this.startTime();
    }
    startTime() {
        this.timer = setInterval(() => {
            this.setState(() => ({ time: new Date()}));
        }, 1000);
    }
    toggleDate() {
        this.setState((prevState) => ({ isDateVisible: !prevState.isDateVisible}));
    };
    render() {
        return (
            <div className="root">
                <Panel toggleDate={this.toggleDate} dateOn={this.state.isDateVisible} />
                <Display time={this.state.time} isDateVisible={this.state.isDateVisible} />
            </div>
        );
    }
}
export default Clock;