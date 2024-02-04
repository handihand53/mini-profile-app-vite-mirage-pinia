import { defineStore } from 'pinia'

export const useCommonUserStore = defineStore('commonUser', {
  state: () => ({
    user: {}
  }),
  actions: {
    getCurrentUser () {
      return fetch(`/api/user`, {
        method: 'GET',
      })
      .then((res) => res.json())
      .then((body) => {
        this.user = body.data
      })
    }
  }
})
