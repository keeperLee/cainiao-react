import React from "react";
// import Name from "./Name";
// import Link from "./Link";
class WebSite extends React.Component{

  constructor() {
    super();
    this.state = {
      name: "菜鸟教程",
      site: "https://www.runoob.com"
    }
  }
  render() {
    return (
        <div>
          <Name name={this.state.name}/>
          <Link site={this.state.site}/>
        </div>
    );
  }
}

class Name extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}


class Link extends React.Component {
    render(){
        return (
            <a href={this.props.site}>{this.props.site}</a>
        )
    }
}
export default WebSite;
