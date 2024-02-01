<template>
  <div class="not-found-container">
    ⚠️404 - Page not found!
  </div>
  <div class="home-label">
    <router-link to="/" class="link">
      Home
    </router-link>
  </div>
</template>

<style scoped>
.link {
  color: rgb(0, 17, 255);
  font-size: 12px;
  font-weight: 500;
}

.link:hover {
  color: rgba(79, 91, 255, 0.781);
  font-weight: 700;
}

.home-label {
  margin-top: 10px;
}
.not-found-container {
  padding: 10px;
  background: white;
  border-radius: 20px;
  font-weight: 700;
  box-shadow: 1px 0px 20px 0px #959595;
}
</style>