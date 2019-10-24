import React from "react";

export const Branch = props => (
  <div>
    {props.node}
    <ul>
      {props.leaf.map(leaf => {
        let link_url = leaf.link
        return (
          <li>
            <a href={link_url}>{leaf.topic}</a>
          </li>
        );
      })}
    </ul>
    <button
      onClick={e => props.add(props.id, props.keyPar, "newTopic", "newLink", e)}
    >
      addLink
    </button>
  </div>
);
