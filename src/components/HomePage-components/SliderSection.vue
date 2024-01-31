<script>
import MySwiper from './MySwiper.vue';
export default {
    data() {
        return {
        };
    },
    methods: {

    },
    components:{
        MySwiper
    }
}
</script>

<template>
    <section class="slider-section py-5">
        <div class="container">
            <div class="text-center">
                <h4 class="fs-6 fw-light">Great Words About MaxCoach</h4>
                <h2 class="fw-bold">Our <span class="fw-light">top learners'</span> verbatim</h2>
            </div>

            <MySwiper/>

            <div class="row cta-slider justify-content-center position-relative">
                <div class="col-10 text-center">
                    <h3 class="fw-bold fs-4 mb-3">Start today for getting <span class="fw-light">Online Certification</span></h3>
                    <h2 class="fw-semibold fs-1 mb-4">You can be your own guiding star with our help!</h2>
                    <button class="rounded-3 mb-3">
                            <a class="fw-bold" href="#nogo">Get started now</a>
                    </button>
                </div>
                <div class="graphic-elements">
                    <div class="element-1">
                        <img class="w-100" src="../../../public/course-portal/images/maxcoach-shape-02.png" alt="Element 1">
                    </div>
    
                    <div class="element-2">
                        <img class="w-100" src="../../../public/course-portal/images/maxcoach-shape-01.png" alt="Element 2">
                    </div>
    
                    <div class="cream-circle"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;

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

        .cta-slider{
            padding: 100px 0;

            h2{
            color: $main-purple-color;

                span{
                    color: $main-green-color;
                }
            }   

            h3{
                color: $main-purple-color;
    
                span{
                    color: $main-green-color;
                }
            }
    
            button{
            background-color: $main-green-color;
            border: none;
            padding: 15px 80px;
            transition: 0.2s ease-in;
            
                a{
                    text-decoration: none;
                    color: white;
                    font-size: 0.8rem;
                }
    
                &:hover{
                    background-color: $main-purple-color;
                }
            }
        }


        .element-1{
            width: 130px;
            height: 130px;
            position: absolute;
            right: 40px;
            bottom: 150px;


        }

        .element-2{
            width: 130px;
            height: 130px;
            position: absolute;
            left: 40px;
            bottom: 30px;

        }

        .cream-circle{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 7px solid #E7DCD2;
            background-color: none;
            position: absolute;
            left: 40px;
            bottom: 230px;

        }
}

</style>
