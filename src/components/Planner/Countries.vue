<template lang="pug">
    .countries
        h2.countries__title Countries

        .countries__container

            ul.countries__list(@click='clickOnList')

                li.countries__item(
                    v-for='countryItem in countries',
                    :key='countryItem.code'
                    )

                    img.countries__flag(
                        :src='require("@/assets/flags/" + countryItem.code.toLowerCase() + ".svg")',
                        alt='flag',
                        width='32',
                        loading='lazy'
                        )

                    h3.countries__name {{countryItem.name}}

                    button.countries__button(
                        type='button',
                        data-type='start',
                        :data-code='countryItem.code',
                        :disabled='isStartSet'
                        ) Start

                    button.countries__button(
                        type='button',
                        data-type='medium',
                        :data-code='countryItem.code',
                        :disabled='!isStartSet || isEndSet || isInRoute(countryItem.code)'
                        ) Medium

                    button.countries__button(
                        type='button',
                        data-type='end',
                        :data-code='countryItem.code',
                        :disabled='!isStartSet || isEndSet || isInRoute(countryItem.code)'
                        ) End

</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    name: 'Countries',

    computed: {
        ...mapState(['countries', 'route']),

        isStartSet() {
            return this.route.length > 0 ? true : false;
        },

        isEndSet() {
            const lastRoute = this.route[this.route.length - 1];
            return lastRoute && lastRoute.end;
        }
    },

    methods: {
        ...mapActions(['setStart', 'setMedium', 'setEnd']),

        clickOnList(e) {
            const target = e.target;

            if (target.tagName === 'BUTTON' && target.dataset.type && target.dataset.code) {
                if (target.dataset.type === 'start') {
                    this.setStart(target.dataset.code);
                }

                if (target.dataset.type === 'medium') {
                    this.setMedium(target.dataset.code);
                }

                if (target.dataset.type === 'end') {
                    this.setEnd(target.dataset.code);
                }
            }
        },

        isInRoute(code) {
            const countryIndex = this.route.findIndex(item => item.code === code);
            return countryIndex === -1 ? false : true;
        }
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

    @media (max-width: 768px) {
        flex-grow: 1;
    }

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
        flex-wrap: wrap;
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
