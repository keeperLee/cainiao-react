import React from "react";
class Link extends React.Component {
    render(){
        return (
            <a href={this.props.site}>{this.props.site}</a>
        )
    }
}
export default Link;
