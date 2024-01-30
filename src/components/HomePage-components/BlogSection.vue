<script>
export default {
    data() {
        return {
            links:[
                {
                    link: 'Become a Better Blogger: Content Planning' 
                },
                {
                    link: 'Promoting Your Online Business on Pinterest' 
                },
                {
                    link: 'Gamification and Game-Based Learning' 
                },
                {
                    link: "Designing an Online Course from Expert's Perspective" 
                },
                {
                    link: 'Why Online Courses Are the Future of Education' 
                }
            ],
            cards:[
                {
                    image: '../../../public/course-portal/images/card1.jpg',
                    class: 'Business',
                    title: 'Ten Benefits Of Rentals That May Change Your Perspective',
                    date:'Dec 28, 2020',
                    views:'3,037'
                },
                {
                    image: '../../../public/course-portal/images/card2.jpg',
                    class: 'Business',
                    title: '10 Things Successful Mompreneurs Do Different',
                    date:'Dec 28, 2020',
                    views:'2,666'
                }
            ]
        };
    },
    methods: {

    }
}
</script>

<template>
    <section class="blog-section py-5">
        <div class="container">

            <div class="row justify-content-between align-items-center">
                <div class="col-4">
                    <h4 class="fw-light fs-6">Enjoyable Insights</h4>
                    <h2 class="fw-bold mb-4">Most Viewed <span class="fw-light">Best Blogs</span></h2>
                    <ul>
                        <li class="mb-3" v-for="(singleLink, i) in links">
                            <a class="fw-semibold" href="#nogo">
                                <i class="fa-solid fa-arrow-right-long"></i>
                                {{ singleLink.link }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-7 d-flex justify-content-between p-0">
                    <div v-for="(singleCard, i) in cards" class="col-5 my-card">
                        <div class="upper-card">
                            <img class="w-100" :src="singleCard.image" :alt="singleCard.title">
                        </div>
                        <div class="lower-card p-4">
                            <h4 class="fw-light fs-6">{{ singleCard.class }}</h4>
                            <h2 class="fw-bold fs-5">{{ singleCard.title }}</h2>
                            <span class="fw-light me-4"><i class="fa-regular fa-calendar me-2"></i> {{ singleCard.date }}</span>
                            <span class="fw-light"><i class="fa-regular fa-eye me-2"></i> {{ singleCard.views }}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;

.blog-section{
    background-color: $main-cream-color;

    h4{
        color: $main-indigo-color;
        text-transform: uppercase;
    }

    h2{
        color: $main-purple-color;

        span{
            color: $main-green-color;
        }
    }

    ul{
        list-style: none;
        margin: 0;
        padding: 0;

        a{
            text-decoration: none;
            color: $main-purple-color;
            transition: 0.2s ease-in-out;
            &:hover{
                color: $main-green-color;
            }
        }
    }

    .my-card{
        border-radius: 5px;
        overflow: hidden;
        
        &:hover img{
            transition: 1s ease-in-out;
            scale: 1.1;
            cursor: pointer;
        }
        .upper-card{
            width: 100%;
            overflow: hidden;
    
        }
    
        .lower-card{
            background-color: white;
    
            h2{
                line-height: 2rem;
                cursor: pointer;
                transition: 0.2s ease-in-out;
                
                &:hover{
                    color: $main-green-color;
                }
            }

            h4{
                cursor: pointer;
                transition: 0.2s ease-in-out;

                &:hover{
                    color: $main-green-color;
                }
            }
            
    
            span{
                color: $main-gray-color;
            }
        }
    }
}

</style>
