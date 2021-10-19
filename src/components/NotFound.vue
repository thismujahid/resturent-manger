<template>
  <div class="container">
    <div class="inner">
      <p>404</p>
      <p>
        Page You Looking For Not Found Back To
        <router-link to="/">Home?</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.inner {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.inner p:first-child {
  font-size: 4rem;
}
.inner p:last-child a {
  color: #fff;
  background-color: var(--main-color);
  padding: 5px;
  text-decoration: none;
  border-radius: 5px;
}
</style>