<template>
  <div class="profile">
    <button @click="handleSignOut" class="profile__button">Log Out</button>
  </div>
</template>

<script setup>
const { signOut } = useAuth();

async function handleSignOut() {
  await signOut();
}
</script>

<style lang="scss" scoped>
.profile {
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
  }
}
</style>
