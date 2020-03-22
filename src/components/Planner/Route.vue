<template lang="pug">
    .route
        h2.route__title Route

        .route__container

            p(v-if='route.length === 0') Select country to start

            ul.route__list(
                v-if='route.length > 0',
                @click='clickOnList'
                )

                li.route__item(
                    v-for='routeItem in route',
                    :key='routeItem.key',
                    :data-end='routeItem.end'
                    )

                    img.route__flag(
                        :src='require("@/assets/flags/" + routeItem.code.toLowerCase() + ".svg")',
                        alt='flag',
                        width='32',
                        loading='lazy'
                        )

                    h3.route__name {{routeItem.name}}

                    button.route__button(
                        type='button',
                        data-type='remove'
                        :data-code='routeItem.code'
                        ) Remove

        .route__footer(
            v-if='route.length > 0',
            )
            button.route__submit(
                type='button',
                @click='clickSubmit'
                ) Submit

</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    name: 'Route',

    computed: {
        ...mapState(['route'])
    },

    methods: {
        ...mapActions(['removeRoute']),

        clickOnList(e) {
            const target = e.target;

            if (target.tagName === 'BUTTON' && target.dataset.type && target.dataset.code) {
                if (target.dataset.type === 'remove') {
                    this.removeRoute(target.dataset.code);
                }
            }
        },

        clickSubmit() {
            console.log(`Send data: ${JSON.stringify(this.route)}`);
        }
    }
};
</script>

<style lang="scss">
.route {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1em;

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
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        margin: 0;

        &:not(:last-child) {
            margin-bottom: 1em;

            &::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 0.75em;
                transform: rotate(-45deg);
                width: 0.5em;
                height: 0.5em;
                margin: 0;
                border-left: 2px solid #4a77bf;
                border-bottom: 2px solid #4a77bf;
            }
        }

        &[data-end] {
            &::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 0.8em;
                width: 0.3em;
                height: 0.3em;
                margin: 0.05em 0 0;
                border: 0;
                border-radius: 50%;
                background: #4a77bf;
            }
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
        border: 2px solid #4a77bf;
        border-radius: 1.07em;
        font-weight: 500;
        font-size: 0.875em;
        line-height: 1.3;
        background: #fff;
        color: #4a77bf;

        &:hover,
        &:focus,
        &:active {
            background: #4a77bf;
            color: #fff;
        }

        &[disabled] {
            opacity: 0.5;
            pointer-events: none;
        }
    }

    &__footer {
        padding: 1em 0 0;
        text-align: right;
    }

    &__submit {
        margin: 0;
        padding: 3.5px 1em 4.5px;
        border: 2px solid #4a77bf;
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
