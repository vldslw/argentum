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
  margin: 0 0 14px;
  padding: 14px;
  border: 1px solid #1f1f1f;
  color: #fff;
  background-color: #1f1f1f;
  border-radius: 40px;
  width: 207px;
  cursor: pointer;
}
</style>
