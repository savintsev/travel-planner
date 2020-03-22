<template lang="pug">
    footer.footer
        p &copy; 2020

</template>

<script>
export default {
    name: 'FooterComponent'
};
</script>

<style lang="scss">
.footer {
    margin: 0;
    padding: 1em;
    background: #6b95e0;
    color: #fff;

    & > p {
        font-size: 0.875em;
    }
}
</style>
