<template>
  <div class="content">
    <header class="header">
      <nav class="header__nav">
        <NuxtLink class="header__logo" to="/">Argentum</NuxtLink>
        <Icon
          @click="openProfile"
          class="header__profile"
          :class="{ header__profile_state_active: isProfileOpen }"
          :name="
            loggedIn
              ? 'material-symbols-light:person'
              : 'material-symbols-light:person-outline'
          "
        ></Icon>
      </nav>
    </header>
    <slot />

    <footer class="footer"></footer>
    <Popup v-if="isProfileOpen">
      <ProfilePanel v-if="loggedIn" />
      <LoginPanel v-else />
    </Popup>
  </div>
</template>

<script>
export default {
  setup() {
    const { status } = useAuth();
    const loggedIn = computed(() => status.value === "authenticated");
    return {
      loggedIn,
    };
  },
  data() {
    return {
      isProfileOpen: false,
    };
  },
  methods: {
    openProfile() {
      this.isProfileOpen = !this.isProfileOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 50px 76px;
  &__nav {
    display: flex;
    justify-content: space-between;
  }
  &__logo {
    color: $black;
    font-family: "Rubik";
    font-size: 29px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    text-decoration: none;
  }
  &__profile {
    cursor: pointer;
    height: 36px;
    width: 36px;
    border: 1.5px solid;
    border-color: $white;
    border-radius: 24px;
    &_state {
      &_active {
        border-color: $black;
      }
    }
  }
}
</style>
