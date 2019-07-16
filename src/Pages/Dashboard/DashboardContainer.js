/**
 *
 */

import React, { Component } from 'react';
import DashboardPresenter from './DashboardPresenter';
import { PostApi } from '../../api';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this._handleGetPosts();
  }

  /**
   * RENDER
   */
  render() {
    return <DashboardPresenter {...this.state} {...this.props} />;
  }

  /**
   *
   */
  _handleGetPosts = async () => {
    const posts = await PostApi.posts();
    this.setState({ posts });
  };
}

export default DashboardContainer;
