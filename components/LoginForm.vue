<template>
  <form class="login" @submit.prevent="handleLogin">
    <input
      v-model="form.email"
      type="email"
      name="email"
      id="email"
      class="login__input"
      placeholder="Email"
      required
    />
    <input
      v-model="form.password"
      type="password"
      name="password"
      id="password"
      class="login__input"
      placeholder="Password"
      required
    />
    <button type="submit" class="login__button">Login</button>
  </form>
</template>

<script setup>
const { signIn } = useAuth();

const form = ref({
  email: "",
  password: "",
});

async function handleLogin() {
  try {
    await signIn("credentials", form.value);
  } catch (e) {}
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  &__input {
    margin: 0 0 9px;
    padding: 9px 0 13px;
    outline: none;
    border: none;
    border-bottom: 1px solid #1f1f1f;
    &:last-of-type {
      margin: 0 0 42px;
    }
  }

  &__button {
    margin: 0 0 14px;
    padding: 14px;
    border: 1px solid #e32121;
    color: #fff;
    background-color: #e32121;
    border-radius: 40px;
    width: 207px;
    cursor: pointer;
  }
}
</style>
