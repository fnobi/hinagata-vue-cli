<template lang="pug">
.home
    vue-logo
    p あなたのポイント: {{ point }}pt
    p: router-link(:to="{ name: 'about' }") about
</template>

<script>
import VueLogo from "@/components/VueLogo";

export default {
    name: "home",
    components: {
        VueLogo
    },
    data: () => ({
        point: 0
    }),
    mounted() {
        const el = document.getElementById("vue-reference");
        const data = JSON.parse(el.innerHTML);
        this.point = data.point;
    }
};
</script>

<style lang="scss" scoped>
.home {
    text-align: center;
    p {
        margin-top: 1em;
    }
}
</style>
