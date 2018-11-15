<template lang="pug">
.home
    vue-logo
    p あなたのポイント: {{ point }}pt
    form(v-if="formAction" :action="formAction")
        p
            | 名前:
            input(:name="formNameField")
        p
            input(type="submit" value="名前を送信")
</template>

<script>
import VueLogo from "@/components/VueLogo";

export default {
    name: "home",
    components: {
        VueLogo
    },
    data: () => ({
        point: 0,
        formAction: null,
        formNameField: null
    }),
    mounted() {
        const el = document.getElementById("vue-reference");
        const data = JSON.parse(el.innerHTML);
        this.point = data.point;
        this.formAction = data.formAction;
        this.formNameField = data.formNameField;
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
