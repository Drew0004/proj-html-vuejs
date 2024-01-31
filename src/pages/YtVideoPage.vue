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
    <div class="page-container vh-100 bg-black">
        <div class="get-back py-5 d-flex justify-content-end">
            <router-link :to="{ name: 'home'}">
                <i class="me-5 fs-2 fa-solid fa-xmark"></i>
            </router-link>
        </div>
        <div class="yt-content d-flex mt-5 justify-content-center align-items-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=WQ1N4obJyOxpG-IB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as*;

.get-back{
    i{
        cursor: pointer;
        color: $main-gray-color;
        transition: 0.2s ease-in-out;

        &:hover{
            color: white;
        }
    }
}

</style>
