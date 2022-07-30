import {defineStore} from 'pinia'
import axios from 'axios'
import qs from 'qs'
import {apiURL} from '@/composables/useEnv.js'


export const useBlog = defineStore('useBlog', {
  state: () => {
    return {
      articles: null,
      article: null
    }
  },
  actions: {
    async getArticles() {
      const query = qs.stringify({
        populate: '*'
      })
      const res = await axios.get(`${apiURL}/api/articles?${query}`)
      this.articles = res.data.data;
    },
    async getOneArticle(id) {
      const query = qs.stringify({
        populate: "*"
      })
      const res = await axios.get(`${apiURL}/api/articles/${id}?${query}`)
      this.article = res.data.data
    }
  }
})