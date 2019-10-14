import React from 'react';
import { Link } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';

function World() {
  return (
    <div>
        world
    </div>
  );
}

function Hello({match}) {
  return (
    <div>
        hello <br/>
        <Link to={`${match.url}/world`}>{match.url}/world</Link>
    </div>
  );
}

export default function BasicExample({match}) {
  return (
    <div>
      <Link to={`${match.url}/hello`}>./hello</Link> <br/>
      <Link to={`${match.url}/hello/world`}>./hello/world</Link> <br/>
      <Link to={`${match.url}/crazy/world`}>./crazy/world</Link>
        
      <ModalRoute component={Hello} path={`${match.url}/hello`} parentPath='/basic' />
      <ModalRoute component={World} exact path={`*/world`} />
    </div>
  );
}