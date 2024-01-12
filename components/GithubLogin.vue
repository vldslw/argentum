<template>
  <button @click="($event) => signIn('github')" class="button">
    Sign in with GitHub
  </button>
</template>

<script setup>
const { signIn } = useAuth();
</script>

<style lang="scss" scoped>
.button {
  font-family: "Rubik";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0 0 14px;
  padding: 14px;
  border: 1px solid $black;
  color: $white;
  background-color: $black;
  border-radius: 40px;
  width: 207px;
  cursor: pointer;
}
</style>
