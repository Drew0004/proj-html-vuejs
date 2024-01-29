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
            ],
            onlineCourse: [
                {
                    image:'',
                    price: 'Free',
                    title: 'Personal Finance: Financial Security Thinking & Principles',
                    lessons: '2',
                    students:'299'
                },
                {
                    image:'',
                    price: '$40.00',
                    title: 'Learning to Write as a Professional Author',
                    lessons: '20',
                    students:'77'
                },
                {
                    image:'',
                    price: 'Free',
                    title: 'Customer-centric Info Tech Strategies',
                    lessons: '24',
                    students:'956'
                },
                {
                    image:'',
                    price: '$19.00',
                    title: 'Open Programming Courses for Everyone: Python',
                    lessons: '17',
                    students:'66'
                },
                {
                    image:'',
                    price: '$26.00',
                    title: 'Academic Listening and Note-taking',
                    lessons: '14',
                    students:'68'
                },
                {
                    image:'',
                    price: '$39.00',
                    title: 'Master jQuery in a Short Period of Time',
                    lessons: '6',
                    students:'51'
                },
            ]
        };
    },
    methods: {

    }
}
</script>

<template>
    <main>
        <!---- Hero section ---->
        <section class="hero-section">
            <div class="container">

                <div class="row align-items-center pt-5">
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
                                Have questions? <a class="fw-bold" href="#nogo">Get free Sample <i class="fa-solid fa-arrow-right-long"></i> </a>
                            </span>
                        </div>
                    </div>
                    
                    <!---- Sezione immagine ---->
                    <div class="col-8 position-relative p-4 d-flex justify-content-end">
                        <div class="img-container">
                            <img class="w-100 object-fit-cover d-block" src="../../public/course-portal/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="Woman hero">
                        </div>
                        <div class="pattern-section">
                            <div class="pattern-1">
                                <img class="w-100" src="../../public/course-portal/images/maxcoach-shape-02.png" alt="Pattern 1">
                            </div>
                            <div class="pattern-2">
                            </div>
                            <div class="pattern-3">
                            </div>
                            <div class="pink-circle"></div>
                        </div>
                    </div>
                    
                    <div class="col-12 my-5">
                        <div class="row">
                            <div class="logo-container d-flex justify-content-center align-items-center" v-for="(singleLogo, i) in clientLogos">
                                <img class="w-80 d-block" :src="singleLogo.path" alt="Client Logo">
                            </div>
                        </div>
                    </div>
                
                </div>
            
            </div>
        </section>

        <!---- Online course section ---->
        <section class="online-course-section py-5">
            
            <div class="container">
                <h4 class="text-center fs-6 mb-3">Stimulated to learn?</h4>
                <h2 class="text-center fw-bold">Featured Online Courses</h2>

                <div class="row">
                    <div v-for="(singleCourse, i) in onlineCourse" class="course-card">
                        <div>
                            <img src="../../public/course-portal/images" alt="">
                        </div>
                        <h4>{{ singleCourse.price }}</h4>
                        <h5>{{ singleCourse.title }}</h5>
                        <span><i class="fa-solid fa-file-lines"></i> {{ singleCourse.lessons }} Lesson</span>
                        <span><i class="fa-regular fa-user"></i> {{ singleCourse.students }} Students</span>
                    </div>
                </div>
            </div>

        </section>
    
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as*;
    
    .hero-section{
        background-color: white;

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
                text-decoration: none;
                color: $main-green-color;
                border-bottom: 0.5px solid $main-gray-color;
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
        }
    }

    .online-course-section{
        background-color: $main-softgray-color;

        h4{
            color: $main-gray-color;
            text-transform: uppercase;
        }

        h2{
            color: $main-purple-color;
        }
    }
</style>
