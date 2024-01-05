<template>
  <div class="register">
    <h1 class="register__title">Create a new account</h1>
    <form @submit.prevent="handleFormSubmit" class="register__form">
      <input
        v-model="form.email"
        type="email"
        name="email"
        id="email"
        class="register__input"
        placeholder="Choose email"
        required
      />
      <input
        v-model="form.password"
        type="password"
        name="password"
        id="password"
        class="register__input"
        placeholder="Choose password"
        required
      />
      <input
        v-model="form.firstName"
        type="text"
        name="firstName"
        id="firstName"
        class="register__input"
        placeholder="First name"
        required
      />
      <input
        v-model="form.lastName"
        type="text"
        name="lastName"
        id="lastName"
        class="register__input"
        placeholder="Last name"
        required
      />
      <button
        :disabled="isLoading"
        type="submit"
        class="register__button"
        :class="{
          register__button_disabled: isLoading,
        }"
      >
        Create account
      </button>
    </form>
  </div>
</template>

<script setup>
const form = ref({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
});

const isLoading = ref(false);

async function handleFormSubmit() {
  console.log(form.value);

  try {
    isLoading.value = true;
    await useFetch("/api/auth/register", {
      method: "POST",
      body: form.value,
    });

    useRouter().push({
      name: "index",
    });
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  &__form {
    display: flex;
    flex-direction: column;
    max-width: 452px;
  }
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
    align-self: flex-end;
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
