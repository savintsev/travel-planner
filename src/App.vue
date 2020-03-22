<template lang="pug">
    main.main
        HeaderComponent

        Planner

        FooterComponent

</template>

<script>
export default {
    name: 'App',

    components: {
        HeaderComponent: () => import('@/components/HeaderComponent'),
        FooterComponent: () => import('@/components/FooterComponent'),
        Planner: () => import('@/components/Planner')
    }
};
</script>

<style lang="scss">
/* reduce motion */
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
    * {
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
    }
}

/* start animation when js loaded */
body.js-loading *,
body.js-loading *::before,
body.js-loading *::after {
    animation-play-state: paused !important;
}

/* main styles */
body {
    scroll-behavior: smooth;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    background: #fff;
    color: #4a77bf;
}

.main {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding-top: constant(safe-area-inset-top);
    padding-right: constant(safe-area-inset-right);
    padding-bottom: constant(safe-area-inset-bottom);
    padding-left: constant(safe-area-inset-left);
}
</style>
