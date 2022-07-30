import {
    defineStore
} from 'pinia'
import axios from 'axios'
import qs from 'qs'
import {
    apiURL
} from '@/composables/useEnv.js'


export const useServices = defineStore('useServices', {
    state: () => {
        return {
            services: null,
            service: null
        }
    },
    actions: {
        async getServices() {
            try {
                const query = qs.stringify({
                    fields: ['title', 'subtitle', 'slug']
                })
                const res = await axios.get(`${apiURL}/api/services?${query}`)
                this.services = res.data.data

            } catch (error) {
                console.log(error.message);
            }

        },
        async getOneService(id) {
            try {
                const query = qs.stringify({
                    populate: {
                        cover: {
                            populate: "*"
                        },
                        projects: {
                            populate: "*",
                        },
                        stages: "*"
                    },

                })
                const res = await axios.get(`${apiURL}/api/services/${id}?${query}`)
                this.service = res.data.data
                console.log(this.service);

            } catch (error) {
                console.log(error.message);
            }

        },
    }
})