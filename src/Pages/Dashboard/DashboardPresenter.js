/**
 * Dashboard Presenter
 */

import React from 'react';
import { Container } from '../../Components';
import { Title, ContentItem } from '../../Components';
import { Link } from 'react-router-dom';

const DashboardPresenter = props => {
  console.log('P : ', props);

  const items = props.posts.map(post => (
    <ContentItem key={post.id}>
      <Link to={`/contents/${post.id}`}>{JSON.stringify(post)}</Link>
    </ContentItem>
  ));

  return (
    <Container sidebar>
      <Title text="DashboardPresenter">description dashboard presenter</Title>
      {items}
    </Container>
  );
};

export default DashboardPresenter;
