import React from 'react';
class Title extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            title: this.props.title
    }
    }
    render()
    {
        return(
        <div className="title">
            <h1 >{this.state.title}</h1>
        </div>
        );
    }
}
export default Title;