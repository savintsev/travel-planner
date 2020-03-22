<template lang="pug">
    header.header
        h1.header__title Travel Planner

</template>

<script>
export default {
    name: 'HeaderComponent'
};
</script>

<style lang="scss">
.header {
    margin: 0;
    padding: 1em;
    background: #6b95e0;
    color: #fff;

    &__title {
        font-size: 2em;
    }
}
</style>
