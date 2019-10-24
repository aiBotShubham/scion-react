import React, { Component } from "react";
import { Tree } from "../tree/tree.component";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      noOfBranches: 2,
      paths: [
        {
          key: 1,
          node: "Html",
          leafs: [
            { topic: "topic1", link: "https://www.google.com/" },
            { topic: "topic1", link: "link1" },
            { topic: "topic1", link: "link1" }
          ]
        },
        {
          key: 2,
          node: "Css",
          leafs: [
            { topic: "topic1", link: "link1" },
            { topic: "topic1", link: "link1" },
            { topic: "topic1", link: "link1" }
          ]
        }
      ]
    };
    this.onAddlink = this.onAddlink.bind(this);
    this.addBranch = this.addBranch.bind(this);
  }
  onAddlink = (key) => {
    let topic = prompt("pls tell me topic");
    let link = prompt("link pls");
    let newState = this.state;
    newState.paths[key - 1].leafs.push({
      topic: topic,
      link: link
    });
    //console.log("hello",id,key,newTopic,newLink);

    this.setState({ users: newState.users });
  };
  addBranch = () => {
    let node = prompt("node name");
    let newState = this.state;
    newState.noOfBranches += 1;
    newState.paths.push({
      key: newState.noOfBranches,
      node: node,
      leafs: []
    });
    this.setState({ users: newState.users });
  };
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h1>Users</h1>
        <p>{params.id}</p>
        <Tree
          branches={this.state.paths}
          add={this.onAddlink}
          id={1}
        />
        <button onClick={e => this.addBranch(e)}>
          Add Branch
        </button>
      </div>
    );
  }
}
export default User;
