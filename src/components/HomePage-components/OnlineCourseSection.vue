<script>
export default {
    data() {
        return {
            onlineCourse: [
                {
                    image:'../../public/course-portal/images/cardplaceholder.jpg',
                    price: 'Free',
                    title: 'Personal Finance: Financial Security Thinking & Principles',
                    lessons: '2',
                    students:'299'
                },
                {
                    image:'../../public/course-portal/images/course-02-480x298.jpg',
                    price: '$40.00',
                    title: 'Learning to Write as a Professional Author',
                    lessons: '20',
                    students:'77'
                },
                {
                    image:'../../public/course-portal/images/stock-full-hd-03-480x298.jpg',
                    price: 'Free',
                    title: 'Customer-centric Info Tech Strategies',
                    lessons: '24',
                    students:'956'
                },
                {
                    image:'../../public/course-portal/images/stock-full-hd-04-480x298.jpg',
                    price: '$19.00',
                    title: 'Open Programming Courses for Everyone: Python',
                    lessons: '17',
                    students:'66'
                },
                {
                    image:'../../public/course-portal/images/stock-full-hd-06-480x298.jpg',
                    price: '$26.00',
                    title: 'Academic Listening and Note-taking',
                    lessons: '14',
                    students:'68'
                },
                {
                    image:'../../public/course-portal/images/course-featured-image-01-480x298.jpg',
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
        <section class="online-course-section py-5">
            
            <div class="container">
                <h4 class="text-center fs-6 mb-3">Stimulated to learn?</h4>
                <h2 class="text-center fw-bold mb-5">Featured Online Courses</h2>

                <div class="row g-0">
                    <div v-for="(singleCourse, i) in onlineCourse" class="course-card p-3 rounded-2">
                        <div class="col-5">
                            <div class="img-card">
                                <img class="w-100 d-block" :src="singleCourse.image" alt="">
                            </div>

                        </div>
                        <div class="col-7">

                            <h4 class="mb-3">{{ singleCourse.price }}</h4>
                            <h5 class="mb-3 fw-semibold">{{ singleCourse.title }}</h5>
                            <span class="fw-light me-4"><i class="fa-regular fa-file-lines"></i> {{ singleCourse.lessons }} Lesson</span>
                            <span class="fw-light"><i class="fa-regular fa-user"></i> {{ singleCourse.students }} Students</span>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-5">
                    <button class="rounded-3 mb-3">
                        <a class="fw-bold" href="#nogo"> View all courses <i class="fa-solid fa-arrow-right-long"></i></a>
                    </button>
                </div>
            </div>

        </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;

.online-course-section{
        background-color: $main-softgray-color;

        .container > h4:first-of-type{
            color: $main-gray-color;
            text-transform: uppercase;
        }

        h2{
            color: $main-purple-color;
        }
        .course-card{
            width: calc((100% / 2) - 40px);
            margin: 20px 20px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            transition: 0.2s ease-in;

            &:hover{
                background-color: white;
            }
            .img-card{
                width: 200px;
                height: 200px;
                border-radius: 50%;
                overflow: hidden;
                object-fit: cover;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }

            }
            h4{
                color: $main-green-color;
                font-weight: bold;
            }
            h5{
                color: $main-purple-color;
                &:hover{
                    transition: 0.2s ease-in;
                    color: $main-green-color;
                    cursor: pointer;
                }
            }
            span{
                color: $main-gray-color;
                font-size: 0.9rem;
            }

        }
        button{
        background-color: $main-green-color;
        border: none;
        padding: 15px 50px;
        transition: 0.2s ease-in;
        
            a{
                text-decoration: none;
                color: white;
            }

            &:hover{
                background-color: $main-purple-color;
            }
        }
}
    
</style>
