import React from "react";
function FormattedDate(props){
    return <h2>现在是{props.date.toLocaleTimeString()}</h2>
}
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date:new Date()};
    }

    render() {
        return (
            <div>
                <h1>hello,world</h1>
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date:new Date()
        })
    }


}
export default Clock;
