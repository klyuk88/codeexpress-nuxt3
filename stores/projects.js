import {
    defineStore
} from 'pinia'
import axios from 'axios'
import qs from 'qs'
import {
    apiURL
} from '@/composables/useEnv.js'

export const useProjects = defineStore('projectsStore', {
    state: () => {
        return {
            projects: null,
            project: null,
            projectCategories: null
        }
    },
    actions: {
        async getProjects(options = {
            page: 1,
            pageSize: 3,
            filter: false
        }) {
            try {
                let filters;
                if (options.filter) {
                    filters = {
                        project_categories: {
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
                    pagination: {
                        page: options.page,
                        pageSize: options.pageSize
                    },
                    populate: "*"
                })
                const res = await axios.get(`${apiURL}/api/projects?${query}`)
                this.projects = res.data.data
            } catch (error) {
                console.log(error.message);
            }
        },
        async getProject(id) {
            const query = qs.stringify({
                populate: {
                    content: {
                        populate: {
                            image: {
                                fields: ['url']
                            },
                            text: {
                                fields: '*'
                            }
                        }
                    },
                    services: {
                        fields: ['title']
                    },
                    project_categories: {
                        fields: '*'
                    },
                    cover: {
                        fields: ['url']
                    },
                }
            })
            try {
                const res = await axios.get(`${apiURL}/api/projects/${id}?${query}`)
                this.project = res.data.data
            } catch (error) {
                console.log(error.message);
            }
        },
        async getCategoryProjects() {
            const query = qs.stringify({
                populate: ['projects']
            })
            try {
                const res = await axios.get(`${apiURL}/api/project-categories?${query}`)
                this.projectCategories = res.data.data.filter(elem => elem.attributes.projects.data.length > 0)
            } catch (error) {
                console.log(error.message);
            }
        }
    },
    getters: {

    }
})