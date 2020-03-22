<template lang="pug">
    .countries
        h2.countries__title Countries

        .countries__container

            ul.countries__list

                li.countries__item(
                    v-for='countryItem in countries',
                    :key='countryItem.code'
                    )

                    img.countries__flag(
                        :src='require("@/assets/flags/" + countryItem.code.toLowerCase() + ".svg")',
                        alt='',
                        width='32',
                        loading='lazy'
                        )

                    h3.countries__name {{countryItem.name}}

                    button.countries__button(type='button') Start
                    button.countries__button(type='button') Medium
                    button.countries__button(type='button') End

</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'Countries',

    computed: {
        ...mapState(['countries'])
    }
};
</script>

<style lang="scss">
.countries {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1em;
    background: #4a77bf;
    color: #fff;

    &__title {
        margin: 0 0 0.5em;
        font-size: 1em;
        font-weight: 700;
    }

    &__container {
        flex-grow: 1;
        position: relative;
        margin: 0;
    }

    &__list {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
    }

    &__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0;

        &:not(:last-child) {
            margin-bottom: 1em;
        }
    }

    &__flag {
        margin: 0 0.5em 0 0;
    }

    &__name {
        flex-grow: 1;
    }

    &__button {
        margin: 0 0 0 0.5em;
        padding: 3.5px 1em 4.5px;
        border: 2px solid #fff;
        border-radius: 1.07em;
        font-weight: 500;
        font-size: 0.875em;
        line-height: 1.3;
        background: #4a77bf;
        color: #fff;

        &:hover,
        &:focus,
        &:active {
            background: #fff;
            color: #4a77bf;
        }

        &[disabled] {
            opacity: 0.5;
            pointer-events: none;
        }
    }
}
</style>
