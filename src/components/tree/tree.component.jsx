import React from 'react';
import { Branch } from '../branch/branch.component';
export const Tree = props => (
    <div>
      {props.branches.map( branch => (
          <Branch leaf = {branch.leafs} add = {props.add} node = {branch.node} key = {branch.key} id = {props.id} keyPar = {branch.key}  />
      ))}
    </div>
  );
