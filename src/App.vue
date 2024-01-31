<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';

export default {
    data() {
        return {

        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {

    },
    mounted(){
        // axios.get()
        // .then();
        console.log('this.$route.path: ', this.$route.path)
    }
}
</script>

<template>
    <div v-if="$route.path === '/OffcanvaVid'">

        <router-view name="video"></router-view>
    </div>
    <div v-else>
        <AppHeader />
    
        <AppMain />
    
        <AppFooter />
    </div>

</template>

<style lang="scss">
@use "assets/scss/partials/reset" as *;
@use "assets/scss/main" as *;
</style>
