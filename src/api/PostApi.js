/**
 *
 */

import { backendUrl_dev } from '../Utils';

export default {
  /**
   * 게시글 조회
   */
  posts: async () => {
    try {
      const url = `${backendUrl_dev}/posts`;
      const resp = await fetch(url);
      const respJson = await resp.json();
      return respJson;
    } catch (error) {
      return error;
    }
  },

  /**
   * 게시글 조회
   */
  post: async id => {
    try {
      const url = `${backendUrl_dev}/posts/${id}`;
      const resp = await fetch(url);
      const respJson = await resp.json();
      return respJson;
    } catch (error) {
      return error;
    }
  }
};
