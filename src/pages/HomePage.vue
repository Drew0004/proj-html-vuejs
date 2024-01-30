<script>
import HeroSection from '../components/HomePage-components/HeroSection.vue';
import OnlineCourseSection from '../components/HomePage-components/OnlineCourseSection.vue';
import SmartTutoringSection from '../components/HomePage-components/SmartTutoringSection.vue'
import YtVideoSection from '../components/HomePage-components/YtVideoSection.vue'

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
        <!-- Slider section -->
        <section class="slider-section py-5">
            <div class="container">
                <div class="text-center">
                    <h4>Great Words About MaxCoach</h4>
                    <h2>Our <span>top learners'</span> verbatim</h2>
                </div>
            </div>
        </section>
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
    .slider-section{
        background-color: $main-softgray-color;

        h4{
            text-transform: uppercase;
            color: $main-indigo-color;
        }

        h2{
            color: $main-purple-color;

            span{
                color: $main-green-color;
            }
        }
    }
</style>
