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

            <div class="row justify-content-between">
                <div class="col-4 border">
                    <h4>Enjoyable Insights</h4>
                    <h2>Most Viewed <span>Best Blogs</span></h2>
                    <ul>
                        <li v-for="(singleLink, i) in links">
                            <a href="#nogo">
                                <i class="fa-solid fa-arrow-right-long"></i>
                                {{ singleLink.link }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-7 bg-success d-flex justify-content-between p-0">
                    <div class="col-5 bg-primary">
                        <div class="upper-card">
                        </div>
                        <div class="lower-card">
                            <h4></h4>
                            <h2></h2>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="col-5 bg-primary">card 2</div>
                </div>
            </div>

        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;

.blog-section{
    background-color: $main-cream-color;
}

</style>
