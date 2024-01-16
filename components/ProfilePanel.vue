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
  &__button {
    font-family: "Rubik";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 14px;
    border: 1px solid $black;
    background-color: $white;
    border-radius: 40px;
    width: 207px;
    cursor: pointer;
  }
}
</style>
