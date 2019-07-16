/**
 * ContentDetail Presenter
 */

import React from 'react';
import { Container } from '../../Components';
import { Title } from '../../Components';
const ContentDetailPresenter = props => {
  return (
    <Container>
      <Title text={props.post.title}>{props.post.body}</Title>
      {/* <h1>ContentDetailPresenter</h1> */}
    </Container>
  );
};

export default ContentDetailPresenter;
