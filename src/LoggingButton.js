import React from "react";
class LoggingButton extends React.Component {
    //undefined
    // handleClick(){
    //     console.log('this is ',this)
    // }

    handleClick = ()=>{
        console.log('this is ',this)
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Click Me
            </button>
        )
    }
}
export default LoggingButton;
