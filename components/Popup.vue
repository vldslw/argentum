<template>
  <div class="popup">
    <div class="popup__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 139px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $popup-overlay;
  display: flex;
  justify-content: flex-end;
  &__inner {
    margin-top: 3px;
    margin-right: 52px;
    margin-bottom: auto;
    padding: 20px 33px;
    background-color: $white;
    border-radius: 8px;
    &::before {
      content: "";
      display: inline-block;
      right: 5.142857rem;
      bottom: 99%;
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent transparent $white;
      border-style: solid;
      border-width: 0 10px 13px;
      filter: drop-shadow(0px -5px 3px rgba(0, 0, 0, 0.1));
    }
  }
}
</style>
