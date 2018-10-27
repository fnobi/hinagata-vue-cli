<template lang="pug">
.home
  vue-logo
  p home
  p: router-link(:to="{ name: 'about' }") about
</template>

<script>
import VueLogo from '@/components/VueLogo';

export default {
  name: "home",
  components: {
    VueLogo,
  }
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  p {
    display: inline-block;
    margin-right: 1em;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
