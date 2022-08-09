import {
    defineStore
} from 'pinia'
import axios from 'axios'
import qs from 'qs'
import {
    apiURL
} from '@/composables/useEnv.js'


export const useBlog = defineStore('useBlog', {
    state: () => {
        return {
            articles: null,
            article: null,
            articleCategories: null
        }
    },
    actions: {
        async getArticles(options = {
            page: 1,
            pageSize: 3,
            filter: false
        }) {
            let filters;
            if (options.filter) {
                filters = {
                    article_categories: {
                        slug: {
                            $eq: options.filter
                        }
                    }
                }
            } else {
                filters = {}
            }
            const query = qs.stringify({
                filters,
                populate: '*',
                pagination: {
                    page: options.page,
                    pageSize: options.pageSize
                },
            })
            try {
                const res = await axios.get(`${apiURL}/api/articles?${query}`)
                this.articles = res.data.data;
            } catch (error) {
                console.log(error.message);
            }

        },
        async getOneArticle(id) {
            const query = qs.stringify({
                populate: "*"
            })
            try {
                const res = await axios.get(`${apiURL}/api/articles/${id}?${query}`)
                this.article = res.data.data
            } catch (error) {
                console.log(error.message);
            }

        },
        async getArticlesCategories() {
          const query = qs.stringify({
            populate: ['articles']
          })
            try {
                const res = await axios.get(`${apiURL}/api/article-categories?${query}`)
                this.articleCategories = res.data.data.filter(elem => elem.attributes.articles.data.length > 0)
            } catch (error) {
                console.log(error.message);
            }


        }
    }
})