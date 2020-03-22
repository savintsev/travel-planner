<template lang="pug">
    .planner
        Route
        Countries

</template>

<script>
export default {
    name: 'Planner',

    components: {
        Route: () => import('@/components/Planner/Route'),
        Countries: () => import('@/components/Planner/Countries')
    }
};
</script>

<style lang="scss">
.planner {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    margin: 0;

    @media (max-width: 768px) {
        flex-direction: column;
    }
}
</style>
