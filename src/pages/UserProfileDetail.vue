<template>
  <div class="mini-profile-card">
    <div class="about-me">
      About Me
    </div>
    <div class="description" v-html="user.about"/>
    <hr>
    <div class="skills-hobbies">
      <div class="skills-hobbies-container">
        <div class="sub-title">
          Skills
        </div>
        <div :key="skill.name" v-for="skill in user.skills">
          {{ skill.name }} - {{ skill.score }}/10
        </div>
      </div>
      <div class="skills-hobbies-container">
        <div class="sub-title">
          Hobbies
        </div>
        <div :key="hobby" v-for="hobby in user.hobbies">
          {{ hobby }}
        </div>
      </div>
    </div>
    <button class="detail-button" @click="openHome()">
      Back
    </button>
  </div>
</template>

<script>
export default {
  name: 'UserProfileDetail',
  data() {
    return {
      user: {}
    }
  },
  methods: {
    openHome () {
      this.$router.push('/')
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

.skills-hobbies-container {
  width: 50%;
}

.sub-title{
  font-weight: 700;
  font-size: 16px;
}

.skills-hobbies {
  display: flex;
  gap: 10px;
}

.about-me {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
}

.mini-profile-card {
  border-radius: 15px;
  background-color: #f9f7ff;
  width: 900px;
  padding: 75px 20px;
  border: 1px #fff solid;
  box-shadow: 1px 0px 20px 0px #959595;
}

.description {
  text-align: justify;
}
</style>