import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Route } from 'react-router-dom';
import { Container } from '../Components';

export default props => {
  console.log('PROPS : ', props.match);
  console.log('PROPS : ', window.location);

  return (
    <Container sidebar>
      <Helmet>
        <title>Main : 게시판</title>
      </Helmet>
      <h1>Main</h1>
      <ul>
        <li>
          <Link to={`/router-test/1`}>Post #1</Link>
        </li>
        <li>
          <Link to={`/router-test/2`}>Post #2</Link>
        </li>
        <li>
          <Link to={`/router-test/3`}>Post #3</Link>
        </li>
        <li>
          <Link to={`/router-test/4`}>Post #4</Link>
        </li>
      </ul>
      <Route
        exact
        path={props.match.url}
        render={() => <h3>Please select any post</h3>}
      />
      <Route
        path={`${props.match.url}/:id`}
        component={() => (
          <h1>
            {props.match.url}
            {window.location.href}
          </h1>
        )}
      />
    </Container>
  );
};
