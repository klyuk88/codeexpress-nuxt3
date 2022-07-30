import { defineStore } from 'pinia'
import axios from 'axios'
import qs from 'qs'
import {apiURL} from '@/composables/useEnv.js'

export const useReviews = defineStore('reviewsStore', {
  state: () => {
    return {
      reviews: null
    }
  },
  actions: {
    async getReviews() {
      try {
        const query = qs.stringify({
          populate: '*'
        })
        const res = await axios.get(`${apiURL}/api/reviews?${query}`)
        this.reviews = res.data.data
      } catch (error) {
        console.log(error.message);
      }
    }
  },
  getters: {

  }
})
