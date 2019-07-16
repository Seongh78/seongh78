/**
 *
 */

import React, { Component } from 'react';
import ContentDetailPresenter from './ContentDetailPresenter';
import { PostApi } from '../../api';
import { Loading } from '../../Components';

class ContentDetailContainer extends Component {
  state = {
    loading: true,
    post: {}
  };

  /**
   *
   */
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log('AAAA : ', id);

    this._handleGetPost(id);
  }

  /**
   * RENDER
   */
  render() {
    if (this.state.loading) return <Loading />;
    return <ContentDetailPresenter {...this.state} {...this.props} />;
  }

  /**
   *
   */
  _handleToggleLoading = () => {
    setTimeout(() => {
      this.setState(prev => ({ loading: !prev.loading }));
    }, 1000);
  };

  /**
   *
   */
  _handleGetPost = async id => {
    const post = await PostApi.post(id);
    this.setState({ post }, () => {
      this._handleToggleLoading();
    });
  };
}

export default ContentDetailContainer;
