<script>
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
            ]
        };
    },
    methods: {

    }
}
</script>

<template>
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
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;
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
    
</style>
