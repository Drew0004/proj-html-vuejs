<script>
import HeroSection from '../components/HomePage-components/HeroSection.vue';
import OnlineCourseSection from '../components/HomePage-components/OnlineCourseSection.vue';
export default {
    data() {
        return {
            smartTutoring:[
                {
                    image:'../../public/course-portal/images/home-2-image-box-01.png',
                    title: 'Customize Preferences',
                    description:'Leaners are given the right to arrange and customize their study schedule and timetable based on preferences.',
                    link: 'Start here',

                },
                {
                    image:'../../public/course-portal/images/about-us-02-image-box-02.png',
                    title: 'Cloud Storage',
                    description:'You can store online lessons via online cloud or download to your device and revise lessons on the way.',
                    link: 'Get Free Quote',

                },
                {
                    image:'../../public/course-portal/images/home-2-image-box-03.png',
                    title: 'Multimedia Channels',
                    description:'We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.',
                    link: 'Start now',

                }
            ],
        };
    },
    methods: {

    },
    components:{
        HeroSection,
        OnlineCourseSection,
    }
}
</script>

<template>
    <main>
        <HeroSection/>

        <OnlineCourseSection/>
        <!---- Smart tutoring section ---->
        <section class="smart-tutoring-section py-5">
            <div class="container">
                <h4 class="text-center fs-6 mb-3">Maxcoack Available Courses</h4>
                <h2 class="text-center fw-bold mb-5">Access <span class="fw-light text-highlight">Smart Tutoring</span> Program For benefits.</h2>

                <div class="row">
                    <div class="tutoring-card" v-for="(singleTutoring, i) in smartTutoring">
                        <div>
                            <img :src="singleTutoring.image" :alt="singleTutoring.title">
                        </div>
                        <h3 class="fw-semibold my-4">{{ singleTutoring.title }}</h3>
                        <p class="mb-4">{{ singleTutoring.description }}</p>
                        <a class="fw-semibold" href="#nogo">{{ singleTutoring.link }} <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <!-- YT video section -->
        <section class="yt-video-section py-5">
            <div class="container">
                
                <div class="row justify-content-between position-relative">
                    
                    <div class="col-6 p-0 z-1">
                        <router-link :to="{ name: 'YtVideo'}">
                            <div class="yt-vid-container rounded-3">
                                <img class="w-100 yt-vid-img" src="../../public/course-portal/images/home-2-popup-video-poster.jpg" alt="Yt vid">
                                <img class="yt-logo" src="../../public/course-portal/images/icon-youtube-play.png" alt="Yt logo">
                            </div>
                        </router-link>
                    </div>
                    
                    <div class="col-5 d-flex flex-wrap align-items-center">
                        <div>
                            <h4 class="fw-light fs-6 mb-3">Get started <span class="fw-semibold">effortlessly</span></h4>
                            <h2 class="fw-bold mb-4">Enjoy Our <span class="fw-light">Companionship</span></h2>
                            <p class="fw-light fs-6 mb-5">
                                Sneek peek into what has in store for you on our online
                                teaching and mentoring portal. Seek for some hidden hints
                                of early-bird rewards as well.
                            </p>
                            <a class="fw-bold" href="#nogo">Download free guidebook <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    
                    <div class="pattern-section">
                            <div class="pattern-1">
                                <img class="w-100" src="../../public/course-portal/cloudcolor.svg" alt="Pattern 1">
                            </div>
                            <div class="pattern-2">
                            </div>
                            <div class="pattern-3">
                            </div>
                            <div class="pink-circle"></div>
                    </div>
                
                </div>
            </div>
        </section>

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
    
    .smart-tutoring-section{
        .text-highlight{
            color: $main-green-color;
        }
        h2{
            color: $main-purple-color;
        }

        .tutoring-card{
            width: calc((100% / 3) - 40px);
            margin: 0 20px;
            cursor: pointer;

            h3{
                color: $main-purple-color;
            }
            p{
                color: $main-gray-color;
            }
            a{
                text-decoration: none;
                color: $main-indigo-color;
                transition: 0.2s ease-in;

                &:hover{
                    color: $main-green-color;
                }
            }

        }
    }

    .yt-video-section{

        .yt-vid-container{
            width: 100%;
            object-fit: cover;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            
            &:hover .yt-vid-img{
                transition: 1s ease-in-out;
                scale: 1.1;
            }
            
            .yt-logo{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        h4{
            text-transform: uppercase;
            color: $main-indigo-color;

            span{
                text-transform: uppercase;
                color: $main-purple-color;
            }
        }

        h2{
            color: $main-purple-color;
            font-size: 3rem;

            span{
                color: $main-green-color;
            }
        }

        p{
            color: $main-gray-color;
            line-height: 1.8rem;
        }

        a{
            text-decoration: none;
            color: $main-green-color;
            border-bottom: 0.5px solid $main-gray-color;
        }

        .pattern-section{
            .pattern-1 {
                width: 150px;
                height: 150px;
                position: absolute;
                left: -50px;
                top: -50px;
            }

            .pattern-2{
                width: 200px;
                height: 200px;
                background-image: url('../../public/course-portal/images/maxcoach-shape-07.png');
                background-repeat: no-repeat;
                position: absolute;
                bottom: -80px;
                left: 550px;
            }

            .pattern-3{
                width: 300px;
                height: 300px;
                background-image: url('../../public/course-portal/images/maxcoach-shape-05.png');
                background-repeat:no-repeat;
                position: absolute;
                top: -10px;
                left: -50px;
            }

            .pink-circle{
                width: 80px;
                height: 80px;
                border-radius: 50%;
                border: 8px solid #ECC5AB;
                background-color: none;
                position: absolute;
                top: 0px;
                right: 550px;
            }

        }

    }

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
