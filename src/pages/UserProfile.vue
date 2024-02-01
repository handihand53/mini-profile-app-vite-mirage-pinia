<template>
  <div class="mini-profile-card">
    <div>
      <img class="profile-picture" :src="user.image" alt="">
    </div>
    <div class="user-greeting">
      Hi, {{ user.name }}
    </div>
    <div class="job-title" v-html="user.title"/>
    <button class="detail-button" @click="openDetailProfile()">
      Detail
    </button>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {}
    }
  },
  methods: {
    openDetailProfile () {
      this.$router.push('/detail')
    },
    fetchUserData () {
      fetch(`/api/user`, {
        method: 'GET',
      })
      .then((res) => res.json())
      .then((body) => {
        this.user = body.data
      })
    }
  },
  created () {
    this.fetchUserData()
  }
}
</script>

<style scoped>
.detail-button {
  margin-top: 15px;
}

.user-greeting {
  margin-top: 10px;
  font-weight: 700;
}

.job-title {
  font-size: 14px;
}

.mini-profile-card {
  border-radius: 15px;
  background-color: #f9f7ff;
  width: 400px;
  padding: 75px 10px;
  border: 1px #fff solid;
  box-shadow: 1px 0px 20px 0px #959595;
}

.profile-picture {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  border-radius: 50%;
}
</style>