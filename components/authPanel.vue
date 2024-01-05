<template>
  <div class="auth">
    <button class="auth__button auth__button_github">
      Sign in with GitHub
    </button>
    <button class="auth__button">Log Out</button>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 325px;

  &__button {
    margin: 0 0 14px;
    padding: 14px;
    border: 1px solid #1f1f1f;
    background-color: #fff;
    border-radius: 40px;
    width: 207px;
    cursor: pointer;
    &_github {
      color: #fff;
      background-color: #1f1f1f;
    }
  }
}
</style>
