<script>
export default {
    data() {
        return {
            clientLogos:[
                {
                    path: '../../public/course-portal/images/client-logo-01.png'
                },
                {
                    path: '../../public/course-portal/images/client-logo-02.png'
                },
                {
                    path: '../../public/course-portal/images/client-logo-03.png'
                },
                {
                    path: '../../public/course-portal/images/client-logo-04.png'
                },
                {
                    path: '../../public/course-portal/images/client-logo-05.png'
                },
                {
                    path: '../../public/course-portal/images/client-logo-06.png'
                },
            ]
        };
    },
    methods: {

    }
}
</script>

<template>

    <section class="hero-section">
        <div class="container">

            <div class="row g-0 align-items-center pt-5">
                <!---- Sezione testi  ---->
                <div class="col-4 p-3">
                    <h1 class="fw-bold fs-1 mb-3">Distant learning for further expansion</h1>
                    <p class="fw-light mb-5">
                        Learning is a life-long journey that in fact we 
                        never find the terminate stop. Stop searching,
                        enjoy the process.
                    </p>

                    <button class="py-3 px-5 rounded-3 mb-3">
                        <a class="fw-bold" href="#nogo"> <i class="fa-solid fa-download me-2 fs-5"></i> Download free guide</a>
                    </button>

                    <div>
                        <span class="fw-light">
                            Have questions? <a class="fw-bold from-left" href="#nogo">Get free Sample <i class="fa-solid fa-arrow-right-long"></i> </a>
                        </span>
                    </div>
                </div>
                
                <!---- Sezione immagine ---->
                <div class="col-8 position-relative p-4 d-flex justify-content-end">
                    <div class="img-container">
                        <img class="w-100 object-fit-cover d-block" src="../../../public/course-portal/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="Woman hero">
                    </div>
                    <div class="pattern-section">
                        <div class="pattern-1">
                            <img class="w-100" src="../../../public/course-portal/images/maxcoach-shape-02.png" alt="Pattern 1">
                        </div>
                        <div class="pattern-2">
                        </div>
                        <div class="pattern-3">
                        </div>
                        <div class="pink-circle"></div>
                    </div>
                </div>
                
                <div class="col-12 my-5">
                    <div class="row g-0">
                        <div class="logo-container d-flex justify-content-center align-items-center" v-for="(singleLogo, i) in clientLogos">
                            <img class="w-80 d-block" :src="singleLogo.path" alt="Client Logo">
                        </div>
                    </div>
                </div>
            
            </div>
        
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;
    .hero-section{
        background-color: white;
        padding-top: 100px;

        h1{
            color: $main-purple-color;
        }

        p{
            color: $main-indigo-color;
        }

        button{
            background-color: $main-green-color;
            border: none;
            transition: 0.2s ease-in;
            
            a{
                text-decoration: none;
                color: white;
            }

            &:hover{
                background-color: $main-purple-color;
            }
        }

        span{
            color: $main-indigo-color;

            a{
                width: 50px;
                text-decoration: none;
                color: $main-green-color;
                // border-bottom: 0.5px solid rgb(234, 234, 234);
                
                &.from-left::after {
                    display:block;
                    content: '';
                    border-bottom: 0.5px solid $main-green-color; 
                    transform: scaleX(0);  
                    transition: transform 0.5s ease-in-out;
                    // &:hover:after { transform: scaleX(1); }
                    // &.fromRight:after{ transform-origin:100% 50%; }
                }
                &.from-left:after{transform-origin: 100% 50%; }

                &.from-left:hover:after{ transform: scaleX(1); transform-origin:   0% 50%; border-bottom: 0.5px solid rgb(234, 234, 234) }
                
            }
        }

        .img-container{
            width: 500px;
            height: 500px;
            border-radius: 50%;
            position: relative;
            overflow: hidden;
            z-index: 2;
        }

        .pattern-section{

            .pattern-1 {
                width: 100px;
                height: 100px;
                position: absolute;
                right: 0px;
                top: 100px;
                z-index: 3;
            }

            .pattern-2{
                width: 200px;
                height: 200px;
                background-image: url('../../public/course-portal/images/maxcoach-shape-07.png');
                background-repeat: no-repeat;
                position: absolute;
                bottom: 0px;
                right: 0px;
                z-index: 1;
            }

            .pattern-3{
                width: 300px;
                height: 300px;
                background-image: url('../../public/course-portal/images/maxcoach-shape-08.png');
                background-repeat:space;
                position: absolute;
                top: 80px;
                left: 300px;
                z-index: 1;
            }

            .pink-circle{
                width: 80px;
                height: 80px;
                border-radius: 50%;
                border: 8px solid #ECC5AB;
                background-color: none;
                z-index: 3;
                position: absolute;
                bottom: 90px;
                left: 300px;
            }

        }
        
        .logo-container{
            width: calc((100% / 6) - 40px);
            margin: 0 20px;
            object-fit: contain;
            opacity: 0.5;
            transition: 0.2s ease-in;
            
            &:hover{
                opacity: 1;
            }
        }
    }
</style>
