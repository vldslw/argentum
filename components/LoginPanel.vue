<template>
  <div class="auth">
    <LoginForm />
    <!-- add github button later -->
    <!-- <p class="auth__text">OR</p>
    <GithubLogin  /> -->
    <p class="auth__text">NEW HERE?</p>
    <NuxtLink to="/register" class="auth__link">Create an Account</NuxtLink>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 325px;
  &__text {
    margin: 0 0 14px;
    font-family: "Rubik";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $black;
  }
  &__button {
    margin: 0 0 14px;
    padding: 14px;
    border: 1px solid #1f1f1f;
    background-color: $white;
    border-radius: 40px;
    width: 207px;
    cursor: pointer;
  }
  &__link {
    font-family: "Rubik";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    padding: 14px;
    border: 1px solid $highlight;
    color: $highlight;
    background-color: $white;
    border-radius: 40px;
    width: 207px;
    cursor: pointer;
  }
}
</style>
