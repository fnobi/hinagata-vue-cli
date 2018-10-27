<template lang="pug">
.about
    p: router-link(:to="{ name: 'home' }") home
    p about
</template>

<script>
export default {
    name: "about"
};
</script>

<style lang="scss" scoped>
.about {
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
