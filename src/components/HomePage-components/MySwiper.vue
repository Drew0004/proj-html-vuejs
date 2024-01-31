<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

import 'swiper/css/pagination';

import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default {
    data() {
        return {
            swiperCards:[
                {
                    title:"It's a choice of quality for people with special needs",
                    description:"I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
                    image:'../../../public/course-portal/images/testimonial-avata-03.jpg',
                    name:'Florence Themes',
                    role:'/Multimedia Admin'
                },
                {
                    title:'High Level of efficiency and scientific teaching methods',
                    description:'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
                    image:'../../../public/course-portal/images/testimonial-avata-02.jpg',
                    name:'Mina Hollace',
                    role:'/Freelancer'
                },
                {
                    title:'Professional team of specialists and passionate mentors at reach',
                    description:'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    image:'../../../public/course-portal/images/testimonial-avata-04.jpg',
                    name:'Madley Pondor',
                    role:'/IT Specialist'
                },
                {
                    title:'The MaxCoach team works really hard to ensure high quality',
                    description:'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to be adopted for learners of all levels.',
                    image:'../../../public/course-portal/images/testimonial-avata-01.jpg',
                    name:'Luvic Dubble',
                    role:'/Private Tutor'
                },
     
            ],
        };
    },
    methods: {
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Pagination,],
      };
    },
    mounted(){
    }
}
</script>

<template>
    <section class="swiper-section mt-5">
        <swiper
            :loop = "true"
            :slidesPerView="3"
            :spaceBetween="50"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
            
        >
            <swiper-slide
            v-for="(singleCard, i) in swiperCards">
                <div class="row p-5 align-items-center text-start">
                    <h2 class="fs-5 fw-bold mb-4">{{ singleCard.title }}</h2>
                    <p class="fw-light mb-5">{{ singleCard.description }}</p>
                    <div class="d-flex flex-wrap align-items-center">
                        <div class="img-container">
                            <img class="w-100" :src="singleCard.image" :alt="singleCard.name">
                        </div>
                        <div class="ms-4">
                            <h4 class="fs-6">{{ singleCard.name }}</h4>
                            <h5 class="fs-6 fw-light">{{ singleCard.role }}</h5>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;

.swiper {
  width: 100%;
  height: 450px;
}


.swiper-slide {
    height: 100%;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms opacity;

  &:not(.swiper-slide-next) {
    opacity: 0.4;
  }

  h2{
    color: $main-purple-color;
    line-height: 2rem;
  }

  p{
    color: $main-gray-color;
  }

  .img-container{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }

  h4{
    color: $main-purple-color;
    text-transform: uppercase;
  }

  h5{
    color: $main-gray-color;
  }
  .swiper-pagination-horizontal{
      margin-top: 50px;
  }

  .my-opacity{
    opacity: 0.5;
  }
}


</style>
