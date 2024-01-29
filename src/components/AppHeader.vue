<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>
    <header>
        <ul>
            <li> 
                <RouterLink :to="{name:'home'}">Home</RouterLink> 
            </li>
            <li> 
                <RouterLink :to="{name:'StartHerePage'}">Start Here</RouterLink> 
            </li>
            <li> 
                <RouterLink :to="{name:'CustomerPage'}">Customer</RouterLink> 
            </li>
            <li> 
                <RouterLink :to="{name:'not-found'}">Errore</RouterLink> 
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
</style>
