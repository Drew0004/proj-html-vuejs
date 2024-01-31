<script>
import * as bootstrap from 'bootstrap'
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
    <section class="yt-video-section py-5">
        <div class="container">
            
            <div class="row justify-content-between position-relative">
                
                <div class="col-6 p-0 z-1">
                    <router-link :to="{ name: 'YtVideo'}">
                        <div class="yt-vid-container rounded-3">
                            <img class="w-100 yt-vid-img" src="../../../public/course-portal/images/home-2-popup-video-poster.jpg" alt="Yt vid">
                            <img class="yt-logo" src="../../../public/course-portal/images/icon-youtube-play.png" alt="Yt logo">
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
                            <img class="w-100" src="../../../public/course-portal/cloudcolor.svg" alt="Pattern 1">
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
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;
.yt-video-section{

    .yt-vid-container{
        width: 100%;
        object-fit: cover;
        overflow: hidden;
        position: relative;
        cursor: pointer;

        .yt-vid-img{
            transition: 1s ease-in-out;
        }
        
        &:hover .yt-vid-img{
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
        border-bottom: 0.5px solid rgb(234, 234, 234);
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
</style>
