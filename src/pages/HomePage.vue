<script>
import HeroSection from '../components/HomePage-components/HeroSection.vue';
import OnlineCourseSection from '../components/HomePage-components/OnlineCourseSection.vue';
import SmartTutoringSection from '../components/HomePage-components/SmartTutoringSection.vue'
import YtVideoSection from '../components/HomePage-components/YtVideoSection.vue'
import SliderSection from '../components/HomePage-components/SliderSection.vue'

export default {
    data() {
        return {
        };
    },
    methods: {

    },
    components:{
        HeroSection,
        OnlineCourseSection,
        SmartTutoringSection,
        YtVideoSection,
        SliderSection,
    }
}
</script>

<template>
    <main>
        <HeroSection/>

        <OnlineCourseSection/>

        <SmartTutoringSection/>

        <YtVideoSection/>

        <div class="svg-container">
            <img class="svg-curve d-block" src="../../public/course-portal/curvecolor.svg" alt="">
        </div>
        <SliderSection/>

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as*;
    
    .svg-container{
        width: 100%;
        height: 300px;
        overflow: hidden;
        position: relative;

        .svg-curve{
            width: 200%;
            height: 100%;
            position: absolute;
            right: 0;
        }
    }
</style>
