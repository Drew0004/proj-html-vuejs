<script>
export default {
    data() {
        return {
            cardData: [
                {
                    title:'Successfully trained',
                    limit: '1790',
                    category: 'Enrolled Learners',
                    counter:'0'                    
                },
                {
                    title:'Proudly Received',
                    limit: '19',
                    category: 'Countrywide Awards',
                    counter:'0'                      
                },
                {
                    title:'Firmly Established',
                    limit: '24',
                    category: 'Local Branches',
                    counter:'0'                      
                },
                {
                    title:'Getting Featured on',
                    limit: '1090',
                    category: 'Blog Posts',
                    counter:'0'                     
                },
            ]
        };
    },
    methods: {
        startCountAnimation() {
            this.cardData.forEach((singleCard, i) => {
                const interval = setInterval(() => {
                    if (singleCard.counter < singleCard.limit) {
                        singleCard.counter++;
                    } else {
                        clearInterval(interval);
                    }
                }, 1 * i);
            });
        }
    },
    created(){
        this.startCountAnimation()
    }
}
</script>

<template>
    <section class="counter-section">
        <div class="container">
            <div class="row">
                <div v-for="(singleCard, i) in cardData" class="col-3 card-data-container text-center">
                    <h3 class="fw-bold fs-2 mb-4">{{ singleCard.title }}</h3>
                    <h2 class="fw-bold display-1 mb-3">{{ singleCard.counter }}</h2>
                    <h4 class="fs-5 fw-bold">{{ singleCard.category }}</h4>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;
.counter-section{
    background-color: white;

    .card-data-container{
        border-left: 0.5px solid #F5F0EB;
        border-right: 0.5px solid #F5F0EB;
        padding: 150px 50px;

        h3{
            color: $main-purple-color;
        }
        h2{
            color: $main-green-color;
        }
        h4{
            color: $main-indigo-color;
            text-transform: uppercase;
        }
    }
}
</style>
