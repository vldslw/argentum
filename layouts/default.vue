<template>
  <div class="content">
    <header class="header">
      <nav class="header__nav">
        <NuxtLink class="logo logo_type_header" to="/">Argentum</NuxtLink>
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

    <footer class="footer">
      <NuxtLink class="logo logo_type_footer" to="/">Argentum</NuxtLink>
      <p class="footer__text footer__text_type_copyright">
        &copy; Vladislav Pavlov
      </p>
      <h2 class="footer__title footer__title_type_about">About</h2>
      <p class="footer__text footer__text_type_about">
        This is not a real shop, you can browse the collection and make fake
        orders, but you cannot actually buy anything.
      </p>
      <h2 class="footer__title footer__title_type_contacts">Contacts</h2>
      <ul class="footer__list">
        <li class="footer__list-item">
          <a href="https://t.me/vldslw" class="footer__link" target="_blank">
            <Icon name="ic:baseline-telegram" class="footer__icon"></Icon>
            <span class="footer__text footer__text_type_list">Telegram</span>
          </a>
        </li>
        <li class="footer__list-item">
          <a
            href="https://github.com/vldslw"
            class="footer__link"
            target="_blank"
          >
            <Icon name="mdi:github" class="footer__icon"></Icon>
            <span class="footer__text footer__text_type_list">GitHub</span>
          </a>
        </li>
        <li class="footer__list-item">
          <a
            href="https://www.linkedin.com/in/vldslw/"
            class="footer__link"
            target="_blank"
          >
            <Icon name="mdi:linkedin" class="footer__icon"></Icon>
            <span class="footer__text footer__text_type_list">LinkedIn</span>
          </a>
        </li>
        <li class="footer__list-item">
          <a
            href="https://www.instagram.com/vladislavpavlov.foto"
            class="footer__link"
            target="_blank"
          >
            <Icon name="mdi:instagram" class="footer__icon"></Icon>
            <span class="footer__text footer__text_type_list">Instagram</span>
          </a>
        </li>
      </ul>
    </footer>
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
.content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.logo {
  font-family: "Rubik";
  font-size: 29px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-decoration: none;
  &_type {
    &_header {
      color: $black;
    }
    &_footer {
      color: $white;
      grid-area: logo;
    }
  }
}
.header {
  padding: 50px 76px;
  &__nav {
    display: flex;
    justify-content: space-between;
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

.footer {
  margin-top: auto;
  color: $white;
  background-color: $black;
  padding: 50px 76px;
  display: grid;
  grid-template-columns: 4fr 2fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "logo about-title contacts-title"
    "copy  about-text links";
  column-gap: 100px;
  row-gap: 32px;
  &__title {
    margin: 0;
    padding: 0;
    font-family: "Rubik";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &_type {
      &_about {
        grid-area: about-title;
      }
      &_contacts {
        grid-area: contacts-title;
      }
    }
  }
  &__text {
    margin: 0;
    padding: 0;
    font-family: "Rubik";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &_type {
      &_about {
        grid-area: about-text;
      }
      &_list {
        margin: 0 0 0 10px;
        line-height: 20px;
      }
      &_copyright {
        grid-area: copy;
        align-self: end;
      }
    }
  }
  &__list {
    grid-area: links;
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-rows: auto;
    row-gap: 4px;
  }
  &__link {
    margin: 0;
    color: $white;
    text-decoration: none;
    display: flex;
  }
  &__icon {
    width: 20px;
    height: 20px;
  }
}
</style>
