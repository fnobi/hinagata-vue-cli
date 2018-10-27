<template lang="pug">
.vue-logo
</template>

<style lang="scss" scoped>
.vue-logo {
  @include pc-layout {
    &:before {
      content: image-url("logo.png");
      display: block;
    }
  }  
}
</style>

<script>
export default {
  name: 'vue-logo',
};
</script>
