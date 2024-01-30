<script>
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
    <section class="slider-section py-5">
        <div class="container">
            <div class="text-center">
                <h4>Great Words About MaxCoach</h4>
                <h2>Our <span>top learners'</span> verbatim</h2>
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
}

</style>
