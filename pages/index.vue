<template>
  <ProfilePanel v-if="loggedIn" />
  <LoginPanel v-else />
</template>

<script setup>
const { status } = useAuth();

const loggedIn = computed(() => status.value === "authenticated");
</script>

<style scoped></style>
